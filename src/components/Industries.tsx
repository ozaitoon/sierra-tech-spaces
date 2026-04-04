"use client";

import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import { MotionCard } from "./Motion";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Building2, Heart, UtensilsCrossed, Briefcase } from "lucide-react";

const industries = [
  { name: "E-commerce", desc: "Product copy, chatbots, cart recovery, review automation", Icon: ShoppingBag },
  { name: "Real Estate", desc: "Lead qualification, property matching, automated follow-ups", Icon: Building2 },
  { name: "Medical Clinics", desc: "Appointment booking, patient FAQs, report digitization", Icon: Heart },
  { name: "Hospitality & F&B", desc: "Reservations, review management, dynamic pricing", Icon: UtensilsCrossed },
  { name: "Professional Services", desc: "Document processing, client intake, reporting automation", Icon: Briefcase },
];

export default function Industries() {
  return (
    <section className="py-24 md:py-36">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gold/50" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Industries</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.025em] text-foreground mb-3.5">
              Built for your industry.
            </h2>
            <p className="text-[0.9375rem] text-muted-foreground max-w-[480px] mx-auto">
              We focus on industries where AI delivers the biggest, fastest impact for Egyptian businesses.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" stagger={0.1}>
          {industries.map((ind) => (
            <MotionCard key={ind.name}>
              <Card className="p-7 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-[10px] bg-accent-subtle border border-gold/[0.12] flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/[0.16] transition-colors">
                  <ind.Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 tracking-[-0.01em]">{ind.name}</h3>
                  <p className="text-[0.8125rem] text-warm-500 leading-relaxed">{ind.desc}</p>
                </div>
              </Card>
            </MotionCard>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
