import { ConversationTurn } from "@/lib/types";
import { Send, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ConversationRail({ 
  turns, 
  onAsk, 
  isTyping 
}: { 
  turns: ConversationTurn[], 
  onAsk: (q: string) => void,
  isTyping: boolean
}) {
  return (
    <div className="w-[360px] h-full bg-bg-primary border-r border-border flex flex-col shadow-xl z-20 relative">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 scroll-smooth">
        <AnimatePresence initial={false}>
          {turns.map((turn) => (
            <motion.div
              key={turn.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col max-w-[90%] ${turn.role === 'user' ? 'self-end' : 'self-start'}`}
            >
              <div className={`p-3 rounded-2xl ${
                turn.role === 'user' 
                  ? 'bg-accent-blue/20 border border-accent-blue/30 text-text-primary rounded-br-sm' 
                  : 'bg-bg-elevated border border-border text-text-primary rounded-bl-sm'
              }`}>
                <p className="text-sm leading-relaxed">{turn.text}</p>
              </div>

              {turn.evidence && (
                <div className="mt-2 flex flex-col gap-1.5 pl-1">
                  {turn.evidence.map((ev, i) => (
                    <div key={i} className="flex items-start gap-1.5 bg-bg-sunken border border-border/50 rounded p-1.5 cursor-help" title={ev.summary}>
                      <FileText className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="text-[10px] text-muted-foreground leading-tight">{ev.source}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="self-start bg-bg-elevated border border-border rounded-2xl rounded-bl-sm p-4 flex gap-1.5 items-center"
            >
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-border bg-bg-primary">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask Sagarvani..."
            className="w-full bg-bg-elevated border border-border rounded-full pl-4 pr-12 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                onAsk(e.currentTarget.value.trim());
                e.currentTarget.value = '';
              }
            }}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
