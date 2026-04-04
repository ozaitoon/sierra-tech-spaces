import ScrollReveal from "./ScrollReveal";

const stats = [
  { stat: "4+", unit: "hours/day", label: "Wasted on manual data entry, copy-paste, and repetitive admin" },
  { stat: "60%", unit: "of leads", label: "Lost because nobody replied fast enough on WhatsApp" },
  { stat: "30%", unit: "of revenue", label: "Left on the table from abandoned carts and missed follow-ups" },
];

export default function Problem() {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header section-header--center">
            <div className="overline">The Problem</div>
            <h2 className="heading-lg">
              Your business is leaking <span className="gradient-text">time and money.</span>
            </h2>
            <p className="text-body">
              Egyptian SMBs lose hours every day to work that machines should be doing.
            </p>
          </div>
        </ScrollReveal>

        <div className="problem-grid">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="stat-card">
                <div className="stat-number">{s.stat}</div>
                <div className="stat-unit">{s.unit}</div>
                <p className="stat-label">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="solution-banner">
            <h3 className="heading-md">We automate the tedious stuff.</h3>
            <p className="text-body">
              From WhatsApp chatbots that qualify leads in Arabic, to dashboards that
              replace 3 hours of spreadsheet work — we build AI that pays for itself
              in the first month.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
