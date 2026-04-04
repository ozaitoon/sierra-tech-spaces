import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 text-center">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-[600px] mx-auto">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gold/50" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Get Started</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.025em] text-foreground mb-3.5">
              Ready to stop wasting{" "}
              <span className="gradient-text">time and money?</span>
            </h2>
            <p className="text-[0.9375rem] text-muted-foreground max-w-[480px] mx-auto">
              Send us a message on WhatsApp. We&apos;ll have a 15-minute chat, identify your
              biggest time-waster, and show you how we&apos;d fix it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9 mb-11">
            <a href="https://wa.me/201234567890?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
            <a href="mailto:hello@sierratechspaces.com">
              <Button variant="secondary" size="lg">
                hello@sierratechspaces.com
              </Button>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="grid sm:grid-cols-3 gap-3 max-w-[560px] mx-auto">
            {[
              { value: "15 min", label: "Free discovery call" },
              { value: "7–14 days", label: "Working prototype" },
              { value: "EGP 0", label: "Until you see results" },
            ].map((s) => (
              <Card key={s.value} className="p-5 hover:translate-y-0">
                <div className="font-display font-bold text-xl text-gold tracking-[-0.02em] mb-0.5">{s.value}</div>
                <div className="text-[0.75rem] text-warm-500">{s.label}</div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
