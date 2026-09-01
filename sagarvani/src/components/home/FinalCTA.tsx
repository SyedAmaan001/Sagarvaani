"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-32 px-6 lg:px-12 bg-bg-sunken border-t border-border overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative background line/glow (curved line) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
        <svg viewBox="0 0 1000 400" className="w-full h-full max-w-5xl" preserveAspectRatio="none">
          <path 
            d="M 0 400 C 300 100, 700 100, 1000 400" 
            fill="none" 
            stroke="url(#cta-glow)" 
            strokeWidth="4" 
          />
          <defs>
            <linearGradient id="cta-glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#050A30" stopOpacity="0" />
              <stop offset="50%" stopColor="#00FFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#050A30" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h2 className="font-heading font-bold text-5xl md:text-7xl text-foreground mb-10 tracking-tight">Step into Sagarvani</h2>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold hover:scale-[1.03] transition-transform duration-150 px-12 py-8 text-lg rounded-xl shadow-[0_0_40px_rgba(0,255,255,0.2)]">
          <Link href="/dashboard">Launch Console</Link>
        </Button>
      </motion.div>
    </section>
  );
}
