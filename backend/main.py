"""
Sagarvani FastAPI Backend
Main entry point — exposes the /query endpoint consumed by the Next.js frontend.
Security: X-API-Key header, validated against a SHA-256 hash stored in .env.
"""

import hashlib
import secrets
import os
from fastapi import FastAPI, Depends, HTTPException, Security
from fastapi.security import APIKeyHeader
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv

from agents.orchestrator import orchestrate

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

app = FastAPI(title="Sagarvani ORCA API", version="0.1.0")

# ── CORS ─────────────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── API Key Security ──────────────────────────────────────────────────────────
api_key_header = APIKeyHeader(name="X-API-Key", auto_error=False)

_STORED_HASH = os.getenv("SAGARVANI_API_KEY_HASH", "")


def validate_api_key(api_key: str = Security(api_key_header)) -> str:
    if not api_key:
        raise HTTPException(status_code=401, detail="Missing API Key. Pass it in the X-API-Key header.")

    # Hash the incoming key and compare securely (timing-safe)
    incoming_hash = hashlib.sha256(api_key.encode()).hexdigest()
    if not secrets.compare_digest(incoming_hash, _STORED_HASH):
        raise HTTPException(status_code=403, detail="Invalid API Key.")

    return api_key


# ── Request / Response schemas ──────────────────────────────────────────────

class EvidenceItem(BaseModel):
    source: str
    summary: str

class AgentStatus(BaseModel):
    name: str
    state: str

class ConversationTurn(BaseModel):
    id: str
    role: str
    text: str
    evidence: Optional[List[EvidenceItem]] = None

class QueryRequest(BaseModel):
    query: str

class QueryResponse(BaseModel):
    turn: ConversationTurn
    agent_states: List[AgentStatus]


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/health")
def health():
    """Public — no auth required. Used for uptime checks."""
    return {"status": "ok", "service": "Sagarvani ORCA API"}


@app.post("/query", response_model=QueryResponse, dependencies=[Depends(validate_api_key)])
def query(req: QueryRequest):
    """
    Protected — requires X-API-Key header.
    Runs the full ORCA agent pipeline and returns a validated recommendation.
    """
    result = orchestrate(req.query)
    return QueryResponse(**result)
