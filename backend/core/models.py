from pydantic import BaseModel
from typing import List, Optional

class EvidenceItem(BaseModel):
    source: str
    summary: str

class AgentStatus(BaseModel):
    name: str
    state: str  # 'idle' | 'running' | 'validated' | 'conflict'

class ConversationTurn(BaseModel):
    id: str
    role: str  # 'user' | 'sagarvani'
    text: str
    evidence: Optional[List[EvidenceItem]] = None

class QueryRequest(BaseModel):
    query: str
    history: Optional[List[ConversationTurn]] = []

class QueryResponse(BaseModel):
    turn: ConversationTurn
    agent_states: List[AgentStatus]
