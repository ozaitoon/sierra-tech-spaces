import ScrollReveal from "./ScrollReveal";

const tiers = [
  {
    name: "Quick Wins",
    tag: "Start here",
    tagColor: "bg-sea/10 text-sea border-sea/20",
    description: "Low barrier to entry. See value in days, not months.",
    price: "EGP 5-30K",
    priceNote: "one-time",
    items: [
      {
        title: "WhatsApp AI Assistant",
        desc: "Arabic-speaking chatbot for FAQs, lead qualification & booking",
        time: "7-10 days",
      },
      {
        title: "Business Website",
        desc: "Mobile-first, SEO-ready, Arabic/English with contact forms",
        time: "5-7 days",
      },
      {
        title: "Social Media Engine",
        desc: "AI-generated posts, captions & 30-day content calendar",
        time: "3-5 days",
      },
      {
        title: "Process Audit + Quick Fix",
        desc: "Find your top 3 time-wasters, automate the easiest one",
        time: "3-5 days",
      },
    ],
  },
  {
    name: "Core Solutions",
    tag: "Most popular",
    tagColor: "bg-teal/10 text-teal border-teal/20",
    description: "Deeper engagement. Recurring value. Real transformation.",
    price: "EGP 20-75K",
    priceNote: "setup + retainer",
    items: [
      {
        title: "Lead Generation System",
        desc: "Facebook/Instagram ads to WhatsApp qualifier to CRM pipeline",
        time: "2-3 weeks",
      },
      {
        title: "Operations Automation",
        desc: "Data entry, invoicing, inventory alerts & live dashboards",
        time: "2-4 weeks",
      },
      {
        title: "AI Customer Service",
        desc: "Multi-channel bot (WhatsApp + Messenger + web) with human handoff",
        time: "2-3 weeks",
      },
      {
        title: "E-commerce Optimization",
        desc: "Product copy, review automation, pricing intel & cart recovery",
        time: "2-3 weeks",
      },
    ],
  },
  {
    name: "Premium",
    tag: "Full partnership",
    tagColor: "bg-amber/10 text-amber border-amber/20",
    description: "Become your ongoing AI partner. High-touch. High-value.",
    price: "EGP 75K+",
    priceNote: "custom scoping",
    items: [
      {
        title: "AI Strategy + Implementation",
        desc: "Full workflow audit, custom AI roadmap, 3-5 automations, monthly optimization",
        time: "Ongoing",
      },
      {
        title: "Custom Software / SaaS",
        desc: "Purpose-built internal tools, dashboards or client-facing applications",
        time: "Custom",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative section-padding bg-navy noise">
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal text-xs tracking-[0.25em] uppercase font-semibold">
              Services
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
              Pick your starting point.
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Every engagement starts with a working demo. No consulting decks.
              No vaporware. Real results you can see and measure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.15}>
              <div
                className={`bg-slate/30 border border-white/5 rounded-2xl p-8 h-full flex flex-col card-hover ${
                  i === 1 ? "lg:scale-105 lg:border-teal/20 teal-glow-sm" : ""
                }`}
              >
                <div className="mb-6">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${tier.tagColor}`}
                  >
                    {tier.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-muted text-sm mb-4">{tier.description}</p>

                <div className="mb-6 pb-6 border-b border-white/5">
                  <span className="font-display font-bold text-3xl text-white">
                    {tier.price}
                  </span>
                  <span className="text-muted text-sm ml-2">
                    {tier.priceNote}
                  </span>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                  {tier.items.map((item) => (
                    <div key={item.title}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-white text-sm font-semibold mb-1">
                            {item.title}
                          </h4>
                          <p className="text-muted text-xs leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <span className="text-teal/60 text-xs whitespace-nowrap mt-0.5">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 block ${
                    i === 1
                      ? "bg-teal text-navy-dark hover:bg-teal-light"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
