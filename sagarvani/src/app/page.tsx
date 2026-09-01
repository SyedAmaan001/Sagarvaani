import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { WhatSetsApart } from "@/components/home/WhatSetsApart";
import { CTABanner } from "@/components/home/CTABanner";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TheAgents } from "@/components/home/TheAgents";
import { ThreeSteps } from "@/components/home/ThreeSteps";
import { Reliability } from "@/components/home/Reliability";
import { Impact } from "@/components/home/Impact";
import { FAQ } from "@/components/home/FAQ";
import { AccessEverywhere } from "@/components/home/AccessEverywhere";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <Nav />
      <Hero />
      <WhatSetsApart />
      <CTABanner />
      <HowItWorks />
      <TheAgents />
      <ThreeSteps />
      <Reliability />
      <Impact />
      <FAQ />
      <AccessEverywhere />
      <FinalCTA />
      <Footer />
    </main>
  );
}
