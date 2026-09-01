"use client";

import { DepthCarousel } from "@/components/visual/DepthCarousel";
import { BorderGlow } from "@/components/visual/BorderGlow";
import { motion } from "framer-motion";
import { Waves, CloudRain, Map, LineChart, ShieldAlert, Compass } from "lucide-react";

const AGENT_ITEMS = [
  {
    image: "/images/agent_marine_data.jpg",
    alt: "Marine Data Agent — currents, waves, SST, salinity, and core marine parameters",
  },
  {
    image: "/images/agent_weather.jpg",
    alt: "Weather Agent — forecasts, wind, rain, pressure, and weather alerts",
  },
  {
    image: "/images/agent_gis.jpg",
    alt: "GIS Agent — maps, layers, coastal features, boundaries, and points of interest",
  },
  {
    image: "/images/agent_analytics.jpg",
    alt: "Ocean Analytics Agent — trend analysis, anomaly detection, and pattern discovery",
  },
  {
    image: "/images/agent_risk.jpg",
    alt: "Risk Agent — risk assessment, cyclone tracking, pollution, and navigation hazards",
  },
  {
    image: "/images/agent_spatial.jpg",
    alt: "Spatial Reasoning Agent — spatial relations, constraints, and proximity analysis",
  },
];

const agentsGrid = [
  {
    name: "Marine Data Agent",
    icon: Waves,
    desc: "Currents, waves, SST, salinity, and core marine parameters from live oceanographic sensors.",
    accent: "#00FFFF",
    image: "/images/agent_marine_data.jpg",
  },
  {
    name: "Weather Agent",
    icon: CloudRain,
    desc: "Forecasts, wind vectors, barometric pressure, rainfall radar, and severe weather alerts.",
    accent: "#60A5FA",
    image: "/images/agent_weather.jpg",
  },
  {
    name: "GIS Agent",
    icon: Map,
    desc: "Shorelines, bathymetry, EEZ boundaries, transit routes, and coastal points of interest.",
    accent: "#34D399",
    image: "/images/agent_gis.jpg",
  },
  {
    name: "Ocean Analytics Agent",
    icon: LineChart,
    desc: "Multi-sensor time-series patterns, anomaly clustering, and historical marine trend discovery.",
    accent: "#F472B6",
    image: "/images/agent_analytics.jpg",
  },
  {
    name: "Risk Agent",
    icon: ShieldAlert,
    desc: "Cyclone tracks, dynamic surge buffers, pollution zones, and vessel navigation hazards.",
    accent: "#FB923C",
    image: "/images/agent_risk.jpg",
  },
  {
    name: "Spatial Reasoning Agent",
    icon: Compass,
    desc: "Topological relations, proximity buffers, safety corridors, and geographic constraint checking.",
    accent: "#A78BFA",
    image: "/images/agent_spatial.jpg",
  },
];

export function TheAgents() {
  return (
    <section
      id="agents"
      className="relative overflow-hidden border-b border-border bg-bg-sunken py-24 md:py-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(0,255,255,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            THE AGENTS
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Six specialists. One decision.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            ORCA orchestrates six domain specialists simultaneously — each one a deep expert, 
            working in concert to validate and synthesize a single trusted recommendation.
          </p>
        </motion.div>

        {/* 3D Depth Carousel Container wrapped in BorderGlow */}
        <BorderGlow
          colors={["#00FFFF", "#0000FF", "#60A5FA"]}
          glowColor="190 100 60"
          backgroundColor="#02051C"
          borderRadius={24}
          glowRadius={60}
          glowIntensity={0.8}
          className="rounded-3xl border border-border p-4 mb-20 shadow-2xl"
        >
          <div className="py-6">
            <DepthCarousel
              items={AGENT_ITEMS}
              cardWidth={300}
              cardHeight={380}
              depth={220}
              spread={90}
              tilt={22}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.2}
              blur={6}
              duration={700}
              ease="power3.out"
              autoplay={true}
              autoplayDelay={3200}
              loop={true}
              showControls={true}
              showIndicators={true}
            />
          </div>
        </BorderGlow>

        {/* 6 Specialist Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsGrid.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-xl border border-border bg-bg-elevated hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 shadow-[0_0_24px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center justify-between mb-4">
                <agent.icon className="text-primary" size={28} strokeWidth={1.75} />
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: agent.accent, boxShadow: `0 0 8px ${agent.accent}` }}
                />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{agent.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{agent.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
