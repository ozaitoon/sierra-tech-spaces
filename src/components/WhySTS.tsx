"use client";

import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import { MotionCard } from "./Motion";
import { Card } from "@/components/ui/card";
import { Languages, Rocket, Zap, Banknote, BarChart3, RefreshCcw } from "lucide-react";

const items = [
  { title: "Arabic-First", desc: "Everything we build speaks Egyptian Arabic from day one. Your chatbot, dashboards, reports — in the language your team uses.", Icon: Languages },
  { title: "Demo Before Payment", desc: "Working prototype with your real data before you spend a single pound. If it doesn't impress you, walk away.", Icon: Rocket },
  { title: "7–14 Day Delivery", desc: "Not months. Not quarters. Working automation deployed within two weeks. We move fast because your business can't wait.", Icon: Zap },
  { title: "Local Pricing", desc: "Based in Cairo, so you get world-class AI at local rates. No inflated agency fees — just fair, transparent pricing.", Icon: Banknote },
  { title: "Measurable ROI", desc: "Every project has a clear metric: hours saved, leads captured, revenue recovered. No numbers, no charge.", Icon: BarChart3 },
  { title: "Ongoing Partnership", desc: "We don't build and disappear. Monthly retainers keep your automations optimized and scaling with your business.", Icon: RefreshCcw },
];

export default function WhySTS() {
  return (
    <section id="why" className="py-24 md:py-36">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gold/50" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">Why Us</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[0.95] tracking-[-0.04em] text-foreground mb-3.5">
              Why Sierra Tech?
            </h2>
            <p className="text-[0.9375rem] text-muted-foreground max-w-[480px] mx-auto">
              We&apos;re not another agency selling buzzwords. We&apos;re engineers who build things that work.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" stagger={0.1}>
          {items.map((item) => (
            <MotionCard key={item.title}>
              <Card className="p-8 h-full group">
                <div className="w-10 h-10 rounded-[10px] bg-accent-subtle border border-gold/[0.12] flex items-center justify-center text-gold mb-5 group-hover:bg-gold/[0.16] transition-colors">
                  <item.Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="text-[0.8125rem] text-warm-500 leading-[1.8]">{item.desc}</p>
              </Card>
            </MotionCard>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
