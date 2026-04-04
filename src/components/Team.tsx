"use client";

import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import { MotionCard, PulsingDot } from "./Motion";
import { Card } from "@/components/ui/card";

const team = [
  { name: "Omar", role: "AI Engineer", alias: "The Oracle", color: "bg-gold", desc: "Full-stack developer and AI specialist. Builds the custom automations, chatbots, and software that power everything we deliver." },
  { name: "Nabih", role: "E-commerce & Marketing", alias: "The Strategist", color: "bg-copper", desc: "Deep experience in e-commerce and digital marketing. Ensures every solution drives real business metrics — leads, sales, and retention." },
  { name: "Youssef", role: "Operations & Audit", alias: "The Analyst", color: "bg-gold-light", desc: "Operations and audit professional. Maps business workflows, identifies inefficiencies, and ensures every automation is built on solid process foundations." },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-36">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gold/50" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Team</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.025em] text-foreground mb-3.5">
              The people behind STS.
            </h2>
            <p className="text-[0.9375rem] text-muted-foreground max-w-[480px] mx-auto">
              Three founders. Three complementary skill sets. One mission.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-3" stagger={0.15}>
          {team.map((m) => (
            <MotionCard key={m.name}>
              <Card className="p-9 text-center">
                <div className="relative mx-auto mb-5 w-16 h-16">
                  <div className={`w-16 h-16 rounded-[14px] ${m.color} flex items-center justify-center`}>
                    <span className="font-display font-bold text-[1.5rem] text-background">{m.name[0]}</span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-background rounded-[5px] flex items-center justify-center">
                    <PulsingDot />
                  </div>
                </div>
                <h3 className="font-display font-bold text-[clamp(1.125rem,2vw,1.375rem)] text-foreground tracking-[-0.015em] mb-1">
                  {m.name}
                </h3>
                <div className="text-[0.8125rem] text-gold font-medium mb-0.5">{m.role}</div>
                <div className="text-[0.6875rem] text-warm-500 italic mb-3.5">&ldquo;{m.alias}&rdquo;</div>
                <p className="text-[0.8125rem] text-warm-500 leading-relaxed">{m.desc}</p>
              </Card>
            </MotionCard>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
