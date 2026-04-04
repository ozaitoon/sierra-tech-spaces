"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { MotionButton } from "@/components/Motion";
import { MessageCircle } from "lucide-react";

const SplineScene = dynamic(() => import("./SplineScene"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from("[data-hero-logo]", {
        opacity: 0, scale: 0.9, duration: 0.8, ease: "power3.out",
      })
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
      className="relative min-h-dvh overflow-hidden bg-background"
    >
      {/* Spline — full screen */}
      <div className="absolute inset-0 z-0">
        <SplineScene />
      </div>

      {/* Edge blending — all four sides fade to page bg color */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Bottom — heavy, kills Spline watermark and merges into page */}
        <div className="absolute bottom-0 inset-x-0 h-[60%]" style={{
          background: "linear-gradient(to top, #0a0908 0%, #0a0908 30%, rgba(10,9,8,0.95) 45%, rgba(10,9,8,0.6) 65%, transparent 100%)"
        }} />
        {/* Top — light fade for navbar */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-background/50 to-transparent" />
        {/* Left edge */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background/60 to-transparent" />
        {/* Right edge */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background/60 to-transparent" />
      </div>

      {/* Logo pinned to top center */}
      <div data-hero-logo className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
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

      {/* Subtitle + CTAs at bottom */}
      <div className="absolute bottom-8 inset-x-0 z-10 flex flex-col items-center pointer-events-none px-6">
        <p
          data-hero-sub
          className="text-[clamp(0.875rem,1.3vw,1rem)] leading-[1.8] font-light text-warm-300 max-w-[460px] text-center mb-4 tracking-[0.01em]"
        >
          AI-powered automations for Egyptian businesses — built in days, not months.
        </p>

        <div data-hero-cta className="flex items-center gap-3 pointer-events-auto mb-3">
          <MotionButton>
            <a
              href="https://wa.me/201234567890?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="backdrop-blur-xl bg-gold/90 shadow-[0_0_25px_rgba(212,160,6,0.3),0_0_60px_rgba(212,160,6,0.1)]">
                <MessageCircle className="w-[18px] h-[18px]" />
                Chat on WhatsApp
              </Button>
            </a>
          </MotionButton>
          <MotionButton>
            <a href="#services">
              <Button variant="secondary" size="lg" className="backdrop-blur-xl bg-white/[0.04] border-white/[0.12] shadow-[0_0_20px_rgba(255,255,255,0.03),inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                View Services
              </Button>
            </a>
          </MotionButton>
        </div>

        <p data-hero-trust className="text-[0.75rem] text-warm-500">
          Prototypes in 7–14 days &middot; Arabic-first &middot; Demo before payment
        </p>
      </div>
    </section>
  );
}
