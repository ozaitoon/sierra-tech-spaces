# Sierra Tech Spaces
# Brand Guidelines

**Version 1.0 — April 2026**
**Confidential — Internal & Partner Use Only**

---

## 1. Brand Overview

### Name
- **Full:** Sierra Tech Spaces
- **Short:** STS / Sierra Tech
- **Legal entity:** Sierra Tech Spaces (Cairo, Egypt)

### Contact
- **Email:** hello@sierratechspaces.com
- **Domain:** sierratechspaces.com

### Mission
We help Egyptian businesses work smarter by replacing their most tedious, time-consuming processes with AI — so they can focus on what actually grows their business.

### Vision
Become Egypt's most trusted AI partner for small and medium businesses — known for solutions that deliver measurable ROI within 30 days, not theoretical consulting decks.

### Positioning Statement
For Egyptian business owners drowning in repetitive work, Sierra Tech Spaces builds AI-powered automations that save real hours and capture real revenue — delivered in days, not months, at prices that make sense for the Egyptian market.

---

## 2. Core Values

| Value | Meaning |
|---|---|
| **Results over hype** | We sell hours saved, leads captured, revenue recovered. Every engagement has a measurable outcome. |
| **Show, don't tell** | Prototype first. Every potential client sees a working demo before they pay anything. |
| **Win-win or no deal** | If we can't clearly help, we say so. Our reputation is worth more than a single contract. |
| **Speak their language** | Arabic-first (Masri dialect), business outcomes not tech jargon. |

---

## 3. Logo

### Primary Logo
The STS logo features a stylised mountain silhouette above bold "STS" letterforms with "SIERRA TECH SPACES" below. The current implementation uses a warm gold colorway on transparent background.

### Logo Files
- `logo-gold.png` — Gold on transparent (primary, for dark backgrounds)
- `logo.jpeg` — Original white/purple on black

### Logo Usage Rules
- Minimum clear space: 1x the height of the "S" on all sides
- Never stretch, rotate, or distort the logo
- On dark backgrounds: use the gold variant
- On light backgrounds: use a dark variant (to be created)
- Never place the logo on busy or low-contrast backgrounds without a container
- The gold outlined container (rounded rectangle, 1.5px gold border with glow) is the preferred treatment on the website

### Logo Container Style
```
Border: 1.5px solid rgba(212, 160, 6, 0.6)
Shadow: 0 0 15px rgba(212, 160, 6, 0.25),
        0 0 40px rgba(212, 160, 6, 0.1),
        0 0 2px rgba(250, 204, 21, 0.4)
Radius: 16px (rounded-2xl)
```

---

## 4. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|---|---|---|---|
| **Background** | `#0a0908` | 10, 9, 8 | Page background, primary dark surface |
| **Gold** | `#D4A006` | 212, 160, 6 | Primary accent, CTAs, links, highlights |
| **Gold Light** | `#FACC15` | 250, 204, 21 | Gradient endpoints, hover states |
| **Gold Dark** | `#B88B05` | 184, 139, 5 | Pressed states, darker accent |
| **Foreground** | `#faf8f5` | 250, 248, 245 | Primary text on dark backgrounds |

### Secondary Colors

| Name | Hex | RGB | Usage |
|---|---|---|---|
| **Copper** | `#C2703E` | 194, 112, 62 | Secondary warm accent, tags |
| **Card Surface** | `#141210` | 20, 18, 16 | Card backgrounds (when not glass) |
| **Destructive** | `#E8734A` | 232, 115, 74 | Error states, stat highlights |

### Neutral Warm Scale

| Step | Hex | Usage |
|---|---|---|
| 50 | `#faf8f5` | Primary text |
| 100 | `#f0ece5` | Bright text |
| 200 | `#dfd8cb` | Emphasis text |
| 300 | `#c4b9a8` | Default body text |
| 400 | `#9a9590` | Muted text |
| 500 | `#6b6560` | Subdued text, scrollbar |
| 600 | `#524e4a` | Disabled text |
| 700 | `#3d3a37` | Subtle borders |
| 800 | `#1c1a17` | Elevated surfaces |
| 900 | `#0a0908` | Background |

### Gold Scale (Full)

| Step | Hex |
|---|---|
| 50 | `#FFFBEB` |
| 100 | `#FEF3C7` |
| 200 | `#FDE68A` |
| 300 | `#FCD34D` |
| 400 | `#FBBF24` |
| 500 / DEFAULT | `#D4A006` |
| 600 | `#B88B05` |
| 700 | `#92710A` |
| 800 | `#78600D` |
| 900 | `#634F12` |

### Borders & Overlays

