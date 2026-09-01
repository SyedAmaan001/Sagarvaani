import { Alert } from "@/lib/types";
import { AlertTriangle, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AlertsPanel({ alerts }: { alerts: Alert[] }) {
  if (alerts.length === 0) return null;

  return (
    <div className="absolute top-[88px] left-1/2 -translate-x-1/2 z-30 w-full max-w-md flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {alerts.map((alert) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`pointer-events-auto flex items-start gap-3 p-3 rounded-lg border backdrop-blur-md shadow-2xl ${
              alert.type === 'danger' ? 'bg-danger/10 border-danger/30 text-danger' :
              alert.type === 'warning' ? 'bg-warning/10 border-warning/30 text-warning' :
              'bg-primary/10 border-primary/30 text-primary'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {alert.type === 'danger' && <AlertTriangle className="w-5 h-5" />}
              {alert.type === 'warning' && <AlertCircle className="w-5 h-5" />}
              {alert.type === 'info' && <Info className="w-5 h-5" />}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm leading-none mb-1">{alert.title}</span>
              <span className="text-xs opacity-90 leading-tight">{alert.message}</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
