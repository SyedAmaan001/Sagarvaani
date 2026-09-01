"use client";

import { motion } from "framer-motion";
import { Laptop, Phone, WifiLow } from "lucide-react";

export function AccessEverywhere() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">Access Everywhere</h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          One intelligence engine, three access paths. Built to reach users no matter their connectivity.
        </p>

        <div className="flex justify-center items-center gap-12 md:gap-24 mb-20 flex-wrap">
          <div className="flex flex-col items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center">
              <Laptop size={32} />
            </div>
            <span className="font-heading font-semibold">Web/App</span>
          </div>
          
          <div className="flex flex-col items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center">
              <Phone size={32} />
            </div>
            <span className="font-heading font-semibold">Helpline</span>
          </div>

          <div className="flex flex-col items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center">
              <WifiLow size={32} />
            </div>
            <span className="font-heading font-semibold">Low-Bandwidth Portal</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[21/9] bg-card border border-border rounded-2xl shadow-2xl relative overflow-hidden flex items-center justify-center"
        >
          {/* Big supporting visual placeholder */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-bg-sunken to-bg-sunken"></div>
          
          {/* Simulated dashboard lines */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10 p-8 rounded-xl bg-background/80 backdrop-blur-md border border-border">
            <span className="font-heading font-bold text-2xl text-primary uppercase tracking-widest">ORCA Engine</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
