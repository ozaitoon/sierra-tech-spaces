import ScrollReveal from "./ScrollReveal";

const items = [
  {
    title: "Arabic-First",
    desc: "Everything we build speaks Egyptian Arabic from day one. Your chatbot, dashboards, reports — all in the language your team actually uses.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />,
  },
  {
    title: "Demo Before Payment",
    desc: "We build a working prototype with your real data before you spend a single pound. If it doesn't impress you, walk away.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />,
  },
  {
    title: "7–14 Day Delivery",
    desc: "Not months. Not quarters. Working automation deployed within two weeks. We move fast because your business can't afford to wait.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
  },
  {
    title: "Egyptian Pricing",
    desc: "Based in Cairo, so you pay Egyptian prices for world-class AI. Entry projects start at EGP 5,000 — not the $5,000+ foreign agencies charge.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />,
  },
  {
    title: "Measurable ROI",
    desc: "Every project has a clear metric: hours saved, leads captured, revenue recovered. If we can't show you the numbers, we don't charge.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
  },
  {
    title: "Ongoing Partnership",
    desc: "We don't build and disappear. Monthly retainers keep your automations optimized, updated, and scaling with your business.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />,
  },
];

export default function WhySTS() {
  return (
    <section id="why" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header section-header--center">
            <div className="overline">Why Us</div>
            <h2 className="heading-lg">Why Sierra Tech?</h2>
            <p className="text-body">
              We&apos;re not another agency selling buzzwords. We&apos;re engineers who build things that work.
            </p>
          </div>
        </ScrollReveal>

        <div className="why-grid">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="why-card">
                <div className="why-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="heading-sm">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
