"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { MotionButton } from "@/components/Motion";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from("[data-hero-overline]", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          "[data-hero-title]",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          "[data-hero-sub]",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          "[data-hero-cta] > *",
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          "[data-hero-trust]",
          {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Floating glow animation
      gsap.to("[data-glow-1]", {
        y: -20,
        x: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-glow-2]", {
        y: 15,
        x: -15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-glow-3]", {
        y: -10,
        x: 20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* Floating glow orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          data-glow-1
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(212,160,6,0.1)_0%,transparent_60%)]"
        />
        <div
          data-glow-2
          className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(194,112,62,0.07)_0%,transparent_60%)]"
        />
        <div
          data-glow-3
          className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(250,204,21,0.05)_0%,transparent_60%)]"
        />
        <div className="absolute bottom-[-15%] left-1/3 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(180,120,60,0.04)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 text-center max-w-[720px] px-6 flex flex-col items-center gap-6">
        <div
          data-hero-overline
          className="flex items-center gap-2.5"
        >
          <span className="w-6 h-px bg-gold/40" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            AI Consulting — Cairo, Egypt
          </span>
          <span className="w-6 h-px bg-gold/40" />
        </div>

        <h1
          data-hero-title
          className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-foreground [text-wrap:balance]"
        >
          We automate what{" "}
          <span className="gradient-text">slows you down.</span>
        </h1>

        <p
          data-hero-sub
          className="text-[clamp(0.9375rem,1.5vw,1.0625rem)] leading-relaxed text-warm-300 max-w-[520px]"
        >
          AI-powered automations for Egyptian businesses — from WhatsApp bots to
          full operations dashboards. Built in days, not months.
        </p>

        <div data-hero-cta className="flex items-center gap-3 mt-1">
          <MotionButton>
            <a
              href="https://wa.me/201234567890?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                <MessageCircle className="w-[18px] h-[18px]" />
                Chat on WhatsApp
              </Button>
            </a>
          </MotionButton>
          <MotionButton>
            <a href="#services">
              <Button variant="secondary" size="lg">
                View Services
              </Button>
            </a>
          </MotionButton>
        </div>

        <p
          data-hero-trust
          className="text-[0.8125rem] text-warm-400 mt-3"
        >
          Prototypes in 7–14 days &middot; Arabic-first &middot; Demo before
          payment
        </p>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-transparent via-gold/40 to-transparent animate-pulse-glow z-10" />
    </section>
  );
}
