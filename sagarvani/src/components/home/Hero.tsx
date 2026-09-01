"use client";

import { WebGLLiquid } from "@/components/visual/WebGLLiquid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Waves, CloudRain, Map, LineChart, ShieldAlert, Compass } from "lucide-react";

export function Hero() {
  const agents = [
    { name: "Marine Data Agent", icon: Waves, status: "Active", latency: "12ms" },
    { name: "Weather Agent", icon: CloudRain, status: "Active", latency: "18ms" },
    { name: "GIS Agent", icon: Map, status: "Active", latency: "14ms" },
    { name: "Ocean Analytics Agent", icon: LineChart, status: "Active", latency: "22ms" },
    { name: "Risk Agent", icon: ShieldAlert, status: "Active", latency: "16ms" },
    { name: "Spatial Reasoning Agent", icon: Compass, status: "Active", latency: "19ms" },
  ];

  return (
    <WebGLLiquid
      colorDeep="#02051C"
      colorMid="#050A30"
      colorHighlight="#00FFFF"
      speed={0.8}
      flowStrength={1.2}
      grain={0.04}
      contrast={1.15}
      opacity={0.97}
      reveal={true}
      revealDuration={1.4}
      subtitle="Prototype · Smart India Hackathon 2026"
      title="Ocean intelligence, explained."
      description="A conversational marine decision-intelligence platform that fuses ocean, weather, GIS, and risk data into validated, explainable recommendations."
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="bg-[#00FFFF] text-[#02051C] font-bold hover:bg-[#00FFFF]/90 hover:scale-[1.03] transition-transform duration-150"
        >
          <Link href="/dashboard">Launch Console</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-white/30 text-white hover:bg-white/10 hover:text-[#00FFFF] transition-colors"
        >
          <Link href="#how-it-works">See how it works</Link>
        </Button>
      </div>

      {/* Live Agent Status Widget */}
      <div className="mt-12 w-full max-w-xl rounded-xl border border-white/15 bg-black/40 p-5 backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFFF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FFFF]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              ORCA Engine Multi-Agent Matrix
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#00FFFF] font-bold">
            6/6 ONLINE
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {agents.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs"
            >
              <div className="flex items-center gap-2 text-white/90">
                <a.icon className="h-3.5 w-3.5 text-[#00FFFF]" />
                <span className="font-medium text-[11px]">{a.name}</span>
              </div>
              <span className="font-mono text-[10px] text-white/50">{a.latency}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Data source marquee below CTA */}
      <div className="mt-12 w-full max-w-2xl overflow-hidden">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
          Powered by live feeds from
        </p>
        <div className="flex w-[200%] animate-marquee">
          {["INCOIS", "IMD", "ISRO Bhuvan", "Bhoonidhi", "MOSDAC", "BHASHINI + Sarvam AI"].map(
            (logo, i) => (
              <span
                key={`a-${i}`}
                className="mr-12 whitespace-nowrap font-heading text-base font-bold text-white/40"
              >
                {logo}
              </span>
            )
          )}
          {["INCOIS", "IMD", "ISRO Bhuvan", "Bhoonidhi", "MOSDAC", "BHASHINI + Sarvam AI"].map(
            (logo, i) => (
              <span
                key={`b-${i}`}
                className="mr-12 whitespace-nowrap font-heading text-base font-bold text-white/40"
              >
                {logo}
              </span>
            )
          )}
        </div>
      </div>
    </WebGLLiquid>
  );
}
