"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { MotionButton } from "@/components/Motion";
import { MessageCircle } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from("[data-hero-logo]", {
        opacity: 0, scale: 0.9, duration: 0.8, ease: "power3.out",
      })
        .from("[data-hero-title]", {
          opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        }, "-=0.4")
        .from("[data-hero-sub]", {
          opacity: 0, y: 25, duration: 0.7, ease: "power3.out",
        }, "-=0.3")
        .from("[data-hero-cta] > *", {
          opacity: 0, y: 20, scale: 0.95, duration: 0.6, stagger: 0.12, ease: "power3.out",
        }, "-=0.3")
        .from("[data-hero-trust]", {
          opacity: 0, duration: 0.6, ease: "power2.out",
        }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh overflow-hidden"
    >
      {/* Three.js LOD scene — full screen, no filters */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* All content centered in the middle of the screen */}
      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <div data-hero-logo className="mb-8">
          <div className="relative rounded-2xl p-2"
            style={{
              border: "1.5px solid rgba(212, 160, 6, 0.6)",
              boxShadow: "0 0 15px rgba(212, 160, 6, 0.25), 0 0 40px rgba(212, 160, 6, 0.1), 0 0 2px rgba(250, 204, 21, 0.4), inset 0 0 15px rgba(212, 160, 6, 0.06)",
            }}
          >
            <Image
              src="/logo-gold.png"
              alt="Sierra Tech Spaces"
              width={110}
              height={84}
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1
          data-hero-title
          className="font-display font-bold text-[clamp(3rem,7vw,5rem)] leading-[0.95] tracking-[-0.04em] text-foreground text-center mb-5"
        >
          We automate what
          <br />
          <span className="gradient-text">slows you down.</span>
        </h1>

        {/* Subtitle */}
        <p
          data-hero-sub
          className="text-[clamp(0.875rem,1.3vw,1rem)] leading-[1.8] font-light text-warm-300 max-w-[460px] text-center mb-6 tracking-[0.01em]"
        >
          AI-powered automations for Egyptian businesses — built in days, not months.
        </p>

        {/* CTAs */}
        <div data-hero-cta className="flex items-center gap-3 mb-4">
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

        {/* Trust */}
        <p data-hero-trust className="text-[0.75rem] text-warm-500">
          Prototypes in 7–14 days &middot; Arabic-first &middot; Demo before payment
        </p>
      </div>
    </section>
  );
}
