"use client";

import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import ProfileCard from "./ProfileCard";

const team = [
  {
    name: "Youssef Gebaly",
    title: "AI Engineer",
    handle: "theoracle",
    status: "Building",
    avatarUrl: "/team-youssef.png",
    glowColor: "rgba(168, 85, 247, 0.15)",
    gradient: "linear-gradient(145deg, #2d1b4e8c 0%, #7c3aed44 100%)",
  },
  {
    name: "Nabih",
    title: "E-commerce & Marketing",
    handle: "thestrategist",
    status: "Strategizing",
    avatarUrl: "/team-nabih.jpg",
    glowColor: "rgba(139, 92, 246, 0.15)",
    gradient: "linear-gradient(145deg, #1e1b4b8c 0%, #8b5cf644 100%)",
  },
  {
    name: "Omar Zaitoon",
    title: "Operations & Audit",
    handle: "theanalyst",
    status: "Optimizing",
    avatarUrl: "/team-omar.jpg",
    glowColor: "rgba(124, 58, 237, 0.15)",
    gradient: "linear-gradient(145deg, #3b1c5e8c 0%, #a855f744 100%)",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 md:py-40">
      <div className="container max-w-[1400px]">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Team</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-[100] text-white tracking-tighter leading-tight mb-4">
              The People Behind{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                STS
              </span>
            </h2>
            <p className="text-base font-light text-white max-w-[480px] mx-auto leading-relaxed">
              Three founders. Three complementary skill sets. One mission.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-16 justify-items-center" stagger={0.15}>
          {team.map((m) => (
            <div key={m.name} className="flex flex-col items-center">
              <div className="text-center mb-5">
                <h3 className="text-2xl font-[100] text-white tracking-tighter mb-1">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-purple-400 font-light">{m.title}</p>
              </div>
              <ProfileCard
                name=""
                title=""
                handle={m.handle}
                status={m.status}
                avatarUrl={m.avatarUrl}
                iconUrl="/logo-sts.png"
                showUserInfo
                enableTilt
                contactText="Connect"
                behindGlowEnabled
                behindGlowColor={m.glowColor}
                innerGradient={m.gradient}
                onContactClick={() => window.open("https://wa.me/201234567890", "_blank")}
              />
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
