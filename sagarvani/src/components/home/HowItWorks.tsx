"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Network, CheckCircle2 } from "lucide-react";

const tabs = [
  {
    id: "understand",
    label: "Understand",
    icon: <MessageSquare size={20} />,
    title: "Multilingual Intent Interpretation",
    description: "Sagarvani understands natural language queries in multiple languages, interpreting exactly what you need without complex forms.",
    tags: ["Intent parsing", "Entity extraction", "Multilingual"],
  },
  {
    id: "orchestrate",
    label: "Orchestrate",
    icon: <Network size={20} />,
    title: "Parallel Agent Execution",
    description: "The main orchestrator dispatches your query to specialized agents—Weather, Marine Data, Risk, GIS—running concurrently to fuse insights.",
    tags: ["Parallel execution", "Domain specialists", "Data fusion"],
  },
  {
    id: "validate",
    label: "Validate",
    icon: <CheckCircle2 size={20} />,
    title: "Evidence-Backed Cross-Checking",
    description: "Before rendering the final answer, the reasoning agent cross-checks results for conflicts, generating a confidence score and citations.",
    tags: ["Cross-checking", "Conflict resolution", "Confidence scoring"],
  },
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 lg:px-12 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">How it works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A pipeline designed for accuracy and explainability. From your question to the final recommendation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Tabs Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-background border border-border text-foreground hover:border-primary/50"
                }`}
              >
                <div className={activeTab === tab.id ? "text-primary-foreground" : "text-primary"}>
                  {tab.icon}
                </div>
                <span className="font-heading font-semibold text-lg">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 h-full min-h-[400px] bg-background border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3 }}
                 className="flex flex-col h-full justify-center"
               >
                 <h3 className="font-heading font-bold text-3xl text-foreground mb-6">{activeContent.title}</h3>
                 <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">
                   {activeContent.description}
                 </p>
                 <div className="flex flex-wrap gap-3 mb-12">
                   {activeContent.tags.map((tag) => (
                     <span key={tag} className="px-4 py-1.5 rounded-full bg-card border border-border text-sm font-medium text-foreground">
                       {tag}
                     </span>
                   ))}
                 </div>
                 
                 {/* Visual Representation Placeholder */}
                 <div className="w-full h-48 bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Decorative abstract diagram */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                    <div className="flex gap-4 items-center">
                       <div className={`w-16 h-16 rounded-full flex items-center justify-center ${activeTab === 'understand' ? 'bg-primary text-primary-foreground' : 'bg-background border border-border text-primary'}`}>
                          <MessageSquare size={24} />
                       </div>
                       <div className={`h-1 w-16 ${activeTab === 'orchestrate' ? 'bg-primary' : 'bg-border'}`}></div>
                       <div className={`w-16 h-16 rounded-full flex items-center justify-center ${activeTab === 'orchestrate' ? 'bg-primary text-primary-foreground' : 'bg-background border border-border text-primary'}`}>
                          <Network size={24} />
                       </div>
                       <div className={`h-1 w-16 ${activeTab === 'validate' ? 'bg-primary' : 'bg-border'}`}></div>
                       <div className={`w-16 h-16 rounded-full flex items-center justify-center ${activeTab === 'validate' ? 'bg-primary text-primary-foreground' : 'bg-background border border-border text-primary'}`}>
                          <CheckCircle2 size={24} />
                       </div>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
