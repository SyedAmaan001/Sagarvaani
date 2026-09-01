export type AgentState = 'idle' | 'running' | 'validated' | 'conflict';

export type AgentStatus = {
  name: string;
  state: AgentState;
};

export type EvidenceItem = {
  source: string;
  summary: string;
};

export type ConversationTurn = {
  id: string;
  role: 'user' | 'sagarvani';
  text: string;
  evidence?: EvidenceItem[];
};

export type Readout = {
  label: string;
  value: string;
  unit?: string;
  isActive?: boolean;
};

export type Alert = {
  id: string;
  type: 'danger' | 'warning' | 'info';
  title: string;
  message: string;
};

export type MapLayer = 'SST' | 'Currents' | 'PFZ' | 'Cyclone' | 'Wave Height';

export type DemoState = {
  step: number;
  // 0: Initial
  // 1: User asked question
  // 2: Agents running
  // 3: Reasoning/Conflict check
  // 4: Final response
};
