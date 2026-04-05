"use client";

import ScrollReveal from "./ScrollReveal";
import { Languages, Rocket, Zap, Banknote, BarChart3, RefreshCcw } from "lucide-react";

const items = [
  { title: "Arabic-First", desc: "Everything we build speaks Egyptian Arabic from day one. Your chatbot, dashboards, reports | in the language your team uses.", Icon: Languages },
  { title: "Demo Before Payment", desc: "Working prototype with your real data before you spend a single pound. If it doesn't impress you, walk away.", Icon: Rocket },
  { title: "7–14 Day Delivery", desc: "Not months. Not quarters. Working automation deployed within two weeks.", Icon: Zap },
  { title: "Local Pricing", desc: "World-class AI at local rates. No inflated agency fees | just fair, transparent pricing.", Icon: Banknote },
  { title: "Measurable ROI", desc: "Every project has a clear metric: hours saved, leads captured, revenue recovered.", Icon: BarChart3 },
  { title: "Ongoing Partnership", desc: "Monthly retainers keep your automations optimized and scaling with your business.", Icon: RefreshCcw },
];

export default function WhySTS() {
  return (
    <section id="why" className="py-28 md:py-40">
      <div className="container max-w-[800px]">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Why Us</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-[100] text-white tracking-tighter leading-tight mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="group flex items-start gap-6 md:gap-10 py-8 border-b border-white/[0.04] last:border-b-0 hover:border-white/[0.08] transition-colors">
                <div className="w-12 h-12 rounded-full border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:border-purple-500/50 group-hover:bg-purple-500/5 transition-all duration-500">
                  <item.Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between md:gap-12">
                  <h3 className="text-xl font-[100] text-white tracking-tighter mb-2 md:mb-0 md:min-w-[200px] group-hover:text-purple-300 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-white leading-relaxed max-w-[380px] group-hover:text-white transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
