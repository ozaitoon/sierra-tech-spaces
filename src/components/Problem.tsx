"use client";

import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import CountUp from "./CountUp";

const stats = [
  { to: 4, suffix: "+", unit: "hours / day", desc: "Lost to manual data entry, copy-paste, and repetitive admin" },
  { to: 60, suffix: "%", unit: "of leads", desc: "Gone |nobody replied fast enough on WhatsApp" },
  { to: 30, suffix: "%", unit: "of revenue", desc: "Left on the table from abandoned carts and missed follow-ups" },
];

export default function Problem() {
  return (
    <section className="py-28 md:py-40">
      <div className="container max-w-[900px]">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-white mb-6">The Problem</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-[100] text-white tracking-tighter leading-tight mb-4">
              Your Business Is Leaking{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Time And Money
              </span>
            </h2>
            <p className="text-base font-light text-white max-w-[500px] mx-auto leading-relaxed">
              Egyptian SMBs lose hours every day to work that machines should be doing.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-10 md:gap-16 mb-20" stagger={0.15}>
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-[3.5rem] font-[100] tracking-tighter text-white leading-none mb-1">
                <CountUp from={0} to={s.to} suffix={s.suffix} duration={2} />
              </div>
              <div className="text-[0.7rem] uppercase tracking-[0.25em] text-purple-400/70 mb-4">
                {s.unit}
              </div>
              <p className="text-sm font-light text-white leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </StaggerReveal>

        <ScrollReveal direction="scale">
          <div className="relative mt-10 p-12 md:p-16 text-center">
            {/* Corner brackets */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-500/40" />
            <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500/40" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500/40" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-500/40" />

            {/* Subtle glow behind */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,85,247,0.06)_0%,transparent_70%)] pointer-events-none" />

            <h3 className="relative text-[clamp(1.5rem,3vw,2.25rem)] font-[100] text-white tracking-tighter mb-6">
              We Automate The Tedious Stuff
            </h3>
            <p className="relative text-base font-light text-white/80 max-w-[500px] mx-auto leading-relaxed mb-2">
              Automations that qualify leads in Arabic.
            </p>
            <p className="relative text-base font-light text-white/80 max-w-[500px] mx-auto leading-relaxed mb-6">
              Dashboards that replace 3 hours of spreadsheet work.
            </p>
            <div className="relative w-12 h-px bg-purple-500/30 mx-auto mb-6" />
            <p className="relative text-lg font-light text-white max-w-[500px] mx-auto">
              AI that pays for itself in the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-normal">
                first month.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
