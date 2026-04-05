"use client";

import dynamic from "next/dynamic";
import ScrollReveal from "./ScrollReveal";
import { MotionButton } from "./Motion";
import ShinyText from "./ShinyText";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 text-center relative overflow-hidden">
      {/* Globe behind content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          <Globe />
        </div>
      </div>

      <div className="container max-w-[900px] relative z-10">
        <ScrollReveal>
          <div className="max-w-[600px] mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Get Started</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-[100] text-white tracking-tighter leading-tight mb-4">
              Ready To Stop Wasting{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Time And Money
              </span>
            </h2>
            <p className="text-base font-light text-white max-w-[480px] mx-auto leading-relaxed">
              Send us a message on WhatsApp. We'll have a 15-minute chat, identify your
              biggest time-waster, and show you how we'd fix it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 mb-14">
            <MotionButton>
              <a
                href="https://wa.me/201234567890?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20learn%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-4"
              >
                <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white group-hover:w-5 group-hover:h-5 transition-all duration-300" />
                <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white group-hover:w-5 group-hover:h-5 transition-all duration-300" />
                <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white group-hover:w-5 group-hover:h-5 transition-all duration-300" />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white group-hover:w-5 group-hover:h-5 transition-all duration-300" />
                <ShinyText
                  text="Chat On WhatsApp"
                  speed={5}
                  color="#ffffff"
                  shineColor="#7c3aed"
                  spread={120}
                  className="text-lg font-light tracking-wide"
                />
              </a>
            </MotionButton>
            <a
              href="mailto:hello@sierratechspaces.com"
              className="text-sm font-light text-white/50 hover:text-white transition-colors"
            >
              hello@sierratechspaces.com
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex items-center justify-center gap-8 md:gap-16 max-w-[700px] mx-auto">
            {[
              { value: "15 min", label: "Free discovery call" },
              { value: "7–14 days", label: "Working prototype" },
              { value: "Free", label: "Until you see results" },
            ].map((s, i, arr) => (
              <div key={s.value} className="flex items-center gap-8 md:gap-16">
                <div className="text-center">
                  <div className="text-3xl font-[100] text-white tracking-tighter mb-1">{s.value}</div>
                  <div className="text-xs font-light text-purple-400 uppercase tracking-[0.15em]">{s.label}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="h-10 w-px bg-white/[0.08]" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
