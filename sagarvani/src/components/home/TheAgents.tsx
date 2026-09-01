"use client";

import { motion } from "framer-motion";
import { Droplets, CloudLightning, Map, Activity, AlertTriangle, Compass } from "lucide-react";

export function TheAgents() {
  const agents = [
    {
      name: "Marine Data Agent",
      description: "Fetches SST, chlorophyll, currents, and wave heights from INCOIS.",
      icon: <Droplets className="w-6 h-6 text-primary" />,
    },
    {
      name: "Weather Agent",
      description: "Aggregates wind, rainfall, and cyclone data from IMD & MOSDAC.",
      icon: <CloudLightning className="w-6 h-6 text-primary" />,
    },
    {
      name: "GIS Agent",
      description: "Handles spatial queries and renders GeoPandas layers to Leaflet.",
      icon: <Map className="w-6 h-6 text-primary" />,
    },
    {
      name: "Ocean Analytics Agent",
      description: "Calculates trends and extracts insights from historical datasets.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      name: "Risk Agent",
      description: "Evaluates vessel safety against sea state and active warnings.",
      icon: <AlertTriangle className="w-6 h-6 text-primary" />,
    },
    {
      name: "Spatial Reasoning Agent",
      description: "Validates bounding boxes and cross-checks geospatial constraints.",
      icon: <Compass className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="agents" className="py-24 md:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">The Agents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ORCA orchestrates specialized AI agents, each responsible for a distinct domain of ocean intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-card border border-border hover:border-primary/50 rounded-xl p-8 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,255,255,0.04)] cursor-default flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                {agent.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">{agent.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
