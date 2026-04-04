import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We map your workflows and identify the 3 biggest time-wasters. Free, no strings attached.",
    accent: "from-teal to-teal/50",
  },
  {
    number: "02",
    title: "Demo",
    description:
      "We build a working prototype in 7-14 days. You see it running with your real data before you pay.",
    accent: "from-sea to-sea/50",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Once approved, we deploy the full solution. Clear scope, fixed price, no surprises.",
    accent: "from-teal to-sea/50",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Monthly retainer keeps things running, improving, and scaling as your business grows.",
    accent: "from-amber to-amber/50",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative section-padding bg-navy-light noise"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal text-xs tracking-[0.25em] uppercase font-semibold">
              Process
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
              How it works.
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              From first call to live automation in under a month. No fluff, no
              committees, no waiting.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.12}>
              <div className="relative group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-6 h-px bg-gradient-to-r from-white/10 to-transparent z-20" />
                )}

                <div className="bg-slate/30 border border-white/5 rounded-2xl p-8 h-full card-hover">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.accent} mb-6`}
                  >
                    <span className="text-navy-dark font-display font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
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
