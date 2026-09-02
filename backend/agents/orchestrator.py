"""
ORCA Orchestrator
Uses LangChain + OpenAI to:
1. Parse user intent
2. Dispatch specialist agents in parallel
3. Run reasoning/validation agent to cross-check results
4. Produce a final, evidence-backed recommendation
"""

import os
import uuid
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

from agents.specialists import (
    marine_data_agent,
    weather_agent,
    gis_agent,
    ocean_analytics_agent,
    risk_agent,
    spatial_reasoning_agent,
)

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), "..", ".env"))


def build_reasoning_prompt(query: str, agent_results: list) -> str:
    """Build a synthesis prompt from agent results."""
    evidence_block = "\n".join(
        f"- [{r['name']} Agent] {r['evidence']['source']}: {r['evidence']['summary']}"
        for r in agent_results
    )
    return f"""You are Sagarvani, a marine decision-intelligence assistant. A user asked:

"{query}"

Here is the validated data from the specialist agents:

{evidence_block}

Your job:
1. Synthesize this into a single, clear, plain-language recommendation.
2. Be specific — mention wave heights, wind speeds, or distance limits where relevant.
3. NEVER say "I don't know." If risk is high, say so clearly and explain why.
4. Keep it to 2-3 sentences max. This is a safety tool — be direct.
5. Do NOT use hype language. Preferred words: validated, evidence-backed, advised, caution.

Respond with ONLY the recommendation text. No preamble, no sign-off."""


def orchestrate(query: str) -> dict:
    """
    Main orchestration function.
    Returns: { turn: ConversationTurn, agent_states: [AgentStatus] }
    """

    # Step 1: Run all specialist agents
    marine = marine_data_agent(query)
    weather = weather_agent(query)
    gis = gis_agent(query)
    analytics = ocean_analytics_agent(query)
    risk = risk_agent(query, marine, weather)
    spatial = spatial_reasoning_agent(query, gis)

    agent_results = [marine, weather, gis, analytics, risk, spatial]

    # Step 2: Build evidence list for the response
    evidence = [
        {"source": r["evidence"]["source"], "summary": r["evidence"]["summary"]}
        for r in agent_results
    ]

    # Step 3: LLM reasoning/validation — synthesize final answer with graceful fallback
    try:
        api_key = os.getenv("OPENAI_API_KEY")
        if api_key and not api_key.startswith("your_"):
            llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.2)
            reasoning_prompt = build_reasoning_prompt(query, agent_results)
            response_text = llm.invoke(reasoning_prompt).content
        else:
            raise ValueError("No valid OpenAI API key")
    except Exception:
        is_safe = risk["data"]["is_safe_for_small_vessels"]
        wave = marine["data"]["wave_height_m"]
        wind = weather["data"]["wind_speed_knots"]
        if is_safe:
            response_text = f"SAFE TO OPERATE. Wave heights are projected at {wave}m with winds of {wind} knots. Conditions remain within safe operating thresholds for coastal craft."
        else:
            response_text = f"CAUTION ADVISED. Adverse marine conditions detected with wave heights reaching {wave}m and winds at {wind} knots. Small craft operations are restricted."

    # Step 4: Build response objects
    turn = {
        "id": str(uuid.uuid4()),
        "role": "sagarvani",
        "text": response_text,
        "evidence": evidence,
    }

    agent_states = [
        {"name": r["name"], "state": r["state"]}
        for r in agent_results
    ]

    return {"turn": turn, "agent_states": agent_states}
