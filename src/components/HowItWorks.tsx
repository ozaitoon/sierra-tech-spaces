"use client";

import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import { MotionCard } from "./Motion";
import { Card } from "@/components/ui/card";

const steps = [
  { num: "01", title: "Audit", desc: "We map your workflows and identify the 3 biggest time-wasters. Free, no strings attached.", color: "bg-gold" },
  { num: "02", title: "Demo", desc: "We build a working prototype in 7–14 days. You see it running with your real data before you pay.", color: "bg-copper" },
  { num: "03", title: "Build", desc: "Once approved, we deploy the full solution. Clear scope, fixed price, no surprises.", color: "bg-gold-light" },
  { num: "04", title: "Optimize", desc: "Monthly retainer keeps things running, improving, and scaling as your business grows.", color: "bg-destructive" },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 md:py-36">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gold/50" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Process</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.025em] text-foreground mb-3.5">
              How it works.
            </h2>
            <p className="text-[0.9375rem] text-muted-foreground max-w-[480px] mx-auto">
              From first call to live automation in under a month.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" stagger={0.12}>
          {steps.map((step) => (
            <MotionCard key={step.num}>
              <Card className="p-8">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-[10px] ${step.color} mb-5`}>
                  <span className="font-display font-bold text-xs text-background">{step.num}</span>
                </div>
                <h3 className="font-display font-semibold text-[clamp(1.125rem,2vw,1.375rem)] text-foreground tracking-[-0.015em] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[0.8125rem] text-warm-500 leading-relaxed">{step.desc}</p>
              </Card>
            </MotionCard>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
