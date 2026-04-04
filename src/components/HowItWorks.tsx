import ScrollReveal from "./ScrollReveal";

const steps = [
  { number: "01", title: "Audit", desc: "We map your workflows and identify the 3 biggest time-wasters. Free, no strings attached." },
  { number: "02", title: "Demo", desc: "We build a working prototype in 7–14 days. You see it running with your real data before you pay." },
  { number: "03", title: "Build", desc: "Once approved, we deploy the full solution. Clear scope, fixed price, no surprises." },
  { number: "04", title: "Optimize", desc: "Monthly retainer keeps things running, improving, and scaling as your business grows." },
];

export default function HowItWorks() {
  return (
    <section id="process" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header section-header--center">
            <div className="overline">Process</div>
            <h2 className="heading-lg">How it works.</h2>
            <p className="text-body">
              From first call to live automation in under a month. No fluff, no committees, no waiting.
            </p>
          </div>
        </ScrollReveal>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="heading-md">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
