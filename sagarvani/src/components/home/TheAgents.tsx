"use client";
import { motion } from "framer-motion";
import { Waves, CloudRain, Map, LineChart, ShieldAlert, Compass } from "lucide-react";

const agents = [
  { name: "Marine Data Agent", icon: Waves, desc: "Currents, waves, SST, salinity, and core marine parameters." },
  { name: "Weather Agent", icon: CloudRain, desc: "Forecasts, wind, rain, pressure, and weather alerts." },
  { name: "GIS Agent", icon: Map, desc: "Maps, layers, coastal features, boundaries, and points of interest." },
  { name: "Ocean Analytics Agent", icon: LineChart, desc: "Trend analysis, anomaly detection, and pattern discovery." },
  { name: "Risk Agent", icon: ShieldAlert, desc: "Risk assessment, cyclone tracking, pollution, and navigation hazards." },
  { name: "Spatial Reasoning Agent", icon: Compass, desc: "Spatial relations, constraints, and proximity analysis." },
];

export function TheAgents() {
  return (
    <section className="py-24 md:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">The Agents</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mt-3">
            Six specialists. One decision.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-border bg-bg-elevated hover:-translate-y-1 transition-transform duration-200"
            >
              <agent.icon className="text-primary mb-4" size={28} strokeWidth={1.75} />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{agent.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{agent.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
