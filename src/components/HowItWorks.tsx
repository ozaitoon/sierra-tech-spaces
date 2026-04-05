"use client";

import ScrollReveal from "./ScrollReveal";
import StarBorder from "./StarBorder";

const steps = [
  { num: "01", title: "Audit", desc: "We map your workflows and identify the 3 biggest time-wasters. Free, no strings attached." },
  { num: "02", title: "Demo", desc: "We build a working prototype in 7–14 days. You see it running with your real data before you pay." },
  { num: "03", title: "Build", desc: "Once approved, we deploy the full solution. Clear scope, fixed price, no surprises." },
  { num: "04", title: "Optimize", desc: "Monthly retainer keeps things running, improving, and scaling as your business grows." },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-28 md:py-40">
      <div className="container max-w-[900px]">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Process</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-[100] text-white tracking-tighter leading-tight mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-base font-light text-white max-w-[480px] mx-auto leading-relaxed">
              From first call to live automation in under a month.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StarBorder color="#a855f7" speed="8s" thickness={2} className="w-full">
            <div className="p-10 lg:p-14">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {steps.map((step, i) => (
                  <div key={step.num}>
                    <div className="text-[2.5rem] font-[100] tracking-tighter text-purple-400/40 leading-none mb-4">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-light text-white tracking-tight mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-sm font-light text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </StarBorder>
        </ScrollReveal>
      </div>
    </section>
  );
}
