"use client";
import { motion } from "framer-motion";
import { CheckCircle2, RefreshCw, ShieldCheck } from "lucide-react";

const pillars = [
  {
    label: "Data Validation",
    icon: CheckCircle2,
    desc: "Every source is checked for quality, completeness, and consistency before it feeds a recommendation.",
  },
  {
    label: "Fallback Sources",
    icon: RefreshCw,
    desc: "If a primary API is unavailable, Sagarvani switches to alternate sources automatically — no silent gaps.",
  },
  {
    label: "Validation + Re-checking",
    icon: ShieldCheck,
    desc: "Conflicting or uncertain results trigger re-analysis before anything reaches the user.",
  },
];

export function Reliability() {
  return (
    <section className="py-24 md:py-32 border-b border-border bg-bg-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">Reliability & Validation</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mt-3">
            Answers you can trust, by design.
          </h2>
        </motion.div>

        {/* fanned cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: i === 1 ? -12 : 0,
                rotate: i === 0 ? -3 : i === 2 ? 3 : 0,
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex-1 p-8 rounded-xl border border-border bg-bg-elevated shadow-[0_0_24px_rgba(0,255,255,0.04)]"
            >
              <p.icon className="text-success mb-4" size={30} strokeWidth={1.75} />
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{p.label}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
