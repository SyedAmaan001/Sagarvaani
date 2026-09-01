"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Impact() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const impacts = [
    {
      persona: "Fishermen",
      stat: "Trip-planning safety",
      description: "Simple, local-language insights delivered over low-bandwidth connections or IVR to ensure safe fishing trips."
    },
    {
      persona: "Researchers",
      stat: "Integrated datasets",
      description: "Deep drill-down capabilities into fused datasets from INCOIS, IMD, and ISRO for advanced scenario analysis."
    },
    {
      persona: "Maritime Operators",
      stat: "Operational intelligence",
      description: "Map-first route planning and real-time risk assessments combining weather, sea state, and vessel data."
    },
    {
      persona: "Social Impact",
      stat: "Life preservation",
      description: "Reduces loss of life at sea through early warning systems and accessible disaster intelligence."
    },
    {
      persona: "Economic Impact",
      stat: "Fuel & resource efficiency",
      description: "Optimizes maritime operations and fishing yields through accurate PFZ and current predictions."
    },
    {
      persona: "Environmental Impact",
      stat: "Ecosystem monitoring",
      description: "Aids in tracking marine health, anomalies, and potential ecological threats via satellite integration."
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impacts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, impacts.length]);

  const prev = () => setCurrentIndex((prev) => (prev - 1 + impacts.length) % impacts.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % impacts.length);

  return (
    <section id="impact" className="py-24 md:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">Impact</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">Who it helps</h2>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card hover:border-primary/50 transition-colors">
              <ChevronLeft className="text-foreground" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card hover:border-primary/50 transition-colors">
              <ChevronRight className="text-foreground" />
            </button>
          </div>
        </div>

        <div 
          className="relative w-full h-[320px] overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-card border border-border rounded-2xl p-10 md:p-16 flex flex-col justify-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-background border border-border text-primary font-semibold text-sm w-fit mb-6">
                {impacts[currentIndex].persona}
              </span>
              <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                {impacts[currentIndex].stat}
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {impacts[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
