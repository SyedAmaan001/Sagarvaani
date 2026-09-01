"use client";

import { motion } from "framer-motion";
import { WaveHero } from "./WaveHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const logos = ["INCOIS", "IMD", "ISRO Bhuvan", "Bhoonidhi", "MOSDAC", "BHASHINI + Sarvam AI"];

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden flex flex-col justify-center border-b border-border">
      <WaveHero />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center text-center mt-12 mb-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary bg-bg-elevated/50 backdrop-blur-sm"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            Prototype · Smart India Hackathon 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-6 max-w-4xl"
        >
          Ocean intelligence, explained.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
        >
          A conversational marine decision-intelligence platform that fuses ocean, weather, GIS, and risk data into validated, explainable recommendations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold hover:scale-[1.03] transition-transform duration-150">
            <Link href="/dashboard">Launch Console</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-bg-elevated hover:text-primary transition-colors">
            <Link href="#how-it-works">See how it works</Link>
          </Button>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden py-8 bg-bg-elevated/30 backdrop-blur-sm border-y border-border">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {logos.map((logo, i) => (
              <span key={`logo-1-${i}`} className="font-heading font-bold text-xl px-8 whitespace-nowrap text-foreground">{logo}</span>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {logos.map((logo, i) => (
              <span key={`logo-2-${i}`} className="font-heading font-bold text-xl px-8 whitespace-nowrap text-foreground">{logo}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting video/loop (placeholder) */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 mt-16">
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.7 }}
           className="w-full aspect-video rounded-xl border border-border bg-bg-elevated shadow-[0_0_40px_rgba(0,255,255,0.05)] overflow-hidden flex items-center justify-center p-8"
        >
           <div className="w-full max-w-md space-y-4">
              {['Marine Data', 'Weather', 'GIS', 'Ocean Analytics', 'Risk', 'Spatial Reasoning'].map((agent, i) => (
                <div key={agent} className="flex justify-between items-center bg-bg-primary p-4 rounded-lg border border-border">
                  <span className="font-medium text-foreground">{agent} Agent</span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-xs text-primary font-bold uppercase tracking-wider">Running</span>
                  </div>
                </div>
              ))}
           </div>
        </motion.div>
      </div>

    </section>
  );
}
