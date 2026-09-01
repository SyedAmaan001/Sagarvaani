import { AgentStatus } from "@/lib/types";
import { CheckCircle2, CircleDashed, Loader2, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AgentStatusRail({ agents }: { agents: AgentStatus[] }) {
  return (
    <div className="w-80 h-full bg-bg-primary border-l border-border flex flex-col p-4 shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
        <h2 className="font-heading font-semibold text-lg text-foreground">Active Agents</h2>
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-bg-elevated px-2 py-1 rounded-full">ORCA</span>
      </div>

      <div className="flex flex-col gap-3">
        {agents.map((agent) => (
          <div key={agent.name} className="bg-bg-elevated border border-border rounded-lg p-3 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{agent.name}</span>
            <div className="flex items-center">
              <AnimatePresence mode="wait">
                {agent.state === 'idle' && (
                  <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <CircleDashed className="w-5 h-5 text-muted-foreground opacity-50" />
                  </motion.div>
                )}
                {agent.state === 'running' && (
                  <motion.div key="running" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Loader2 className="w-5 h-5 text-primary animate-spin" />
                  </motion.div>
                )}
                {agent.state === 'validated' && (
                  <motion.div key="validated" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </motion.div>
                )}
                {agent.state === 'conflict' && (
                  <motion.div key="conflict" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                    <AlertTriangle className="w-5 h-5 text-warning" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
