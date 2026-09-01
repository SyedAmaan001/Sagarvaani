"use client";

import { motion } from "framer-motion";
import { BrainCircuit, RotateCcw, ShieldCheck } from "lucide-react";

export function WhatSetsApart() {
  const features = [
    {
      title: "Multi-Agent Intelligence",
      description: "Fuses ocean, weather, GIS, and risk data through specialized agents working in concert.",
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    },
    {
      title: "Re-planning on Contradictions",
      description: "Validates outputs and triggers re-analysis instantly when data sources disagree.",
      icon: <RotateCcw className="w-8 h-8 text-primary" />,
    },
    {
      title: "Explainable Recommendations",
      description: "Every answer ships with its evidence. You never have to trust a black box.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="product" className="py-24 md:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">Why Sagarvani</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-8">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
