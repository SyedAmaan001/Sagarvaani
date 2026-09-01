"use client";

import { DepthCarousel } from "@/components/visual/DepthCarousel";
import { BorderGlow } from "@/components/visual/BorderGlow";
import { motion } from "framer-motion";

// Agent data — using gradient placeholder images styled to match the Electric Tundra palette
// Each image encodes an SVG data URI so there are zero external picsum/unsplash calls
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

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
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

        <BorderGlow
          colors={["#00FFFF", "#0000FF", "#60A5FA"]}
          glowColor="190 100 60"
          backgroundColor="transparent"
          borderRadius={24}
          glowRadius={60}
          glowIntensity={0.8}
          className="rounded-3xl"
        >
          <div className="py-8">
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
      </div>
    </section>
  );
}
