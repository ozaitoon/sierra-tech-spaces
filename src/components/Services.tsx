import ScrollReveal from "./ScrollReveal";

const tiers = [
  {
    tag: "Start here",
    tagClass: "service-card-tag--entry",
    name: "Quick Wins",
    description: "Low barrier to entry. See value in days, not months.",
    price: "EGP 5–30K",
    priceNote: "one-time",
    items: [
      { title: "WhatsApp AI Assistant", desc: "Arabic chatbot for FAQs, lead qualification & booking", time: "7–10 days" },
      { title: "Business Website", desc: "Mobile-first, SEO-ready, Arabic/English with contact forms", time: "5–7 days" },
      { title: "Social Media Engine", desc: "AI-generated posts, captions & 30-day content calendar", time: "3–5 days" },
      { title: "Process Audit + Quick Fix", desc: "Find your top 3 time-wasters, automate the easiest one", time: "3–5 days" },
    ],
  },
  {
    tag: "Most popular",
    tagClass: "service-card-tag--core",
    name: "Core Solutions",
    description: "Deeper engagement. Recurring value. Real transformation.",
    price: "EGP 20–75K",
    priceNote: "setup + retainer",
    items: [
      { title: "Lead Generation System", desc: "Facebook/Instagram ads to WhatsApp qualifier to CRM pipeline", time: "2–3 weeks" },
      { title: "Operations Automation", desc: "Data entry, invoicing, inventory alerts & live dashboards", time: "2–4 weeks" },
      { title: "AI Customer Service", desc: "Multi-channel bot with human handoff across WhatsApp, Messenger & web", time: "2–3 weeks" },
      { title: "E-commerce Optimization", desc: "Product copy, review automation, pricing intel & cart recovery", time: "2–3 weeks" },
    ],
  },
  {
    tag: "Full partnership",
    tagClass: "service-card-tag--premium",
    name: "Premium",
    description: "Your ongoing AI partner. High-touch. High-value.",
    price: "EGP 75K+",
    priceNote: "custom scoping",
    items: [
      { title: "AI Strategy + Implementation", desc: "Full workflow audit, custom AI roadmap, 3–5 automations, monthly optimization", time: "Ongoing" },
      { title: "Custom Software / SaaS", desc: "Purpose-built internal tools, dashboards, or client-facing applications", time: "Custom" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header section-header--center">
            <div className="overline">Services</div>
            <h2 className="heading-lg">Pick your starting point.</h2>
            <p className="text-body">
              Every engagement starts with a working demo. No consulting decks. No
              vaporware. Real results you can see and measure.
            </p>
          </div>
        </ScrollReveal>

        <div className="services-stack">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.1}>
              <div className="service-card">
                <span className={`service-card-tag ${tier.tagClass}`}>{tier.tag}</span>

                <div className="service-card-top">
                  <h3 className="heading-lg" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                    {tier.name}
                  </h3>
                  <p className="text-body" style={{ fontSize: "0.9375rem" }}>{tier.description}</p>
                  <div className="service-card-price">
                    {tier.price} <span>{tier.priceNote}</span>
                  </div>
                </div>

                <div className="service-items">
                  {tier.items.map((item) => (
                    <div key={item.title} className="service-item">
                      <div className="service-item-title">{item.title}</div>
                      <div className="service-item-desc">{item.desc}</div>
                      <div className="service-item-time">{item.time}</div>
                    </div>
                  ))}
                </div>

                <div className="service-card-cta">
                  <a
                    href="https://wa.me/201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={i === 1 ? "btn-primary" : "btn-secondary"}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
