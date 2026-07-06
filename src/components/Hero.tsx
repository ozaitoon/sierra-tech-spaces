"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isPhone, setIsPhone] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsPhone(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!overlayRef.current || isPhone) return;

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
  }, [isPhone]);

  if (isPhone) {
    return (
      <section className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-10 pt-28 md:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(124,58,237,0.28),transparent_34%),linear-gradient(180deg,rgba(11,20,38,0.16),rgba(11,20,38,0.82)_72%,#0B1426)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-[22rem] flex-col items-center text-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shadow-[0_0_46px_rgba(124,58,237,0.25)]">
            <Image
              src="/logo-sts.png"
              alt="Sierra Tech Spaces"
              width={104}
              height={104}
              className="h-20 w-20 object-contain"
              priority
            />
          </div>

          <p className="mb-4 text-[0.68rem] font-light uppercase tracking-[0.32em] text-white/55">
            Sierra Tech Spaces
          </p>

          <h1 className="text-[2.75rem] font-[100] leading-[0.9] tracking-tight text-white drop-shadow-lg">
            AI Systems
            <span className="mt-2 block text-[2.15rem] text-white/82">Designed To</span>
          </h1>

          <div className="mt-4 min-h-[3.25rem] text-[2.05rem] font-[100] leading-none tracking-tight text-white">
            <RotatingText
              texts={[
                "Save Time",
                "Capture Leads",
                "Cut Repetition",
                "Scale Smarter",
                "Drive Growth",
              ]}
              mainClassName="justify-center overflow-hidden text-white"
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

          <p className="mt-6 max-w-[19rem] text-sm font-light leading-6 text-white/68">
            Practical AI automations for Egyptian businesses that need fewer manual tasks and faster follow-up.
          </p>

          <MotionButton>
            <a
              href="https://wa.me/201555454377?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-8 inline-flex min-h-12 items-center justify-center px-7 py-3"
            >
              <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-white transition-all duration-300 group-hover:h-5 group-hover:w-5" />
              <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-white transition-all duration-300 group-hover:h-5 group-hover:w-5" />
              <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-white transition-all duration-300 group-hover:h-5 group-hover:w-5" />
              <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:h-5 group-hover:w-5" />
              <ShinyText
                text="Book A Consultation"
                speed={5}
                color="#ffffff"
                shineColor="#7c3aed"
                spread={120}
                className="text-base font-light tracking-wide"
              />
            </a>
          </MotionButton>

          <p className="mt-5 text-xs font-light leading-5 text-white/58">
            Prototypes in 7-14 days. Demo before payment.
          </p>
        </div>
      </section>
    );
  }

  if (isPhone === null) {
    return <section className="min-h-screen bg-[#0B1426]" />;
  }

  return (
    <section className="relative hidden md:block">
      {/* Scroll-driven frame animation */}
      <ScrollFrameHero />

      {/* CTA overlay pinned at the bottom of the scroll animation */}
      <div
        ref={overlayRef}
        className="absolute bottom-[clamp(1.5rem,7vh,8rem)] left-0 right-0 z-20 flex flex-col items-center px-6 opacity-0"
      >
        {/* Subtitle */}
        <div className="mb-[clamp(0.75rem,2vh,1.5rem)] flex max-w-[92vw] flex-col items-center gap-[clamp(0.25rem,1vh,0.75rem)] text-center text-[clamp(1.75rem,min(3.2vw,6vh),3.5rem)] font-[100] leading-[0.95] tracking-tighter text-white drop-shadow-lg sm:whitespace-nowrap">
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
            href="https://wa.me/201555454377?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mb-[clamp(0.5rem,1.8vh,1rem)] inline-flex items-center justify-center px-[clamp(1.75rem,4vw,2.5rem)] py-[clamp(0.75rem,1.8vh,1rem)]"
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
              className="text-[clamp(1rem,2vw,1.5rem)] font-light tracking-wide"
            />
          </a>
        </MotionButton>

        {/* Trust */}
        <p className="text-center text-[clamp(0.8rem,1.4vw,1rem)] text-white drop-shadow-md">
          Prototypes in 7–14 days | Demo before payment
        </p>
      </div>
    </section>
  );
}
