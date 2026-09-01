# Sagarvani — Product Requirements Document (PRD)

**Problem Statement:** SIH26176 — ORCA: Marine Ecosystem Reasoning with Collaborative Agents
**Theme:** Disaster Management | **Category:** Software
**Team:** Helios Luna (SIH2026-023) | Dayananda Sagar University

---

## 1. Product Summary

Sagarvani is a **conversational marine decision-intelligence platform**. A user (fisherman, researcher, maritime operator, or disaster-management authority) asks a question in natural language; a multi-agent system (codenamed **ORCA**) fuses ocean, weather, GIS and risk data, reasons across sources, validates the result, and returns an **explainable, evidence-backed recommendation** — through a web/app, a phone helpline, or a low-bandwidth channel.

Two things need to be built for this handoff:
1. **Marketing / product site** — explains Sagarvani, its agents, and its impact (public-facing, Cosmoq-style).
2. **Home Dashboard (product UI)** — the actual working console where a logged-in user talks to ORCA and sees marine intelligence visualized (satellite-ops-style UI).

---

## 2. Goals

- Communicate a complex multi-agent system in a way a jury, a fisherman, and a maritime operator can each immediately understand.
- Make the dashboard feel like **mission control for the ocean** — live, spatial, trustworthy — not a generic chat window.
- Ship something demo-able: hero flow is "ask a question → watch agents work → get a validated, explainable answer."
- Support 3 access paths at the product level (Web/App, Helpline, Low-Bandwidth) even if only Web/App is built first.

## 3. Target Users / Personas

| Persona | Need | Primary surface |
|---|---|---|
| Fishermen | Simple, safe trip-planning decisions; local language; low connectivity | Helpline / keypad phone / simplified mobile view |
| Researchers | Integrated datasets, advanced visualization, scenario analysis | Web dashboard, deep drill-down |
| Maritime operators | Route planning, risk assessment, operational intelligence | Web dashboard, map-first |
| SIH Jury / stakeholders (secondary) | Understand innovation, feasibility, impact quickly | Marketing site |

## 4. Information Architecture

