"use client";

import { useState } from "react";

const palettes = [
  {
    name: "Arctic Teal (Current)",
    accent: "#06B6D4",
    accentLight: "#22D3EE",
    bg: "#08090a",
    card: "#111113",
    text: "#f7f8f8",
    muted: "#8a8f98",
    gradient: "linear-gradient(135deg, #06B6D4, #10B981)",
  },
  {
    name: "Electric Violet",
    accent: "#8B5CF6",
    accentLight: "#A78BFA",
    bg: "#09090b",
    card: "#12121a",
    text: "#fafafa",
    muted: "#8b8b9e",
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
  },
  {
    name: "Warm Gold",
    accent: "#D4A006",
    accentLight: "#FACC15",
    bg: "#0a0908",
    card: "#141210",
    text: "#faf8f5",
    muted: "#9a9590",
    gradient: "linear-gradient(135deg, #D4A006, #F59E0B)",
  },
  {
    name: "Rose Steel",
    accent: "#F43F5E",
    accentLight: "#FB7185",
    bg: "#0a0809",
    card: "#141112",
    text: "#faf8f8",
    muted: "#9a8f92",
    gradient: "linear-gradient(135deg, #F43F5E, #F97316)",
  },
  {
    name: "Emerald Night",
    accent: "#10B981",
    accentLight: "#34D399",
    bg: "#070a09",
    card: "#0f1412",
    text: "#f5faf8",
    muted: "#849a92",
    gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
  },
  {
    name: "Ice Blue",
    accent: "#3B82F6",
    accentLight: "#60A5FA",
    bg: "#08090c",
    card: "#101118",
    text: "#f8f9fc",
    muted: "#8a8fa0",
    gradient: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
  },
  {
    name: "Copper Minimal",
    accent: "#C2703E",
    accentLight: "#E09060",
    bg: "#0a0908",
    card: "#13110f",
    text: "#f5f0eb",
    muted: "#998f85",
    gradient: "linear-gradient(135deg, #C2703E, #D4A006)",
  },
  {
    name: "Monochrome",
    accent: "#e4e4e7",
    accentLight: "#ffffff",
    bg: "#09090b",
    card: "#111113",
    text: "#fafafa",
    muted: "#71717a",
    gradient: "linear-gradient(135deg, #e4e4e7, #a1a1aa)",
  },
];

const fonts = [
  { name: "Alumni Sans", family: "'Alumni Sans', sans-serif", import: "Alumni+Sans:wght@400;500;600;700;800" },
  { name: "Syne", family: "'Syne', sans-serif", import: "Syne:wght@400;500;600;700;800" },
  { name: "Space Grotesk", family: "'Space Grotesk', sans-serif", import: "Space+Grotesk:wght@400;500;600;700" },
  { name: "Outfit", family: "'Outfit', sans-serif", import: "Outfit:wght@400;500;600;700;800" },
  { name: "Satoshi (Clash Display)", family: "'Clash Display', sans-serif", import: "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" },
  { name: "Plus Jakarta Sans", family: "'Plus Jakarta Sans', sans-serif", import: "Plus+Jakarta+Sans:wght@400;500;600;700;800" },
  { name: "Manrope", family: "'Manrope', sans-serif", import: "Manrope:wght@400;500;600;700;800" },
  { name: "General Sans (Cabinet Grotesk)", family: "'Cabinet Grotesk', sans-serif", import: "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&display=swap" },
];

function getFontUrl(f: typeof fonts[0]) {
  if (f.import.startsWith("https://")) return f.import;
  return `https://fonts.googleapis.com/css2?family=${f.import}&display=swap`;
}

