"use client";

import { useRef } from "react";
import { ScrollSplitCard } from "@/components/visual/ScrollSplitCard";
import { motion } from "framer-motion";

export function SplitCardSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="border-b border-border bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Who Is It For
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Built for every ocean stakeholder.
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
          {/* Left: context copy */}
          <div className="max-w-sm space-y-6">
            {[
              {
                title: "Fishermen",
                desc: "Voice-based alerts about safe fishing zones, cyclone warnings, and optimal windows — in local languages.",
              },
              {
                title: "Marine Operators",
                desc: "Full dashboard with real-time GIS overlay, weather routing, and agent-validated risk assessments.",
              },
              {
                title: "Researchers",
                desc: "Deep data exploration with anomaly detection, trend analysis, and exportable validated insights.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-l-2 border-primary pl-4"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: ScrollSplitCard */}
          <div
            ref={containerRef}
            data-lenis-prevent
            className="relative h-[100dvh] w-full max-w-md overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <ScrollSplitCard
              containerRef={containerRef}
              cards={[
                {
                  title: "Going to Sea Safely",
                  description:
                    "Before heading out, get a consolidated go/no-go advisory validated across weather, current, and risk agents.",
                  bgColor: "#0B1550",
                  textColor: "#F4F7FF",
                },
                {
                  title: "Navigating the EEZ",
                  description:
                    "Real-time spatial overlays with PFZ boundaries, cyclone tracks, and SST anomalies plotted on a live chart.",
                  bgColor: "#050A30",
                  textColor: "#00FFFF",
                },
                {
                  title: "Returning Home",
                  description:
                    "Updated return-route analysis factoring in changing sea state, fuel, and port advisories.",
                  bgColor: "#02051C",
                  textColor: "#93A2E0",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
