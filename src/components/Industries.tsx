"use client";

import ScrollReveal from "./ScrollReveal";
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
    <section className="py-28 md:py-40 overflow-hidden">
      <div className="container max-w-[1000px]">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Industries</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-[100] text-white tracking-tighter leading-tight mb-4">
              Built For Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Industry
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />

          {industries.map((ind, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal key={ind.name} delay={i * 0.1}>
                <div className={`relative flex items-center mb-16 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 pl-16 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <div className={`group inline-flex flex-col ${isLeft ? "md:items-end" : "md:items-start"}`}>
                      <h3 className="text-2xl font-[100] text-white tracking-tighter mb-2 group-hover:text-purple-300 transition-colors duration-500">
                        {ind.name}
                      </h3>
                      <p className="text-sm font-light text-white/60 leading-relaxed max-w-[300px]">
                        {ind.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-purple-500/30 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10 hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-500">
                    <ind.Icon className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
