"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "What is Sagarvani?",
      a: "Sagarvani is a conversational marine decision-intelligence platform. It uses a multi-agent system (ORCA) to fuse ocean, weather, GIS, and risk data, providing explainable recommendations for marine operators and fishermen."
    },
    {
      q: "How does ORCA validate its answers?",
      a: "ORCA runs a Reasoning/Validation agent that cross-checks the outputs of specialized agents. If there's a conflict between sources (e.g., weather data vs. marine sensors), it triggers a visible re-checking phase and always cites its evidence."
    },
    {
      q: "What data sources power it?",
      a: "The system integrates live and historical data from authoritative sources including INCOIS, IMD, ISRO Bhuvan, Bhoonidhi, and MOSDAC."
    },
    {
      q: "How do I access it without a smartphone?",
      a: "Sagarvani is designed with multiple access paths. While the primary interface is a web dashboard, it supports Helpline/IVR interactions and low-bandwidth portals (in future phases) for users with limited connectivity."
    },
    {
      q: "Is this available now or a prototype?",
      a: "This is currently a prototype developed for the Smart India Hackathon 2026 by Team Helios Luna (DSU)."
    },
    {
      q: "How is this different from checking weather apps separately?",
      a: "Instead of you manually looking at wind, waves, and cyclone warnings across different apps, Sagarvani understands your natural language intent, fetches all relevant data simultaneously, resolves any conflicts, and gives you a single, evidence-backed decision."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-card border-y border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">Frequently asked questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-background border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-lg font-heading font-semibold hover:no-underline hover:text-primary py-6 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
