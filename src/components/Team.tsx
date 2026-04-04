import ScrollReveal from "./ScrollReveal";

const team = [
  { name: "Omar", role: "AI Engineer", alias: "The Oracle", color: "team-avatar--teal", desc: "Full-stack developer and AI specialist. Builds the custom automations, chatbots, and software that power everything we deliver." },
  { name: "Nabih", role: "E-commerce & Marketing", alias: "The Strategist", color: "team-avatar--sea", desc: "Deep experience in e-commerce and digital marketing. Ensures every solution drives real business metrics — leads, sales, and retention." },
  { name: "Youssef", role: "Operations & Audit", alias: "The Analyst", color: "team-avatar--amber", desc: "Operations and audit professional. Maps business workflows, identifies inefficiencies, and ensures every automation is built on solid process foundations." },
];

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header section-header--center">
            <div className="overline">Team</div>
            <h2 className="heading-lg">The people behind STS.</h2>
            <p className="text-body">
              Three founders. Three complementary skill sets. One mission: make AI actually useful for Egyptian businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="team-grid">
          {team.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.12}>
              <div className="team-card">
                <div className={`team-avatar ${m.color}`}>
                  <span className="team-avatar-letter">{m.name[0]}</span>
                  <div className="team-status">
                    <div className="team-status-dot" />
                  </div>
                </div>
                <h3 className="heading-md">{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <div className="team-alias">&ldquo;{m.alias}&rdquo;</div>
                <p>{m.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
