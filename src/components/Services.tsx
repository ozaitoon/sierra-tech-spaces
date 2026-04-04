"use client";

import ScrollReveal from "./ScrollReveal";
import { MotionButton } from "./Motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const tiers = [
  {
    badge: "Start here", badgeVariant: "copper" as const, name: "Quick Wins",
    desc: "Low barrier to entry. See value in days, not months.",
    price: "EGP 5–30K", priceNote: "one-time", featured: false,
    items: [
      { title: "WhatsApp AI Assistant", desc: "Arabic chatbot for FAQs, lead qualification & booking", time: "7–10 days" },
      { title: "Business Website", desc: "Mobile-first, SEO-ready, Arabic/English with contact forms", time: "5–7 days" },
      { title: "Social Media Engine", desc: "AI-generated posts, captions & 30-day content calendar", time: "3–5 days" },
      { title: "Process Audit + Quick Fix", desc: "Find your top 3 time-wasters, automate the easiest one", time: "3–5 days" },
    ],
  },
  {
    badge: "Most popular", badgeVariant: "default" as const, name: "Core Solutions",
    desc: "Deeper engagement. Recurring value. Real transformation.",
    price: "EGP 20–75K", priceNote: "setup + retainer", featured: true,
    items: [
      { title: "Lead Generation System", desc: "Facebook/Instagram ads to WhatsApp qualifier to CRM pipeline", time: "2–3 weeks" },
      { title: "Operations Automation", desc: "Data entry, invoicing, inventory alerts & live dashboards", time: "2–4 weeks" },
      { title: "AI Customer Service", desc: "Multi-channel bot with human handoff across all channels", time: "2–3 weeks" },
      { title: "E-commerce Optimization", desc: "Product copy, review automation, pricing intel & cart recovery", time: "2–3 weeks" },
    ],
  },
  {
    badge: "Full partnership", badgeVariant: "gold" as const, name: "Premium",
    desc: "Your ongoing AI partner. High-touch. High-value.",
    price: "EGP 75K+", priceNote: "custom scoping", featured: false,
    items: [
      { title: "AI Strategy + Implementation", desc: "Full workflow audit, custom AI roadmap, 3–5 automations, monthly optimization", time: "Ongoing" },
      { title: "Custom Software / SaaS", desc: "Purpose-built internal tools, dashboards, or client-facing applications", time: "Custom" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gold/50" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Services</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.025em] text-foreground mb-3.5">
              Pick your starting point.
            </h2>
            <p className="text-[0.9375rem] text-muted-foreground max-w-[480px] mx-auto">
              Every engagement starts with a working demo. No consulting decks. No vaporware.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4 lg:gap-0">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.12} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <Card
                className={`p-9 lg:p-11 ${tier.featured ? "lg:sticky lg:top-[140px] lg:z-[4] lg:-mt-10 border-gold/20 shadow-[0_0_40px_rgba(212,160,6,0.08)]" : i > 0 ? "lg:sticky lg:top-[100px] lg:z-[3] lg:-mt-10" : "lg:sticky lg:top-[100px] lg:z-[3]"} hover:translate-y-0`}
              >
                <Badge variant={tier.badgeVariant} className="mb-5">{tier.badge}</Badge>

                <div className="flex flex-col gap-1.5 mb-6">
                  <h3 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] text-foreground tracking-[-0.02em]">
                    {tier.name}
                  </h3>
                  <p className="text-[0.9375rem] text-muted-foreground">{tier.desc}</p>
                  <div className="font-display font-bold text-2xl text-foreground tracking-[-0.02em] mt-1">
                    {tier.price}
                    <span className="text-[0.8125rem] font-normal text-warm-500 ml-1">{tier.priceNote}</span>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="grid sm:grid-cols-2 gap-4">
                  {tier.items.map((item) => (
                    <div key={item.title} className="space-y-0.5">
                      <div className="font-semibold text-[0.875rem] text-foreground">{item.title}</div>
                      <div className="text-[0.8125rem] text-warm-500 leading-relaxed">{item.desc}</div>
                      <div className="text-[0.6875rem] text-gold/50">{item.time}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <MotionButton>
                    <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                      <Button variant={tier.featured ? "default" : "secondary"}>
                        Get Started
                      </Button>
                    </a>
                  </MotionButton>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
