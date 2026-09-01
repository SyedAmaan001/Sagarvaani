"use client";

import { WebGLLiquid } from "@/components/visual/WebGLLiquid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
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

      {/* Data source marquee below CTA */}
      <div className="mt-16 w-full max-w-2xl overflow-hidden">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
          Powered by
        </p>
        <div className="flex w-[200%] animate-marquee">
          {["INCOIS", "IMD", "ISRO Bhuvan", "Bhoonidhi", "MOSDAC"].map(
            (logo, i) => (
              <span
                key={`a-${i}`}
                className="mr-12 whitespace-nowrap font-heading text-base font-bold text-white/30"
              >
                {logo}
              </span>
            )
          )}
          {["INCOIS", "IMD", "ISRO Bhuvan", "Bhoonidhi", "MOSDAC"].map(
            (logo, i) => (
              <span
                key={`b-${i}`}
                className="mr-12 whitespace-nowrap font-heading text-base font-bold text-white/30"
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
