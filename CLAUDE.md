# Sierra Tech Spaces (STS) — Project Instructions

## Business Context

**Sierra Tech Spaces** is an AI consulting agency founded by Omar, Nabih, and Youssef in Cairo, Egypt. Launching mid-April 2026.

- **Mission:** "We help Egyptian businesses work smarter by replacing their most tedious, time-consuming processes with AI."
- **Tagline:** "AI that works as hard as you do."
- **Target Market:** Egyptian SMBs — e-commerce, real estate, medical clinics, hospitality, professional services
- **First Pilot Client:** Sprynter (e-commerce)
- **Budget:** ~$600 USD upfront, ~$34-46/mo operating

### Founders
- **Omar** — AI engineer ("Oracle"), full-stack dev, Claude Code power user
- **Nabih** — E-commerce/marketing specialist
- **Youssef** — Audit/operations professional

### Core Values
- Results over hype — sell hours saved, leads captured, revenue recovered
- Show, don't tell — prototype first, demo before payment
- Win-win or no deal — reputation over contracts
- Speak their language — Arabic-first (Masri dialect), business outcomes not jargon

### Brand Identity
- **Tone:** Professional but not corporate — "smart friend who happens to be an expert"
- **Visual:** Modern, clean, minimal. Dark theme. No stock AI brains/robots.
- **Colors:**
  - Deep Navy: #0B1426 (primary bg, headings)
  - Teal Accent: #06B6D4 (CTAs, links, highlights)
  - Dark Slate: #1E293B (body text, secondary bg)
  - Medium Gray: #64748B (muted text)
  - Sea Green: #10B981 (success states)
  - Coral: #F47260 (errors, urgent)
  - Amber: #F59E0B (warnings, attention)
- **Typography:** Inter (English), Cairo (Arabic) — clean sans-serif
- **No:** emoji icons, inline styles, generic gradients, stock robot images

### Services (3 Tiers)
- **Tier 1 — Quick Wins:** WhatsApp AI Assistant, Business Websites, Social Media Content Engine, Process Audit (EGP 5-30K)
- **Tier 2 — Core Solutions:** Lead Gen System, Operations Automation, AI Customer Service Suite, E-commerce Optimization (EGP 20-75K setup + retainer)
- **Tier 3 — Premium:** Full AI Strategy + Implementation, Custom Software/SaaS (EGP 75-150K+)

### Key Differentiators
- 3-5x cheaper than US/EU agencies
- Arabic-first (Masri dialect)
- Working prototypes in 7-14 days
- Entry projects at EGP 5-15K to build trust
- Measurable automations with clear ROI

### Competitive Positioning
"For Egyptian business owners drowning in repetitive work, Sierra Tech Spaces builds AI-powered automations that save real hours and capture real revenue — delivered in days, not months, at prices that make sense for the Egyptian market."

---

## Project Overview

Build a lightweight web application. Each feature does one thing, the code is easy to follow, and the app is easy to run locally and deploy.

---

## Design

You are a senior UI designer and frontend developer. Build premium, dark-themed interfaces. Use subtle animations, proper spacing, and visual hierarchy. No emoji icons. No inline styles. No generic gradients.

---

## Development Rules

**Rule 1: Always read first**
Before taking any action, always read:
- `CLAUDE.md`
- `project_specs.md`

If either file doesn't exist, create it before doing anything else.

**Rule 2: Define before you build**
Before writing any code:
1. Create or update `project_specs.md` and define:
   - What the app does and who uses it
   - Tech stack (framework, database, auth, hosting)
   - Pages and user flows (public vs authenticated)
   - Data models and where data is stored
   - Third-party services being used (Stripe, Supabase, etc.)
   - What "done" looks like for this task
2. Show the file
3. Wait for approval

No code should be written before this file is approved.

**Rule 3: Look before you create**
Always look at existing files before creating new ones. Don't start building until you understand what's being asked. If anything is unclear, ask before starting.

**Rule 4: Test before you respond**
After making any code changes, run the relevant tests or start the dev server to check for errors before responding. Never say "done" if the code is untested.

**Core Rule**
Do exactly what is asked. Nothing more, nothing less. If something is unclear, ask before starting.

---

## How to Respond

Always explain like you're talking to a 15 year old with no coding background.

For every response, include:
- **What I just did** — plain English, no jargon
- **What you need to do** — step by step, assume they've never seen this before
- **Why** — one sentence explaining what it does or why it matters
- **Next step** — one clear action
- **Errors** — if something went wrong, explain it simply and say exactly how to fix it

When a task involves external tools or technical elements that a non-coder wouldn't know (Supabase, Vercel, Stripe, localhost:3000, etc.):
- Walk through exactly where to find what they need
- Describe what each key or setting does in one plain sentence
- If there's SQL to run, explain what it's doing before they run it
- Be as concise as possible. Do not ramble. Less is more

---

## Tech Stack

- **Language:** TypeScript
- **Framework:** Next.js 14 (App Router)
- **Backend-as-a-Service:** Supabase (Auth, Postgres, Storage, RLS)
- **Deployment:** Vercel
- **Styling:** Tailwind CSS
- **Key libraries:** `@supabase/supabase-js`, `@supabase/ssr`

---

## Running the Project

1. Ensure `.env.local` has all necessary keys
2. Install dependencies: `npm install`
3. Run: `npm run dev`
4. Open your browser at `http://localhost:3000`

---

## File Structure

- `/app` — All the pages your users actually see
- `/app/api/` — Behind-the-scenes code that handles data
- `/components/` — Reusable building blocks (buttons, cards, forms)
- `/lib/` — Shared helper code used throughout the app
- `/lib/supabase/` — Code that connects the app to Supabase
- `/supabase/` — Database table setup instructions
- `/public/` — Images and other static files
- `.env.local` — Secret keys (never share or commit)
- `project_specs.md` — Blueprint Claude reads before doing anything

**Code organisation rules:**
- Keep API routes thin — call a service or lib function
- One component per file; co-locate page-specific components with the page
- Supabase server client (SSR) for server components and API routes; browser client only in client components
- Don't create new top-level folders without asking first

---

## How the App Is Built

1. A user visits a page or clicks a button — that's the **input**
2. A route or server action receives the request and calls the right service
3. The service does **one job** and returns a result
4. The route sends the result back to the user — that's the **output**
5. If something fails, show a clear error — don't silently break

---

## How to Write Code

- Write simple, readable code — clarity matters more than cleverness
- Make one change at a time
- Don't change code that isn't related to the current task
- Don't over-engineer — build exactly what's needed, nothing more
- Add a `console.log` at the start and end of each API route

If a big structural change is needed, explain why before making it.

---

## Supabase Rules

- Always use RLS — never disable it
- Server-side Supabase client for all sensitive operations
- Signed URLs for all video/file access — never make storage buckets public
- Never expose the `service_role` key in client-side code

---

## Secrets & Safety

- Never put API keys or passwords directly in the code
- Never commit `.env.local` to GitHub
- Never expose Supabase `service_role` key in frontend code
- Ask before deleting or renaming any important files

---

## Testing

Before marking any task as done:
- Run `npm run build` and fix any TypeScript or build errors
- Start the dev server with `npm run dev` and check for runtime errors
- Manually verify the feature works end-to-end in the browser
- Check that existing features weren't broken

Never say "done" if:
- The build is failing
- There are console errors
- The feature hasn't been tested in the browser

---

## Scope

Only build what is described in `project_specs.md`. If anything is unclear, ask before starting.