### A. Marketing Site (public)
1. Navbar — Logo, Product, How it Works, Impact, About, Contact + "Launch Console" CTA
2. Hero — headline, subhead, primary CTA, hero visual (dashboard mockup), status badge ("Prototype — SIH 2026")
3. Trusted/Data-source strip — INCOIS, IMD, ISRO Bhuvan, Bhoonidhi, MOSDAC, BHASHINI+Sarvam logos/wordmarks
4. What Sets Sagarvani Apart — 3 cards: Multi-Agent Intelligence · Re-planning on Contradictions · Explainable Recommendations (mirrors Cosmoq's "Speed / Deep capabilities / Control")
5. How It Works — tabbed feature section (mirrors Cosmoq's Usage/Technology/Data tabs): **Understand → Orchestrate → Validate**, each with a short description + supporting visual of the agent pipeline
6. The Agents — replaces Cosmoq's "Products" tabs: Marine Data Agent, Weather Agent, GIS Agent, Ocean Analytics Agent, Risk Agent, Spatial Reasoning Agent — small card grid, icon + one-liner each
7. 3 Steps to Get Started (mirrors Cosmoq's "Steps to use"): (1) Ask your question via Web/App, Helpline or Portal → (2) ORCA orchestrates specialist agents → (3) Get a validated, explainable recommendation
8. Reliability & Validation section (replaces Cosmoq's "Data & Privacy") — re-planning on contradiction, fallback data sources, evidence-backed answers
9. Impact section — Fishermen / Researchers / Maritime Operators cards (from the PPT) + Social/Economic/Environmental benefit cards
10. Access Everywhere strip — Web/App, Helpline, Low-Bandwidth Portal (replaces Cosmoq's "Integration" partner-icons section)
11. Final CTA banner — "Step into Sagarvani" style close
12. Footer — nav, docs/references (research sources), social, team credit
13. **No pricing/payment section** (explicitly excluded per direction)

### B. Home Dashboard (post "Launch Console")
1. **Conversation rail** (left or bottom-anchored) — the primary input; user types/speaks a question, sees the interpreted intent
2. **Center — Map & Visualization canvas** — GeoPandas/Leaflet-driven ocean map: currents, SST, PFZ zones, cyclone tracks, vessel/route overlays, toggled by layer
3. **Right — Live Agent Status rail** — mirrors the satellite-ops inspiration (Towers list → becomes "Active Agents" list: Marine Data, Weather, GIS, Ocean Analytics, Risk, Spatial Reasoning), each with a status pill (Idle/Running/Validated/Conflict)
4. **Top strip — Key readouts** — mirrors the Starlink-style speed/target readout: e.g. current sea state, wind, wave height, active alerts count, using large numeric callouts
5. **Bottom/side — Reasoning & Validation panel** — shows the trace: which sources were used, whether cross-validation passed, and the final recommendation with an "evidence" expandable
6. **Alerts panel** — cyclone/tsunami/high-wave warnings, styled like an incident/traffic panel (severity-colored)
7. **History / session list** — past queries, revisitable

## 5. Core User Flow (MVP demo flow)

1. User lands on dashboard, sees a live map + prompt bar ("Ask Sagarvani...").
2. User asks e.g. *"Is it safe for me to take my boat out near Mangalore tomorrow morning?"*
3. Conversation Agent interprets intent → Main Orchestrator dispatches to Weather, Marine Data, Risk, GIS agents (rail shows each turn "Running" → "Done").
4. Reasoning/Validation agent cross-checks results; if conflict, shows a visible "Re-checking..." state.
5. Visualizer agent renders the relevant layer on the map (e.g. wave height + PFZ overlay for that coastline).
6. Final answer streams into the conversation rail: a plain-language recommendation + confidence + "why" (evidence list, expandable), in the user's language.

## 6. Functional Requirements

- FR1: Natural-language query input (text; voice optional via BHASHINI/Sarvam in later phase)
- FR2: Orchestration visualization — user can see which agents are active/complete/in conflict, in real time or simulated real time
- FR3: Map-based visualization of at least: SST, wave height/currents, PFZ zones, cyclone/high-wave warnings
- FR4: Every recommendation must show its evidence/sources and a confidence indicator
- FR5: Re-planning/re-check state must be visibly distinguishable from a normal pass
- FR6: Marketing site must be fully responsive and navigable without the dashboard being live (can be a mocked/staged view for hackathon demo)
- FR7: Support for at least one non-English language toggle in the UI copy layer (placeholder acceptable for MVP)
- FR8: Session/query history list

## 7. Non-Functional Requirements

- NFR1: Perceived responsiveness — agent status should update within visible feedback (<1s UI feedback even if backend is slower/mocked for demo)
- NFR2: Works down to a 13" laptop screen for judging; dashboard should still be usable at ~1366×768
- NFR3: Color contrast must remain accessible against the dark navy theme (WCAG AA minimum for text)
- NFR4: Map interactions must not block the conversation rail (independent scroll/interaction zones)
- NFR5: Codebase structured so a real backend (FastAPI + the agent stack) can be swapped in without a frontend rewrite (mock data layer behind a clean API boundary)

## 8. MVP Scope vs. Later Phases

**In scope for hackathon MVP:**
- Marketing site (all sections above, minus pricing)
- Dashboard shell: map canvas, prompt bar, agent status rail, reasoning/validation panel, alerts panel — wired to **mocked/sample data**
- One fully "scripted" demo query end-to-end

**Explicitly out of scope for MVP (note in doc, don't build):**
- Real helpline/IVR integration (Twilio) — design placeholder only
- Real BHASHINI/Sarvam voice pipeline — text-only for MVP
- User auth/accounts — single-session demo is fine
- Payment/pricing — excluded entirely, no placeholder needed

## 9. Success Metrics (for demo/jury framing, not analytics)

- A first-time viewer can explain what Sagarvani does within 15 seconds of seeing the homepage hero.
- A juror can watch the demo query and correctly narrate the agent pipeline back without being told.
- Every answer shown in the demo visibly cites its evidence.

## 10. Open Questions for the Team

- Which single demo query/scenario will be scripted for judging?
- Is voice input a "nice to have" stretch goal for the dashboard, given BHASHINI/Sarvam are already in the tech list?
- Do we need a login screen at all for the hackathon build, or does "Launch Console" go straight to the dashboard?
