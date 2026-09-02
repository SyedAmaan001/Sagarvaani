# Sagarvani --- ORCA Architecture

## Concept

ORCA is the reasoning/orchestration layer behind Sagarvani.

### Flow

`User Question` → `Intent / Context Interpretation` →
`Agent Orchestration` → `Specialist Data Retrieval / Analysis` →
`Evidence Fusion` → `Contradiction Detection` → `Re-planning / Re-check`
→ `Validation` → `Explainable Recommendation` →
`Visualization + Conversation`

## Specialist agents

### Marine Data Agent

Handles marine observations/advisories such as SST, chlorophyll, wave
conditions, currents, sea state and related ocean signals.

### Weather Agent

Handles weather, wind, rainfall, cyclone and coastal warning context.

### GIS Agent

Provides spatial/geographic context and map-layer operations.

### Ocean Analytics Agent

Combines and interprets oceanographic variables.

### Risk Agent

Transforms environmental signals into risk-oriented decision context.

### Spatial Reasoning Agent

Reasons about location, routes, zones and spatial relationships.

## Validation

The system should not silently choose one source when sources disagree.

Visible states: - `VALIDATED` - `RE-CHECKING` - `CONFLICT` -
`DEGRADED CONFIDENCE`

## Frontend contract

``` ts
type AgentStatus = {
  name: string;
  state: "idle" | "running" | "validated" | "conflict";
};

type EvidenceItem = {
  source: string;
  summary: string;
};

type ConversationTurn = {
  role: "user" | "sagarvani";
  text: string;
  evidence?: EvidenceItem[];
};

type Recommendation = {
  summary: string;
  confidence: number;
  validationState: "validated" | "rechecking" | "conflict";
  evidence: EvidenceItem[];
};
```

The frontend should consume these shapes whether the implementation is
mocked or connected to FastAPI.

## Safety language

Sagarvani is a decision-support system. It should communicate
uncertainty and evidence. It should not present itself as an authority
that guarantees safety or overrides official warnings.
