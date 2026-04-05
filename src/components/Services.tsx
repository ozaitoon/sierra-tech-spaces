"use client";

import ScrollReveal from "./ScrollReveal";
import StarBorder from "./StarBorder";

const tiers = [
  {
    tag: "Start Here",
    name: "Quick Wins",
    desc: "See value in days, not months.",
    items: [
      { title: "WhatsApp AI Assistant", desc: "Arabic chatbot for FAQs, lead qualification & booking", time: "7–10 days" },
      { title: "Business Website", desc: "Mobile-first, SEO-ready, Arabic/English with contact forms", time: "5–7 days" },
      { title: "Social Media Engine", desc: "AI-generated posts, captions & 30-day content calendar", time: "3–5 days" },
      { title: "Process Audit + Quick Fix", desc: "Find your top 3 time-wasters, automate the easiest one", time: "3–5 days" },
    ],
  },
  {
    tag: "Most Popular",
    name: "Core Solutions",
    desc: "Recurring value. Real transformation.",
    items: [
      { title: "Lead Generation System", desc: "Facebook/Instagram ads to WhatsApp qualifier to CRM pipeline", time: "2–3 weeks" },
      { title: "Operations Automation", desc: "Data entry, invoicing, inventory alerts & live dashboards", time: "2–4 weeks" },
      { title: "AI Customer Service", desc: "Multi-channel bot with human handoff across all channels", time: "2–3 weeks" },
      { title: "E-commerce Optimization", desc: "Product copy, review automation, pricing intel & cart recovery", time: "2–3 weeks" },
    ],
  },
  {
    tag: "Full Partnership",
    name: "Premium",
    desc: "Your ongoing AI partner.",
    items: [
      { title: "AI Strategy + Implementation", desc: "Full workflow audit, custom AI roadmap, 3–5 automations, monthly optimization", time: "Ongoing" },
      { title: "Custom Software / SaaS", desc: "Purpose-built internal tools, dashboards, or client-facing applications", time: "Custom" },
    ],
  },
];

function CornerTag({ text }: { text: string }) {
  return (
    <span className="group relative inline-flex items-center justify-center px-6 py-2">
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/60 group-hover:border-purple-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/60 group-hover:border-purple-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/60 group-hover:border-purple-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/60 group-hover:border-purple-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white font-light">
        {text}
      </span>
    </span>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="container max-w-[900px]">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Services</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-[100] text-white tracking-tighter leading-tight mb-4">
              Pick Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Starting Point
              </span>
            </h2>
            <p className="text-base font-light text-white max-w-[480px] mx-auto leading-relaxed">
              Every engagement starts with a working demo. No consulting decks. No vaporware.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-10">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.12}>
              <StarBorder color="#a855f7" speed="8s" thickness={2} className="w-full">
                <div className="p-10 lg:p-14">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                    <div>
                      <CornerTag text={tier.tag} />
                      <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-[100] text-white tracking-tighter mt-6 mb-1">
                        {tier.name}
                      </h3>
                      <p className="text-sm font-light text-white/50">{tier.desc}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 pt-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse" />
                      <span className="text-[0.6rem] uppercase tracking-[0.2em] text-purple-400/60">
                        {tier.items.length} services
                      </span>
                    </div>
                  </div>

                  {/* Divider with gradient */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-10" />

                  {/* Services */}
                  {tier.items.map((item, j) => (
                    <div
                      key={item.title}
                      className={`group grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] items-start gap-2 md:gap-8 py-6 ${
                        j < tier.items.length - 1 ? "border-b border-white/[0.03]" : ""
                      }`}
                    >
                      <h4 className="text-base font-light text-white group-hover:text-purple-300 transition-colors duration-300 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm font-light text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                        {item.desc}
                      </p>
                      <span className="text-[0.6rem] uppercase tracking-[0.2em] text-purple-400/40 pt-1 group-hover:text-purple-400/70 transition-colors duration-300">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </StarBorder>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
