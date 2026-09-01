import { motion, AnimatePresence } from "framer-motion";
import { GitCommit, GitMerge, FileCheck } from "lucide-react";

export function ReasoningPanel({ isOpen, onClose, trace }: { isOpen: boolean, onClose: () => void, trace: string[] }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="absolute bottom-6 right-[340px] w-80 bg-bg-elevated border border-border rounded-xl shadow-2xl overflow-hidden z-30"
        >
          <div className="bg-bg-primary border-b border-border p-3 flex justify-between items-center">
            <span className="text-xs font-heading font-semibold text-foreground uppercase tracking-wider">Reasoning Trace</span>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-xs">Close</button>
          </div>
          
          <div className="p-4 flex flex-col gap-4">
            {trace.map((step, idx) => (
              <div key={idx} className="flex gap-3 relative">
                {idx !== trace.length - 1 && (
                  <div className="absolute left-[9px] top-6 bottom-[-16px] w-0.5 bg-border" />
                )}
                <div className="relative z-10 w-5 h-5 rounded-full bg-bg-sunken border border-border flex items-center justify-center shrink-0 mt-0.5">
                  {idx === trace.length - 1 ? (
                    <FileCheck className="w-3 h-3 text-success" />
                  ) : (
                    <GitCommit className="w-3 h-3 text-primary" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
