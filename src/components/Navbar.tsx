"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MotionButton, MotionNavLink } from "@/components/Motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.div
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "px-4 pt-2" : "px-6 pt-3"}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <nav className="max-w-[1120px] mx-auto flex items-center justify-between h-12 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.07] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_4px_24px_rgba(0,0,0,0.4)] rounded-full pl-5 pr-1.5">
          <a href="#" className="flex items-center gap-2.5">
            <Image src="/logo-gold.png" alt="STS" width={28} height={28} className="rounded-md" />
            <span className="font-display font-bold text-[0.8125rem] tracking-[0.15em] text-foreground hidden sm:block">
              SIERRA TECH
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <MotionNavLink key={l.href} href={l.href}>
                {l.label}
              </MotionNavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <MotionButton>
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="nav" size="sm" className="gap-1.5">
                  Get Started
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </a>
            </MotionButton>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1 p-2.5"
              aria-label="Menu"
            >
              <span className={`w-[18px] h-[1.5px] bg-foreground rounded transition-all ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`w-[18px] h-[1.5px] bg-foreground rounded transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`w-[18px] h-[1.5px] bg-foreground rounded transition-all ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                <Button size="lg">Get Started</Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
