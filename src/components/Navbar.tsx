"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUpRight } from "lucide-react";

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
      <div className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "px-4 pt-2" : "px-6 pt-3"}`}>
        <nav className="max-w-[1120px] mx-auto flex items-center justify-between h-12 bg-warm-900/70 backdrop-blur-xl border border-white/[0.08] rounded-full pl-5 pr-1.5">
          <a href="#" className="flex items-center gap-2.5">
            <Image src="/logo.jpeg" alt="STS" width={28} height={28} className="rounded-md" />
            <span className="font-display font-bold text-[0.8125rem] tracking-[0.06em] text-foreground hidden sm:block">
              SIERRA TECH
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.8125rem] font-medium text-muted-foreground px-3 py-1.5 rounded-md hover:text-foreground hover:bg-white/[0.06] transition-all duration-150"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
              <Button variant="nav" size="sm" className="gap-1.5">
                Get Started
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </a>

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
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-7 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          <Button size="lg" className="mt-2">
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </Button>
        </a>
      </div>
    </>
  );
}
