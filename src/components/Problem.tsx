"use client";

import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import { MotionCard } from "./Motion";
import { Card } from "@/components/ui/card";

const stats = [
  { stat: "4+", unit: "hours/day", label: "Wasted on manual data entry, copy-paste, and repetitive admin" },
  { stat: "60%", unit: "of leads", label: "Lost because nobody replied fast enough on WhatsApp" },
  { stat: "30%", unit: "of revenue", label: "Left on the table from abandoned carts and missed follow-ups" },
];

export default function Problem() {
  return (
    <section className="py-24 md:py-36">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gold/50" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">The Problem</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.025em] text-foreground mb-3.5">
              Your business is leaking{" "}
              <span className="gradient-text">time and money.</span>
            </h2>
            <p className="text-[0.9375rem] text-muted-foreground max-w-[480px] mx-auto">
              Egyptian SMBs lose hours every day to work that machines should be doing.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-3 mb-10" stagger={0.15}>
          {stats.map((s, i) => (
            <MotionCard key={i}>
              <Card className="text-center p-9">
                <div className="font-display font-bold text-[2.75rem] leading-none tracking-[-0.02em] text-destructive">
                  {s.stat}
                </div>
                <div className="text-[0.6875rem] font-semibold tracking-[0.08em] uppercase text-destructive/50 mt-1.5 mb-3.5">
                  {s.unit}
                </div>
                <p className="text-[0.8125rem] text-warm-500 leading-relaxed">{s.label}</p>
              </Card>
            </MotionCard>
          ))}
        </StaggerReveal>

        <ScrollReveal direction="scale">
          <Card className="relative overflow-hidden text-center p-11 hover:translate-y-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,6,0.06)_0%,transparent_60%)] pointer-events-none" />
            <h3 className="relative font-display font-bold text-[clamp(1.125rem,2vw,1.375rem)] text-foreground mb-2.5">
              We automate the tedious stuff.
            </h3>
            <p className="relative text-[0.9375rem] text-muted-foreground max-w-[560px] mx-auto">
              From WhatsApp chatbots that qualify leads in Arabic, to dashboards that
              replace 3 hours of spreadsheet work — we build AI that pays for itself
              in the first month.
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
