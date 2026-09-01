"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { 
  AgentStatus, 
  ConversationTurn, 
  Readout, 
  Alert, 
  MapLayer 
} from "@/lib/types";
import { 
  initialAgents, 
  initialReadouts, 
  demoAlerts, 
  demoReadoutsActive 
} from "@/lib/mock-data/scenario";
import { queryOrca } from "@/lib/api/orca";
import { AgentStatusRail } from "./AgentStatusRail";
import { ReadoutStrip } from "./ReadoutStrip";
import { ConversationRail } from "./ConversationRail";
import { AlertsPanel } from "./AlertsPanel";
import { ReasoningPanel } from "./ReasoningPanel";
import { Layers } from "lucide-react";

// Dynamically import MapCanvas to avoid SSR issues with Leaflet
const MapCanvas = dynamic(() => import("./MapCanvas"), { ssr: false });

export function DashboardClient() {
  const [agents, setAgents] = useState<AgentStatus[]>(initialAgents);
  const [readouts, setReadouts] = useState<Readout[]>(initialReadouts);
  const [turns, setTurns] = useState<ConversationTurn[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [activeLayers, setActiveLayers] = useState<MapLayer[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showReasoning, setShowReasoning] = useState(false);
  
  const [trace, setTrace] = useState<string[]>([]);

  // Toggle map layers
  const toggleLayer = (layer: MapLayer) => {
    setActiveLayers(prev => prev.includes(layer) ? prev.filter(l => l !== layer) : [...prev, layer]);
  };

  const handleAsk = async (query: string) => {
    // 1. Add user message immediately
    setTurns(prev => [...prev, { id: Date.now().toString(), role: 'user', text: query }]);
    setIsTyping(true);

    // 2. Show agents as running while we wait for backend
    setAgents(agents.map(a =>
      ['Weather', 'Marine Data', 'Risk'].includes(a.name) ? { ...a, state: 'running' } : a
    ));

    try {
      // 3. Call real ORCA backend
      const result = await queryOrca(query);

      // 4. Update agent states and readouts from real response
      setAgents(result.agent_states);
      setReadouts(demoReadoutsActive);  // still use mock readouts until live data APIs integrated
      setAlerts(demoAlerts);
      setActiveLayers(['Wave Height', 'Cyclone']);
      setTrace(
        result.agent_states.map((a: { name: string; state: string }) => `${a.name} Agent → ${a.state}`)
      );
      setShowReasoning(true);
      setIsTyping(false);
      setTurns(prev => [...prev, result.turn]);

    } catch (err) {
      // Fallback to mock if backend is unreachable (safe for demo)
      console.warn("ORCA backend unreachable, using mock response.", err);
      setTimeout(() => {
        setAgents(agents.map(a => ({ ...a, state: 'validated' as const })));
        setReadouts(demoReadoutsActive);
        setAlerts(demoAlerts);
        setActiveLayers(['Wave Height', 'Cyclone']);
        setTrace([
          "Weather Agent fetched IMD forecast.",
          "Marine Data Agent fetched INCOIS wave height (2.5m).",
          "Risk Agent: HIGH risk for small vessels.",
          "Reasoning Agent verified. Confidence: 92%."
        ]);
        setShowReasoning(true);
        setIsTyping(false);
        setTurns(prev => [...prev, {
          id: Date.now().toString(),
          role: 'sagarvani' as const,
          text: "Caution is advised for tomorrow morning near Mangalore. Wave heights are projected at 2.5m with wind speeds of 22 knots due to a localized squall. Small fishing vessels should avoid venturing beyond 5 nautical miles.",
          evidence: [
            { source: "INCOIS Wave Forecast", summary: "2.5m wave height projected at 0600 hrs." },
            { source: "IMD Coastal Bulletin", summary: "Localized squall warning for Karnataka coast." }
          ]
        }]);
      }, 3000);
    }
  };

  return (
    <div className="flex h-screen w-full bg-bg-sunken overflow-hidden selection:bg-primary/30 text-foreground font-sans">
      
      {/* Left: Conversation */}
      <ConversationRail turns={turns} onAsk={handleAsk} isTyping={isTyping} />

      {/* Center: Main Canvas */}
      <div className="flex-1 flex flex-col relative z-0 min-w-0">
        <ReadoutStrip readouts={readouts} />
        
        <div className="flex-1 relative">
          <AlertsPanel alerts={alerts} />
          
          {/* Map Layer Controls */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            <div className="bg-bg-elevated border border-border p-2 rounded-lg shadow-xl flex flex-col gap-2">
              <div className="flex items-center gap-2 px-2 pb-2 border-b border-border/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Layers className="w-4 h-4" /> Layers
              </div>
              {(['SST', 'Currents', 'PFZ', 'Cyclone', 'Wave Height'] as MapLayer[]).map(layer => (
                <button
                  key={layer}
                  onClick={() => toggleLayer(layer)}
                  className={`text-left px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    activeLayers.includes(layer) 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'hover:bg-bg-primary text-muted-foreground border border-transparent'
                  }`}
                >
                  {layer}
                </button>
              ))}
            </div>
          </div>

          <MapCanvas activeLayers={activeLayers} />
          
          <ReasoningPanel isOpen={showReasoning} onClose={() => setShowReasoning(false)} trace={trace} />
        </div>
      </div>

      {/* Right: Agents */}
      <AgentStatusRail agents={agents} />

    </div>
  );
}
