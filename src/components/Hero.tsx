"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center scale-[1.02]"
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Overlay — just enough to keep text readable */}
      <div className="absolute inset-0 z-[1] bg-background/40" />
      <div className="absolute top-0 inset-x-0 h-40 z-[1] bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-48 z-[1] bg-gradient-to-t from-background to-transparent" />

      {/* Subtle gold glow */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,160,6,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center max-w-[720px] px-6 flex flex-col items-center gap-6">
        {/* Overline */}
        <div className="flex items-center gap-2.5 opacity-0 translate-y-4 animate-fade-up [animation-delay:0.1s]">
          <span className="w-6 h-px bg-gold/40" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            AI Consulting — Cairo, Egypt
          </span>
          <span className="w-6 h-px bg-gold/40" />
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-foreground [text-wrap:balance] opacity-0 translate-y-5 animate-fade-up [animation-delay:0.25s]">
          We automate what{" "}
          <span className="gradient-text">slows you down.</span>
        </h1>

        {/* Sub */}
        <p className="text-[clamp(0.9375rem,1.5vw,1.0625rem)] leading-relaxed text-warm-200 max-w-[520px] opacity-0 translate-y-5 animate-fade-up [animation-delay:0.4s]">
          AI-powered automations for Egyptian businesses — from WhatsApp bots
          to full operations dashboards. Built in days, not months.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 mt-1 opacity-0 translate-y-5 animate-fade-up [animation-delay:0.55s]">
          <a href="https://wa.me/201234567890?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              <MessageCircle className="w-[18px] h-[18px]" />
              Chat on WhatsApp
            </Button>
          </a>
          <a href="#services">
            <Button variant="secondary" size="lg">View Services</Button>
          </a>
        </div>

        {/* Trust */}
        <p className="text-[0.8125rem] text-warm-400 mt-3 opacity-0 animate-fade-in [animation-delay:0.8s]">
          Prototypes in 7–14 days &middot; Arabic-first &middot; Demo before payment
        </p>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-transparent via-gold/40 to-transparent animate-pulse-glow z-10" />
    </section>
  );
}