| Token | Value | Usage |
|---|---|---|
| Border default | `rgba(255, 255, 255, 0.08)` | Card borders, dividers |
| Border hover | `rgba(255, 255, 255, 0.12)` | Hover state borders |
| Glass background | `rgba(255, 255, 255, 0.02–0.04)` | Glass card fills |
| Gold glow | `rgba(212, 160, 6, 0.06)` | Ambient glow orbs |
| Copper glow | `rgba(194, 112, 62, 0.10)` | Secondary glow orbs |

### Gradient
- **Gradient text:** `linear-gradient(135deg, #D4A006, #FACC15)` clipped to text
- **Button glow:** `shadow: 0 0 25px rgba(212,160,6,0.25), 0 0 60px rgba(212,160,6,0.08)`

---

## 5. Typography

### Display Font — Space Grotesk
- **Use:** All headings, titles, hero text, card titles, navigation brand name
- **Weight:** 700 (Bold) only
- **Tracking:** -0.04em (tight)
- **Line height:** 0.95 (very tight)
- **Source:** Google Fonts

### Body Font — Inter
- **Use:** All body text, descriptions, paragraphs, UI labels
- **Weights:** 300 (Light, default), 400, 500, 600
- **Tracking:** Default or +0.01em
- **Line height:** 1.8 (relaxed, airy)
- **Source:** Google Fonts

### Arabic Font — Cairo (planned)
- **Use:** Arabic translations, bilingual content
- **Source:** Google Fonts

### Type Scale

| Element | Font | Size | Weight | Tracking | Line Height |
|---|---|---|---|---|---|
| Hero title | Space Grotesk | 80px (5rem) | 700 | -0.04em | 0.95 |
| Section heading (h2) | Space Grotesk | 40px (2.5rem) | 700 | -0.04em | 0.95 |
| Card title (h3) | Space Grotesk | 22px (1.375rem) | 600–700 | -0.04em | 0.95 |
| Overline / label | Inter | 12px (0.75rem) | 600 | 0.25em | 1.5 |
| Body text | Inter | 15px (0.9375rem) | 300 | 0 | 1.8 |
| Small text | Inter | 13px (0.8125rem) | 300–400 | 0 | 1.8 |
| Tiny / caption | Inter | 11–12px | 400–600 | 0.08em | 1.5 |

---

## 6. Visual Style

### Theme
Dark, premium, warm-toned luxury aesthetic. The design draws inspiration from Linear.app and Modal.com — minimal, refined, with depth created through translucency and light rather than heavy borders or shadows.

### Glass Morphism (Cards)
All cards use a frosted glass treatment:
```
Background: rgba(255, 255, 255, 0.02)
Backdrop-filter: blur(24px)
Border: 1px solid rgba(255, 255, 255, 0.05)
Shadow: inset 0 0 0 1px rgba(255,255,255,0.02),
        0 4px 30px rgba(0,0,0,0.2)
Hover: bg increases to 0.04, border to 0.10
```

### Buttons
- **Primary (Gold):** Semi-transparent gold fill with backdrop blur, triple-layer glow shadow, inset top highlight
- **Secondary:** Transparent with white border, backdrop blur, inset highlight
- **All buttons:** Pill-shaped (fully rounded), scale to 0.97 on press (spring physics)

### Noise Texture
A fixed SVG fractal noise overlay covers the entire viewport at 40% opacity with `mix-blend-mode: overlay`. This adds analog warmth and photographic grain to the digital surface.

### Ambient Glow Orbs
Large radial gradients positioned across the page create depth and atmosphere:
- Gold glow (top center)
- Copper glow (left, mid-page)
- Amber glow (right, lower)
These are applied via `body::before` as fixed position backgrounds.

### Three.js Backgrounds
Animated 3D scenes sit behind content sections:
- **Wireframe terrain:** Undulating gold mesh mountains
- **Dashed lines:** Rotating network of gold/copper line segments
- **Spotlights:** Three moving spotlights sweeping across a dark sphere

Each scene is blended into the page with gradient fades on top and bottom edges.

### Border Radii
| Token | Value |
|---|---|
| sm | 6px |
| md | 10px |
| lg | 14px |
| xl | 20px |
| pill | 9999px |

### Spacing
- Container max-width: 1120px
- Section padding: 96px (py-24) to 144px (py-36)
- Card padding: 28–44px
- Grid gaps: 12px

---

## 7. Animation & Motion

### GSAP (Scroll-triggered)
- Section headers: fade-up, 0.8s, power3.out easing
- Card grids: staggered children at 0.1–0.15s intervals
- Service cards: directional slide-in (left, up, right)
- Hero: sequenced timeline (logo, title, subtitle, CTAs cascade)

