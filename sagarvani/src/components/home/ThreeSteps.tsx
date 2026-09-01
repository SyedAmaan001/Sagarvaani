"use client";

import { motion } from "framer-motion";

export function ThreeSteps() {
  const steps = [
    {
      num: "01",
      title: "Ask via Web, App, or Helpline",
      description: "Submit your query in natural language or voice. \"Is it safe for me to take my boat out near Mangalore tomorrow?\"",
      align: "left"
    },
    {
      num: "02",
      title: "ORCA Orchestrates Agents",
      description: "The system automatically dispatches specialized agents to fetch weather, analyze risk, and gather marine data simultaneously.",
      align: "right"
    },
    {
      num: "03",
      title: "Get a Validated Answer",
      description: "Receive a clear recommendation backed by evidence. If sources conflict, the system re-checks before answering.",
      align: "left"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">3 steps to get started</h2>
        </div>

        <div className="flex flex-col gap-24">
          {steps.map((step, idx) => (
            <div key={step.num} className={`flex flex-col ${step.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: step.align === 'left' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <div className="text-primary font-heading font-bold text-6xl mb-6 opacity-50">{step.num}</div>
                <h3 className="font-heading font-bold text-3xl text-foreground mb-4">{step.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>

              {/* Image/Visual Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl bg-card border border-border flex items-center justify-center p-8 shadow-[0_0_40px_rgba(0,255,255,0.02)]">
                  {/* Placeholder for actual illustration */}
                  <div className="w-full h-full rounded-xl border border-dashed border-border bg-background flex items-center justify-center text-muted-foreground text-sm font-medium uppercase tracking-wider">
                    {step.title} Visual
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
