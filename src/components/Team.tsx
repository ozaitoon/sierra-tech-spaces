import ScrollReveal from "./ScrollReveal";

const team = [
  {
    name: "Omar",
    role: "AI Engineer",
    alias: "The Oracle",
    description:
      "Full-stack developer and AI specialist. Builds the custom automations, chatbots, and software that power everything we deliver.",
    gradient: "from-teal to-teal/40",
  },
  {
    name: "Nabih",
    role: "E-commerce & Marketing",
    alias: "The Strategist",
    description:
      "Deep experience in e-commerce and digital marketing. Ensures every solution drives real business metrics — leads, sales, and retention.",
    gradient: "from-sea to-sea/40",
  },
  {
    name: "Youssef",
    role: "Operations & Audit",
    alias: "The Analyst",
    description:
      "Operations and audit professional. Maps business workflows, identifies inefficiencies, and ensures every automation is built on solid process foundations.",
    gradient: "from-amber to-amber/40",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative section-padding bg-navy noise">
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal text-xs tracking-[0.25em] uppercase font-semibold">
              Team
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
              The people behind STS.
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Three founders. Three complementary skill sets. One mission: make
              AI actually useful for Egyptian businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.15}>
              <div className="bg-slate/30 border border-white/5 rounded-2xl p-8 text-center card-hover group">
                {/* Avatar placeholder */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div
                    className={`w-full h-full rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
                  >
                    <span className="font-display font-bold text-2xl text-navy-dark">
                      {member.name[0]}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-navy rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-sea animate-pulse" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-teal text-sm font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-muted/50 text-xs italic mb-4">
                  &ldquo;{member.alias}&rdquo;
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
