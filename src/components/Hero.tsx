"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import dynamic from "next/dynamic";
import { MotionButton } from "@/components/Motion";
import RotatingText from "@/components/RotatingText";
import ShinyText from "@/components/ShinyText";

gsap.registerPlugin(ScrollTrigger);

const ScrollFrameHero = dynamic(() => import("./ScrollFrameHero"), { ssr: false });

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in the CTA overlay as the scroll animation nears its end
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: overlayRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      {/* Scroll-driven frame animation */}
      <ScrollFrameHero />

      {/* CTA overlay pinned at the bottom of the scroll animation */}
      <div
        ref={overlayRef}
        className="absolute bottom-[20vh] left-0 right-0 z-20 flex flex-col items-center px-6 opacity-0"
      >
        {/* Subtitle */}
        <div className="text-[clamp(2rem,4.5vw,3.5rem)] leading-none font-[100] text-white tracking-tighter drop-shadow-lg whitespace-nowrap mb-6 flex flex-col items-center gap-3">
          <span>AI Systems Designed To</span>
          <RotatingText
            texts={[
              "Rise Above",
              "Drive Growth",
              "Scale Smarter",
              "Improve Efficiency",
              "Optimize Operations",
              "Enable Innovation",
              "Reduce Complexity",
              "Accelerate Decisions",
              "Unlock Value",
              "Improve Performance",
              "Streamline Work",
              "Power Growth",
              "Transform Operations",
            ]}
            mainClassName="text-white overflow-hidden justify-center"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        {/* CTA */}
        <MotionButton>
          <a
            href="https://wa.me/201234567890?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 mb-4"
          >
            {/* Corner brackets */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white group-hover:border-white group-hover:w-5 group-hover:h-5 transition-all duration-300" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white group-hover:border-white group-hover:w-5 group-hover:h-5 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white group-hover:border-white group-hover:w-5 group-hover:h-5 transition-all duration-300" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white group-hover:border-white group-hover:w-5 group-hover:h-5 transition-all duration-300" />
            <ShinyText
              text="Book A Consultation"
              speed={5}
              color="#ffffff"
              shineColor="#7c3aed"
              spread={120}
              className="text-2xl font-light tracking-wide"
            />
          </a>
        </MotionButton>

        {/* Trust */}
        <p className="text-base text-white drop-shadow-md">
          Prototypes in 7–14 days | Demo before payment
        </p>
      </div>
    </section>
  );
}