export default function Experiments() {
  const [activePalette, setActivePalette] = useState(0);
  const [activeFont, setActiveFont] = useState(0);
  const p = palettes[activePalette];
  const f = fonts[activeFont];

  return (
    <>
      {/* Load all fonts */}
      {fonts.map((font) => (
        <link key={font.name} rel="stylesheet" href={getFontUrl(font)} />
      ))}

      <div style={{ background: "#000", minHeight: "100vh", color: "#f7f8f8", fontFamily: "'DM Sans', sans-serif" }}>
        {/* Controls */}
        <div style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "rgba(0,0,0,0.85)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 24px",
        }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8f98", marginBottom: 8 }}>
                Color Palette
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {palettes.map((pal, i) => (
                  <button
                    key={pal.name}
                    onClick={() => setActivePalette(i)}
                    style={{
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "6px 14px", borderRadius: 9999,
                      fontSize: 13, fontWeight: 500,
                      background: i === activePalette ? "rgba(255,255,255,0.1)" : "transparent",
                      border: `1px solid ${i === activePalette ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)"}`,
                      color: i === activePalette ? "#fff" : "#8a8f98",
                      cursor: "pointer", transition: "all 0.15s",
                    }}
                  >
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: pal.accent }} />
                    {pal.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8f98", marginBottom: 8 }}>
                Display Font
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {fonts.map((font, i) => (
                  <button
                    key={font.name}
                    onClick={() => setActiveFont(i)}
                    style={{
                      padding: "6px 14px", borderRadius: 9999,
                      fontSize: 13, fontWeight: 500,
                      fontFamily: font.family,
                      background: i === activeFont ? "rgba(255,255,255,0.1)" : "transparent",
                      border: `1px solid ${i === activeFont ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)"}`,
                      color: i === activeFont ? "#fff" : "#8a8f98",
                      cursor: "pointer", transition: "all 0.15s",
                    }}
                  >
                    {font.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>

          {/* Hero Preview */}
          <section style={{
            minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center",
            textAlign: "center", position: "relative", overflow: "hidden",
            background: p.bg,
          }}>
            {/* Glow */}
            <div style={{
              position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)",
              width: 700, height: 500,
              background: `radial-gradient(ellipse at center, ${p.accent}10 0%, transparent 70%)`,
            }} />

            <div style={{ position: "relative", zIndex: 2, maxWidth: 700, padding: "0 24px" }}>
              <div style={{
                fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
                color: p.accent, marginBottom: 20,
              }}>
                AI Consulting — Cairo, Egypt
              </div>

              <h1 style={{
                fontFamily: f.family, fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.05, letterSpacing: "-0.03em",
                color: p.text, marginBottom: 20,
              }}>
                AI that works{" "}
                <span style={{
                  background: p.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  as hard as you do.
                </span>
              </h1>

              <p style={{
                fontSize: "1.0625rem", lineHeight: 1.6,
                color: p.muted, maxWidth: 480, margin: "0 auto 28px",
              }}>
                We help Egyptian businesses replace their most tedious processes with
                AI — so you can focus on what actually grows your business.
              </p>

              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: p.accent, color: p.bg,
                  fontWeight: 700, fontSize: 14,
                  padding: "12px 24px", borderRadius: 9999,
                }}>
                  Chat on WhatsApp
                </span>
                <span style={{
                  display: "inline-flex", alignItems: "center",
                  color: p.text, fontWeight: 500, fontSize: 14,
                  padding: "12px 24px", borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.12)",
                }}>
                  View Services
                </span>
              </div>
            </div>
          </section>

          {/* Cards Preview */}
          <section style={{ padding: "80px 0" }}>
            <div style={{
              fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
              color: p.accent, marginBottom: 16,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ width: 24, height: 1, background: p.accent, opacity: 0.5 }} />
              Why Us
            </div>

            <h2 style={{
              fontFamily: f.family, fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.1, letterSpacing: "-0.025em",
              color: p.text, marginBottom: 14,
            }}>
              Why Sierra Tech?
            </h2>

            <p style={{ color: p.muted, fontSize: 15, maxWidth: 480, marginBottom: 40 }}>
              We&apos;re not another agency selling buzzwords. We&apos;re engineers who build things that work.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
              {[
                { title: "Arabic-First", desc: "Everything we build speaks Egyptian Arabic from day one." },
                { title: "Demo Before Payment", desc: "Working prototype with your real data before you spend a pound." },
                { title: "7–14 Day Delivery", desc: "Working automation deployed within two weeks." },
              ].map((card) => (
                <div key={card.title} style={{
                  background: p.card, border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14, padding: "28px 24px",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `${p.accent}18`, border: `1px solid ${p.accent}20`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 18,
                  }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={p.accent} strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: f.family, fontWeight: 600,
                    fontSize: 16, color: p.text, marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 13, color: p.muted, lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Typography Specimen */}
          <section style={{ padding: "60px 0 80px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{
              fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
              color: p.accent, marginBottom: 32,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ width: 24, height: 1, background: p.accent, opacity: 0.5 }} />
              Font Specimen — {f.name}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { size: "4.5rem", weight: 700, text: "Sierra Tech Spaces", spacing: "-0.03em" },
                { size: "3rem", weight: 700, text: "AI That Works As Hard As You Do", spacing: "-0.025em" },
                { size: "2rem", weight: 600, text: "Egyptian Businesses Deserve Better Tools", spacing: "-0.02em" },
                { size: "1.375rem", weight: 600, text: "We Build Custom AI Automations That Pay For Themselves", spacing: "-0.015em" },
                { size: "1rem", weight: 500, text: "From WhatsApp chatbots to full operations dashboards — delivered in days, not months.", spacing: "-0.01em" },
              ].map((row, i) => (
                <div key={i} style={{
                  fontFamily: f.family, fontWeight: row.weight,
                  fontSize: row.size, letterSpacing: row.spacing,
                  lineHeight: 1.15, color: i < 2 ? p.text : p.muted,
                }}>
                  {row.text}
                </div>
              ))}
            </div>

            {/* Color swatches */}
            <div style={{ marginTop: 48 }}>
              <div style={{
                fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
                color: p.muted, marginBottom: 16,
              }}>
                Active Palette — {p.name}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                  { label: "Accent", color: p.accent },
                  { label: "Accent Light", color: p.accentLight },
                  { label: "Background", color: p.bg },
                  { label: "Card", color: p.card },
                  { label: "Text", color: p.text },
                  { label: "Muted", color: p.muted },
                ].map((s) => (
                  <div key={s.label} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8, padding: "8px 14px",
                  }}>
                    <span style={{ width: 20, height: 20, borderRadius: 6, background: s.color, border: "1px solid rgba(255,255,255,0.1)" }} />
                    <span style={{ fontSize: 12, color: "#8a8f98" }}>{s.label}</span>
                    <span style={{ fontSize: 11, color: "#62666d", fontFamily: "monospace" }}>{s.color}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Card Preview */}
          <section style={{ padding: "60px 0 100px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{
              fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
              color: p.accent, marginBottom: 32,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ width: 24, height: 1, background: p.accent, opacity: 0.5 }} />
              Service Card Preview
            </div>

            <div style={{
              background: p.card, border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, padding: "40px 36px", maxWidth: 640,
            }}>
              <span style={{
                display: "inline-block", fontSize: 11, fontWeight: 600,
                padding: "5px 12px", borderRadius: 9999,
                color: p.accent, border: `1px solid ${p.accent}30`,
                background: `${p.accent}10`, marginBottom: 16,
              }}>
                Most popular
              </span>

              <h3 style={{
                fontFamily: f.family, fontWeight: 700,
                fontSize: "1.75rem", color: p.text,
                letterSpacing: "-0.02em", marginBottom: 6,
              }}>
                Core Solutions
              </h3>
              <p style={{ color: p.muted, fontSize: 14, marginBottom: 16 }}>
                Deeper engagement. Recurring value. Real transformation.
              </p>
              <div style={{
                fontFamily: f.family, fontWeight: 700,
                fontSize: "1.5rem", color: p.text,
                letterSpacing: "-0.02em", paddingBottom: 20,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                marginBottom: 20,
              }}>
                EGP 20–75K <span style={{ fontSize: 13, fontWeight: 400, color: p.muted }}>setup + retainer</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {["Lead Generation System", "Operations Automation", "AI Customer Service", "E-commerce Optimization"].map((s) => (
                  <div key={s}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: p.text, marginBottom: 2 }}>{s}</div>
                    <div style={{ fontSize: 12, color: p.muted }}>Full-stack automation solution</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24 }}>
                <span style={{
                  display: "inline-flex", alignItems: "center",
                  background: p.accent, color: p.bg,
                  fontWeight: 600, fontSize: 14,
                  padding: "12px 24px", borderRadius: 9999,
                }}>
                  Get Started
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
