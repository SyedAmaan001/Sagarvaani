import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { WhatSetsApart } from "@/components/home/WhatSetsApart";
import { CTABanner } from "@/components/home/CTABanner";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TheAgents } from "@/components/home/TheAgents";
import { WavesSection } from "@/components/home/WavesSection";
import { ThreeSteps } from "@/components/home/ThreeSteps";
import { Reliability } from "@/components/home/Reliability";
import { SplitCardSection } from "@/components/home/SplitCardSection";
import { Impact } from "@/components/home/Impact";
import { FAQ } from "@/components/home/FAQ";
import { AccessEverywhere } from "@/components/home/AccessEverywhere";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <Nav />

      {/* HERO — WebGL liquid shader background */}
      <Hero />

      {/* WHY SAGARVANI — 3-column differentiators */}
      <WhatSetsApart />

      {/* CTA BANNER */}
      <CTABanner />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* AGENTS — 3D DepthCarousel + BorderGlow */}
      <TheAgents />

      {/* WAVES — GradientWaves WebGL shader section */}
      <WavesSection />

      {/* THREE STEPS */}
      <ThreeSteps />

      {/* RELIABILITY — fanned validation cards */}
      <Reliability />

      {/* SCROLL SPLIT CARD — stakeholder use-cases */}
      <SplitCardSection />

      {/* IMPACT — auto-carousel */}
      <Impact />

      {/* FAQ */}
      <FAQ />

      {/* ACCESS EVERYWHERE */}
      <AccessEverywhere />

      {/* FINAL CTA */}
      <FinalCTA />

      <Footer />
    </main>
  );
}
