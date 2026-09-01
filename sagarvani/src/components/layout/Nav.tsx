"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionTemplate, useTransform } from "framer-motion";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transition background opacity based on scroll
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const backgroundColor = useMotionTemplate`rgba(11, 21, 80, ${bgOpacity})`;
  const borderBottom = useMotionTemplate`1px solid rgba(27, 42, 107, ${bgOpacity})`;

  const links = [
    { label: "Product", href: "#product" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "The Agents", href: "#agents" },
    { label: "Impact", href: "#impact" },
    { label: "About", href: "#about" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center h-20 px-6 lg:px-12"
      style={{
        backgroundColor,
        borderBottom,
      }}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo placeholder */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div className="w-4 h-4 bg-background rounded-full"></div>
          </div>
          <div className="flex flex-col">
             <span className="font-heading font-bold text-xl tracking-wide uppercase leading-none">
               Sagarvani
             </span>
             <span className="text-[10px] text-muted-foreground tracking-wider uppercase font-medium mt-1">Multi-Agent Ocean Intelligence</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold hover:scale-[1.03] transition-transform duration-150">
            <Link href="/dashboard">Launch Console</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-card border-b border-border p-6 flex flex-col gap-6 md:hidden shadow-xl">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-primary text-primary-foreground w-full mt-4">
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>Launch Console</Link>
          </Button>
        </div>
      )}
    </motion.header>
  );
}
