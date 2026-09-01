"use client";

import { DepthCarousel } from "@/components/visual/DepthCarousel";
import { BorderGlow } from "@/components/visual/BorderGlow";
import { motion } from "framer-motion";
import { Waves, CloudRain, Map, LineChart, ShieldAlert, Compass } from "lucide-react";

function agentDataUri(icon: string, label: string, bg: string, fg: string) {
  const svg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="380" viewBox="0 0 300 380">
      <defs>
        <radialGradient id="g" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stop-color="${fg}" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="${bg}" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <rect width="300" height="380" fill="url(#g)"/>
      <rect x="0" y="0" width="300" height="380" fill="${bg}" fill-opacity="0.7"/>
      <text x="150" y="160" font-size="64" text-anchor="middle" dominant-baseline="middle" fill="${fg}" font-family="sans-serif">${icon}</text>
      <text x="150" y="240" font-size="18" text-anchor="middle" font-weight="bold" fill="${fg}" font-family="sans-serif" opacity="0.9">${label}</text>
    </svg>`
  );
  return `data:image/svg+xml,${svg}`;
}

const AGENT_ITEMS = [
  {
    image: agentDataUri("🌊", "Marine Data", "#02051C", "#00FFFF"),
    alt: "Marine Data Agent — ocean currents, waves, SST, salinity",
  },
  {
    image: agentDataUri("🌧️", "Weather", "#050A30", "#60A5FA"),
    alt: "Weather Agent — forecasts, wind, rain, pressure",
  },
  {
    image: agentDataUri("🗺️", "GIS", "#02051C", "#34D399"),
    alt: "GIS Agent — maps, layers, coastal features, boundaries",
  },
  {
    image: agentDataUri("📈", "Ocean Analytics", "#050A30", "#F472B6"),
    alt: "Ocean Analytics Agent — trend analysis, anomaly detection",
  },
  {
    image: agentDataUri("🚨", "Risk", "#02051C", "#FB923C"),
    alt: "Risk Agent — cyclone tracking, pollution, navigation hazards",
  },
  {
    image: agentDataUri("🧭", "Spatial", "#050A30", "#A78BFA"),
    alt: "Spatial Reasoning Agent — spatial relations, proximity analysis",
  },
];

const agentsGrid = [
  { name: "Marine Data Agent", icon: Waves, desc: "Currents, waves, SST, salinity, and core marine parameters." },
  { name: "Weather Agent", icon: CloudRain, desc: "Forecasts, wind, rain, pressure, and weather alerts." },
  { name: "GIS Agent", icon: Map, desc: "Maps, layers, coastal features, boundaries, and points of interest." },
  { name: "Ocean Analytics Agent", icon: LineChart, desc: "Trend analysis, anomaly detection, and pattern discovery." },
  { name: "Risk Agent", icon: ShieldAlert, desc: "Risk assessment, cyclone tracking, pollution, and navigation hazards." },
  { name: "Spatial Reasoning Agent", icon: Compass, desc: "Spatial relations, constraints, and proximity analysis." },
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
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            The Agents
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Six specialists. One decision.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            ORCA orchestrates six domain agents simultaneously — each one a deep expert, 
            all working together to validate and synthesize a single trusted recommendation.
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
          className="rounded-3xl border border-border p-4 mb-20"
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

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsGrid.map((agent, i) => (
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