### Framer Motion (Micro-interactions)
- **Button hover:** scale 1.04 + lift -2px (spring: stiffness 400, damping 17)
- **Button press:** scale 0.97
- **Card hover:** lift -6px (spring: stiffness 300, damping 20)
- **Status dots:** pulsing ring expanding outward + breathing dot
- **Nav links:** gold underline draws from left on hover
- **Mobile menu:** AnimatePresence fade with staggered links

### Easing
- Primary: `cubic-bezier(0.23, 1, 0.32, 1)` (ease-out-quint)
- Transitions: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out-quad)

---

## 8. Tone of Voice

### Personality
Professional but not corporate — think "smart friend who happens to be an expert."

### Guidelines
- **Confident** without being salesy
- **Arabic-friendly:** communications flow naturally in both English and Egyptian Arabic (Masri dialect)
- **Lead with the client's problem**, not your technology
- Never lead with "AI" — lead with outcomes ("save 4 hours/day", "never miss a lead")
- **Show, don't pitch** — demo over deck, always
- Explain complex concepts simply — assume zero technical background
- Be concise. Less is more. No rambling.

### Words We Use
- Automate, streamline, save, capture, recover, deliver, build, optimize
- Hours saved, leads captured, revenue recovered
- Working prototype, demo, results, ROI

### Words We Avoid
- "Disrupt", "synergy", "leverage", "paradigm"
- Overly technical AI jargon (LLM, neural network, fine-tuning) in client-facing content
- "Cheap" — use "fair pricing" or "local rates" instead

---

## 9. Taglines

| Tagline | Use Case |
|---|---|
| **"We automate what slows you down."** | Primary hero / headline |
| **"AI that works as hard as you do."** | Secondary / social media |
| **"Smarter operations. Real results."** | Subtitle / email signature |
| **"Your business, automated."** | Minimal / social bios |

---

## 10. Services

### Tier 1 — Quick Wins
Fast, affordable entry points that demonstrate value.

| Service | Delivery |
|---|---|
| WhatsApp AI Assistant (Arabic) | 7–10 days |
| Business Website | 5–7 days |
| Social Media Content Engine | 3–5 days |
| Process Audit + Quick Fix | 3–5 days |

### Tier 2 — Core Solutions
Deeper engagements with recurring value.

| Service | Delivery |
|---|---|
| Lead Generation System | 2–3 weeks |
| Operations Automation | 2–4 weeks |
| AI Customer Service Suite | 2–3 weeks |
| E-commerce Optimization | 2–3 weeks |

### Tier 3 — Premium
Full transformation partnerships.

| Service | Delivery |
|---|---|
| AI Strategy + Implementation | Ongoing |
| Custom Software / SaaS | Custom |

### Industry Focus (Priority Order)
1. E-commerce / D2C Brands
2. Real Estate
3. Medical Clinics & Healthcare
4. Hospitality & F&B
5. Professional Services

---

## 11. Team

| Name | Role | Alias | Specialty |
|---|---|---|---|
| **Omar** | AI Engineer | The Oracle | Full-stack dev, AI/ML, Claude Code |
| **Nabih** | E-commerce & Marketing | The Strategist | Digital marketing, e-commerce growth |
| **Youssef** | Operations & Audit | The Analyst | Process mapping, efficiency, audit |

---

## 12. Key Differentiators

1. **Arabic-first** — Everything built in Egyptian Arabic (Masri dialect)
2. **Demo before payment** — Working prototype with real data before spending a pound
3. **7–14 day delivery** — Not months, not quarters
4. **Local pricing** — Cairo-based, world-class quality at local rates
5. **Measurable ROI** — Clear metrics on every project
6. **Ongoing partnership** — We don't build and disappear

---

## 13. Do's and Don'ts

### Do
- Use dark backgrounds with warm gold accents
- Maintain generous whitespace between sections
- Use glass morphism for cards and UI elements
- Show real screenshots, dashboards, and bot demos
- Lead with business outcomes in all copy
- Use gradient text for emphasis on key phrases

### Don't
- Use stock AI brain/robot imagery
- Use emoji icons in professional materials
- Use inline styles in code
- Use generic purple-on-white gradients
- Write "cheap" — say "fair" or "competitive"
- Over-explain technology to clients

---

## 14. File Reference

| File | Purpose |
|---|---|
| `logo-gold.png` | Gold logo on transparent |
| `logo.jpeg` | Original logo |
| `hero-bg.jpg` | 4K gold mountain background (backup) |
| `tailwind.config.ts` | All color/spacing/font tokens |
| `globals.css` | Noise texture, glow orbs, glass utilities |
| `button.tsx` | Button component variants |
| `card.tsx` | Glass card component |
| `badge.tsx` | Badge/tag component |

---

**Sierra Tech Spaces — Cairo, Egypt**
**hello@sierratechspaces.com**
**sierratechspaces.com**

*This document is the single source of truth for all Sierra Tech Spaces brand decisions. Updated April 2026.*
