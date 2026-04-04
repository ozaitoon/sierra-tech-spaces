import ScrollReveal from "./ScrollReveal";

const painPoints = [
  {
    stat: "4+",
    unit: "hours/day",
    label: "Wasted on manual data entry, copy-paste, and repetitive admin",
  },
  {
    stat: "60%",
    unit: "of leads",
    label: "Lost because nobody replied fast enough on WhatsApp",
  },
  {
    stat: "30%",
    unit: "of revenue",
    label: "Left on the table from abandoned carts and missed follow-ups",
  },
];

export default function Problem() {
  return (
    <section className="relative section-padding bg-navy-light noise">
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal text-xs tracking-[0.25em] uppercase font-semibold">
              The Problem
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
              Your business is leaking
              <br />
              <span className="gradient-text">time and money.</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Egyptian SMBs lose hours every day to work that machines should be
              doing. Here&apos;s what we see over and over:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-slate/40 border border-white/5 rounded-2xl p-8 text-center card-hover">
                <div className="font-display font-bold text-5xl text-coral mb-1">
                  {point.stat}
                </div>
                <div className="text-coral/70 text-sm font-medium uppercase tracking-wider mb-4">
                  {point.unit}
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {point.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="relative bg-gradient-to-r from-teal/10 to-sea/10 border border-teal/10 rounded-2xl p-8 md:p-12 text-center">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal/5 to-transparent" />
            <div className="relative z-10">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                We automate the tedious stuff.
              </h3>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                From WhatsApp chatbots that qualify leads in Arabic, to
                dashboards that replace 3 hours of spreadsheet work — we build
                AI that pays for itself in the first month.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
