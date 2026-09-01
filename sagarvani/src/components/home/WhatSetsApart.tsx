"use client";
import { motion } from "framer-motion";
import { Network, RefreshCw, FileCheck } from "lucide-react";

const features = [
  {
    title: "Multi-Agent Intelligence",
    icon: Network,
    desc: "Fuses ocean, weather, GIS, and risk data through specialized agents working in concert.",
  },
  {
    title: "Re-planning on Contradictions",
    icon: RefreshCw,
    desc: "Validates outputs and triggers re-analysis the moment sources disagree.",
  },
  {
    title: "Explainable Recommendations",
    icon: FileCheck,
    desc: "Every answer ships with the evidence behind it — never a black box.",
  },
];

export function WhatSetsApart() {
  return (
    <section className="py-24 md:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">Why Sagarvani</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mt-3">
            What sets Sagarvani apart.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <f.icon className="text-primary mb-4 mx-auto md:mx-0" size={30} strokeWidth={1.75} />
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
