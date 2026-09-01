import { AgentStatus, ConversationTurn, Readout, Alert } from "../types";

export const initialAgents: AgentStatus[] = [
  { name: 'Marine Data', state: 'idle' },
  { name: 'Weather', state: 'idle' },
  { name: 'GIS', state: 'idle' },
  { name: 'Ocean Analytics', state: 'idle' },
  { name: 'Risk', state: 'idle' },
  { name: 'Spatial Reasoning', state: 'idle' },
];

export const initialReadouts: Readout[] = [
  { label: 'Sea State', value: '2', unit: 'Slight' },
  { label: 'Wind Speed', value: '12', unit: 'knots' },
  { label: 'Wave Height', value: '1.2', unit: 'm', isActive: true },
  { label: 'Active Alerts', value: '0' },
];

export const demoUserQuery = "Is it safe for me to take my boat out near Mangalore tomorrow morning?";

export const demoResponse: ConversationTurn = {
  id: 'msg-2',
  role: 'sagarvani',
  text: "Caution is advised for tomorrow morning near Mangalore. While wind speeds are moderate, offshore wave heights are projected to reach 2.5m due to a localized squall moving north from Kerala. Small fishing vessels should avoid venturing beyond 5 nautical miles.",
  evidence: [
    { source: "INCOIS Wave Forecast", summary: "2.5m wave height projected at 0600 hrs." },
    { source: "IMD Coastal Bulletin", summary: "Localized squall warning for Karnataka coast." },
    { source: "ISRO Bhuvan", summary: "Cross-validated vessel risk profile: High for small boats." }
  ]
};

export const demoAlerts: Alert[] = [
  {
    id: 'alert-1',
    type: 'warning',
    title: 'High Wave Advisory',
    message: '2.5m waves expected off Mangalore coast tomorrow 0600-1200.'
  }
];

export const demoReadoutsActive: Readout[] = [
  { label: 'Sea State', value: '4', unit: 'Moderate' },
  { label: 'Wind Speed', value: '22', unit: 'knots' },
  { label: 'Wave Height', value: '2.5', unit: 'm', isActive: true },
  { label: 'Active Alerts', value: '1' },
];
