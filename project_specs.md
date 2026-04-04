# Project Specs — Sierra Tech Spaces Landing Page

## What the app does
A single-page marketing website for Sierra Tech Spaces, an AI consulting agency in Cairo, Egypt. The site introduces the agency, showcases services, and drives visitors to take action (WhatsApp chat or contact form).

## Who uses it
- Egyptian SMB owners researching AI automation solutions
- Potential clients referred by the founders
- The founding team (for sharing in outreach)

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Backend:** None needed for v1 (static site, no Supabase yet)
- **Fonts:** Inter (English) + Cairo (Arabic) via Google Fonts

## Pages & Sections (Single Page)
This is a single-page site with smooth scroll navigation:

1. **Hero** — Tagline ("AI that works as hard as you do"), one-line description, WhatsApp CTA button, subtle background animation
2. **Problem/Solution** — "Egyptian businesses waste X hours on..." -> "We automate it"
3. **Services** — 3 tiers displayed as cards (Quick Wins, Core Solutions, Premium)
4. **How It Works** — 3-4 step process (Audit -> Demo -> Build -> Optimize)
5. **Why STS** — Key differentiators (Arabic-first, 7-14 day delivery, prototype before payment, local pricing)
6. **Industries** — Icons/cards for target verticals (E-commerce, Real Estate, Medical, Hospitality, Professional Services)
7. **About / Team** — Brief founder intros (Omar, Nabih, Youssef)
8. **Contact / CTA** — WhatsApp button (primary), contact form (secondary), social links
9. **Footer** — Logo, links, "Sierra Tech Spaces - Cairo, Egypt"

## Design Requirements
- Dark theme using brand colors (Deep Navy #0B1426 base)
- Teal #06B6D4 as primary accent
- Premium feel — subtle animations (fade-in on scroll, hover states)
- Mobile-first responsive design
- Arabic/English toggle (v2 — English-only for v1)
- No stock AI imagery — use abstract geometric patterns or real screenshots
- Clean sans-serif typography (Inter)

## Data Models
None for v1. Static content only.

## Third-Party Services
- WhatsApp Business link (wa.me/ deep link for CTA)
- Google Fonts (Inter, Cairo)
- Vercel (hosting)

## What "done" looks like
- [ ] Site runs on localhost:3000 with no errors
- [ ] All 9 sections render correctly on desktop and mobile
- [ ] WhatsApp CTA links work
- [ ] Dark theme with brand colors applied throughout
- [ ] Smooth scroll navigation between sections
- [ ] Subtle scroll animations (fade-in)
- [ ] Responsive on mobile, tablet, desktop
- [ ] `npm run build` passes with no errors
- [ ] Logo/brand mark displayed in header and footer
