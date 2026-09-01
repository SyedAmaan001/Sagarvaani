"use client";

import { motion } from "framer-motion";

export function Reliability() {
  const cards = [
    {
      title: "Data Validation",
      subtitle: "Multi-source consensus",
      color: "bg-blue-900/40",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Fallback Sources",
      subtitle: "Always online",
      color: "bg-indigo-900/40",
      borderColor: "border-indigo-500/30",
    },
    {
      title: "Validation + Re-checking",
      subtitle: "Automated conflict resolution",
      color: "bg-cyan-900/40",
      borderColor: "border-primary/40",
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-bg-sunken border-y border-border overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">Built for reliability</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            When lives and livelihoods are at stake, you can't afford hallucinations. Sagarvani is designed from the ground up to be mitigation-ready.
          </p>
          <div className="flex flex-wrap gap-3">
            {cards.map(c => (
              <span key={c.title} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,255,0.8)]"></div>
                {c.title}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 relative h-[400px] flex items-center justify-center"
        >
          {/* Fanned Cards */}
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ rotate: 0, y: 0 }}
              whileInView={{ 
                rotate: (idx - 1) * 12, 
                x: (idx - 1) * 40,
                y: Math.abs(idx - 1) * 20
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1), type: "spring" }}
              className={`absolute w-72 h-96 rounded-2xl ${card.color} ${card.borderColor} border backdrop-blur-md p-8 flex flex-col justify-end shadow-2xl origin-bottom`}
              style={{ zIndex: idx }}
            >
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-4">
                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(0,255,255,0.8)]"></div>
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
