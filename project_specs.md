# Project Specs - Sierra Tech Spaces + Atta Group Lead Generator

## Current task - Remove bottom numbers and update booking WhatsApp number

### What the app does for this task
The public Sierra Tech Spaces website should remove visible number-heavy content from the bottom contact/footer area and update booking links to use the new WhatsApp number `+201555454377`.

### Who uses it
- Public visitors to `sierratechspaces.com`.
- Egyptian SMB prospects who want to contact STS through WhatsApp.
- STS founders sharing the website with prospects.

### Tech stack for this task
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Database/Auth:** Not used for this public-page change.

### Pages and user flows for this task
- Public user opens `/` or `https://sierratechspaces.com`.
- User clicks the hero booking button or contact WhatsApp button.
- WhatsApp opens a chat to `+201555454377`.
- The bottom contact/footer area no longer shows the old public phone numbers.
- The bottom contact stats row with numeric labels is removed.
- The rest of the homepage remains unchanged.

### Data models and storage for this task
- No data model changes.
- No database changes.
- No Supabase changes.

### Third-party services for this task
- **WhatsApp deep link:** `https://wa.me/201555454377`.
- **Vercel:** used for deployment after build and verification.

### What done looks like for this task
- [ ] `project_specs.md` is approved before code changes.
- [ ] Hero booking WhatsApp link uses `201555454377`.
- [ ] Contact WhatsApp link uses `201555454377`.
- [ ] Old booking/contact WhatsApp number `201214444253` is removed from public STS components.
- [ ] Old visible bottom phone numbers are removed from contact/footer.
- [ ] Bottom numeric stats row is removed from contact.
- [ ] No unrelated Atta page behavior is changed.
- [ ] `npm run build` passes.
- [ ] The homepage is checked locally or by HTTP verification.
- [ ] The verified update is deployed to Vercel for `sierratechspaces.com`.

### Out of scope for this task
- Changing Atta Group contact details.
- Changing dashboard/login behavior.
- Rewriting homepage copy outside the contact/booking number cleanup.
- Deleting image assets or unused files.

## Current task - Remove STS founders section and improve phone hero

### What the app does for this task
The public Sierra Tech Spaces homepage should no longer show the founders/team section. Visitors should move from the problem/services content into the remaining public sections without seeing founder profile cards, founder names, founder photos, or "Team" messaging.

The homepage hero should also be adjusted on phone screens only. Desktop and tablet hero behavior should stay the same. On phones, the first screen should feel cleaner, better framed, and easier to read, with the main STS message and consultation CTA visible without awkward spacing or text overlap.

### Who uses it
- Public visitors to `sierratechspaces.com`.
- Egyptian SMB prospects reviewing STS services.
- STS founders sharing a cleaner public site that focuses on business outcomes instead of personal profiles.

### Tech stack for this task
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Database/Auth:** Not used for this public-page change.

### Pages and user flows for this task
- Public user opens `/` or `https://sierratechspaces.com`.
- The homepage loads normally.
- The founders/team profile section is not shown.
- On phone-sized screens, the hero is adjusted so the intro text, rotating text, CTA, and trust line are positioned cleanly and legibly.
- Desktop hero layout and animation remain unchanged.
- The rest of the homepage sections still render in order and keep the existing design.
- Header navigation should not send users to a removed team section.

### Data models and storage for this task
- No data model changes.
- No database changes.
- No Supabase changes.

### Third-party services for this task
- **Vercel:** used for deployment after build and local verification.

### What done looks like for this task
- [ ] `project_specs.md` is approved before code changes.
- [ ] The public homepage no longer renders the `Team` / founders section.
- [ ] No founder profile cards, founder photos, or founder names appear on the public homepage.
- [ ] Header/navigation does not point to a removed team section.
- [ ] Phone-only hero styling is updated for cleaner mobile layout.
- [ ] Desktop hero remains unchanged.
- [ ] Mobile hero text and CTA do not overlap and fit inside the screen.
- [ ] The rest of the homepage still renders correctly.
- [ ] No secrets are hardcoded.
- [ ] `npm run build` passes.
- [ ] The homepage is checked locally.
- [ ] The verified update is deployed to Vercel for `sierratechspaces.com`.

### Out of scope for this task
- Deleting founder/team image files from `public`.
- Deleting the `Team.tsx` component file unless explicitly requested.
- Changing Atta pages.
- Changing login/dashboard code.
- Rewriting homepage copy outside the removed founders section.
- Rebuilding the desktop hero animation.

## Current task - Deploy STS website without login option

### What the app does for this task
The public Sierra Tech Spaces website should be deployed at `sierratechspaces.com` as a marketing site for Egyptian SMB clients. Public visitors should be able to learn what STS does, review services, understand the team, and contact the business. The public website should not show a login option.

### Who uses it
- Egyptian SMB owners and operators researching AI automation help.
- Prospects coming from referrals, ads, WhatsApp, LinkedIn, or direct domain visits.
- STS founders sharing the public website with potential clients.

### Tech stack for this task
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Domain:** `sierratechspaces.com`
- **Auth:** Existing login/dashboard code may remain for internal use, but it should not be promoted from the public STS website navigation.
- **Database:** None needed for this public deployment task.

### Pages and user flows for this task
- Public user visits `https://sierratechspaces.com`.
- User sees the STS public homepage.
- Header navigation lets the user move around public sections of the site.
- Header navigation does not show a Login button or public login prompt.
- Mobile navigation also does not show a Login button or public login prompt.
- Internal `/login` and `/dashboard` routes are not redesigned as part of this task unless required to prevent public navigation from exposing them.
- Search engines can crawl the public homepage, while internal dashboard/login routes stay hidden from public navigation and remain disallowed where already configured.

### Data models and storage for this task
- No new data models.
- No Supabase changes.
- No database or storage changes.

### Third-party services for this task
- **Vercel:** used to build and deploy the Next.js app.
- **Domain/DNS provider:** `sierratechspaces.com` must point to the Vercel project. If the domain is not already connected, DNS records must be configured in the domain provider.

### What done looks like for this task
- [ ] `project_specs.md` is approved before code changes.
- [ ] Public STS desktop navigation no longer shows Login.
- [ ] Public STS mobile navigation no longer shows Login.
- [ ] Public homepage still works and keeps its existing STS design.
- [ ] Existing internal auth/dashboard code is not broken by the public navigation change.
- [ ] No secrets are hardcoded.
- [ ] `npm run build` passes.
- [ ] Dev server runs and the public homepage is checked locally.
- [ ] The latest verified build is deployed to Vercel.
- [ ] `sierratechspaces.com` is connected to the deployed Vercel project, or clear DNS steps are provided if domain access is needed.

### Out of scope for this task
- Rebuilding the whole STS website.
- Deleting the internal login/dashboard system.
- Adding Supabase auth.
- Changing Atta pages.
- Changing PDFs, decks, or lead generator features.
- Buying the domain or logging into a domain registrar without user-provided access.

## What the app does
The app has two working areas:

1. **Public STS / Atta website pages**
   - STS marketing pages introduce Sierra Tech Spaces.
   - The Atta Group pages present Atta's industrial products, services, project proof, catalogs, and contact routes.

2. **Internal Atta AI Lead Sales Generator + Sales CRM**
   - A founder-only dashboard tool that finds, scores, filters, and prepares sales outreach for Egyptian factories and industrial companies that may buy Atta Group products or services.
   - The tool is built for sales research before calls, WhatsApp messages, email outreach, and client meetings.
   - It also includes a lightweight CRM-style pipeline inspired by Dominate A.I.: lead management, deal stages, follow-up tasks, account notes, and relationship tracking for high-ticket B2B sales.

## Who uses it
- STS founders and Atta Group sales users.
- Primary user: someone preparing a list of real Egyptian industrial prospects to contact.
- End buyer profiles:
  - Factory owners and plant managers
  - Procurement teams
  - Maintenance managers
  - Electrical engineers
  - Contractors and EPC companies
  - Industrial-zone operators

## Atta products to sell
The lead generator must match prospects to these Atta offers:

- DATSAN transformers
- Distribution transformers
- CSP and isolation transformers
- Electrical panels and electrical materials
- Overhead transmission-line materials
- Nitrogen generators
- Oxygen generators
- Gas compressors
- Civil works
- Mechanical and electrical contracting
- Facility maintenance and site support

## Tech stack
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Auth:** Existing founder login/session routes for internal access
- **Database for this task:** Local TypeScript/JSON seed data first, so the demo works without Supabase setup
- **Future database:** Supabase Postgres with RLS when the tool becomes a real shared CRM
- **Optional enrichment worker:** Python script in `scripts/`, using Scrapling when installed
- **Export format:** CSV generated in the browser or by an API route

## Pages and user flows

### Public
- `/` - Sierra Tech Spaces public site.
- `/atta` - Atta Group public site.
- `/atta/projects/[slug]` - Atta Group project detail pages.

### Authenticated
- `/login` - Founder login.
- `/dashboard` - Internal product dashboard.
- `/dashboard/atta-leads` - New Atta lead generator.

### Lead generator flow
1. User opens `/dashboard/atta-leads`.
2. User chooses a product focus:
   - Transformers
   - Electrical panels
   - Oxygen / nitrogen generators
   - Gas compressors
   - Civil / M&E contracting
   - Facility maintenance
3. User filters by:
   - Governorate
   - Industrial zone
   - Industry
   - Company size signal
   - Contact availability
   - Lead score
4. System shows ranked leads with:
   - Company name
   - Location
   - Industry
   - Suggested Atta product
   - Fit score out of 100
   - Why this lead is relevant
   - Contact data
   - Source note
   - Suggested first message
   - Next action
5. User can:
   - Search leads
   - Sort by score, location, industry, or confidence
   - Save high-priority view locally for the session
   - Copy outreach message
   - Export selected leads to CSV

### CRM companion flow
1. User reviews a scored lead.
2. User adds the lead to the sales pipeline.
3. The lead appears in a pipeline board with stages:
   - New target
   - Qualified
   - Contacted
   - Meeting planned
   - Quotation needed
   - Won
   - Lost
4. User can update the stage locally, add a next follow-up date, and view the recommended next action.
5. User can see account notes, product interest, expected value band, and relationship status.

## Data model

### Lead
- `id`
- `companyName`
- `industry`
- `segment`
- `governorate`
- `city`
- `industrialZone`
- `address`
- `website`
- `phone`
- `email`
- `linkedin`
- `sourceName`
- `sourceUrl`
- `sourceType`
- `productsToPitch`
- `fitScore`
- `scoreBreakdown`
- `confidence`
- `whyGoodFit`
- `painSignals`
- `suggestedPitch`
- `nextAction`
- `lastVerified`

### Pipeline deal
- `leadId`
- `stage`
- `expectedValue`
- `probability`
- `owner`
- `relationshipStatus`
- `lastTouch`
- `nextFollowUp`
- `notes`
- `tasks`

### Sales task
- `id`
- `leadId`
- `title`
- `dueDate`
- `priority`
- `channel`
- `status`

### Product match
- `productId`
- `productName`
- `buyerSignals`
- `bestIndustries`
- `locationSignals`
- `pitchAngle`

### Score breakdown
- `industryFit`
- `productFit`
- `locationFit`
- `contactability`
- `companySignal`
- `sourceConfidence`

## Lead scoring logic
The first version uses a clear scoring system instead of vague AI output:

- **Industry fit:** Does the company operate in a sector that uses heavy power, compressed gas, industrial utilities, or site contracting?
- **Product fit:** Is there a clear reason to pitch a specific Atta product?
- **Location fit:** Is the company in an Egyptian industrial zone or energy-heavy area?
- **Contactability:** Does the lead have a phone, email, website, or LinkedIn?
- **Company signal:** Does the company appear to be a factory, plant, EPC, contractor, or industrial buyer instead of a tiny shop?
- **Source confidence:** Is the data from a source that looks stable and reviewable?

## Data sources
For the demo, the app should include a strong local seed dataset of Egyptian industrial leads. Each lead should include a source note so the user can verify it.

Allowed source types:
- Public company websites
- Public industrial directory pages
- Public LinkedIn company pages when manually referenced
- Public government or industrial-zone pages
- Existing user-provided spreadsheets or research files

Optional enrichment:
- A Python script in `scripts/` can use Scrapling to fetch public pages and extract company names, contact details, and page text.
- Scrapling is suitable because it supports normal fetching, dynamic fetching, spiders, export, adaptive selectors, and optional robots.txt compliance.
- The scraper must respect public-source limits and avoid private data, login-only pages, or scraping platforms in ways that break their rules.

## Third-party services
- **Required for first version:** None.
- **Optional for enrichment:** Scrapling Python package.
- **Optional future AI:** OpenAI API for smarter pitch writing only if an API key is added later. The first version must work without it.
- **Reference only:** Dominate A.I. is used as product inspiration for lead management, deal pipelines, follow-up scheduling, account tracking, and task management. The app should not copy its code or require its Node/Mongo/Docker stack.

## Design requirements
- Premium dark industrial sales-console interface.
- Atta-focused visual language: black, steel, electric blue, amber, white.
- Dense but readable dashboard, not a marketing landing page.
- No emoji icons.
- No inline styles.
- Use lucide icons where useful.
- Mobile responsive, but desktop is the priority because sales research is table-heavy.
- Include clear empty states and error states.

## What done looks like for this task
- [ ] `project_specs.md` is approved before code changes.
- [ ] `/dashboard/atta-leads` exists and is protected by the existing login flow.
- [ ] The page shows a high-quality ranked lead list for Egyptian factories and industrial buyers.
- [ ] Filters, search, sorting, score breakdown, and product focus all work.
- [ ] Each lead explains why it is a good fit for Atta.
- [ ] Each lead includes a suggested first outreach message.
- [ ] User can copy an outreach message.
- [ ] User can export filtered leads to CSV.
- [ ] A CRM-style pipeline board exists on the same page or a companion tab.
- [ ] User can add a lead to the local pipeline.
- [ ] User can move a lead between sales stages.
- [ ] User can see follow-up tasks and account notes for pipeline leads.
- [ ] No secrets are hardcoded.
- [ ] `npm run build` passes.
- [ ] Dev server runs and the page is manually checked in the browser.

## Current task - Atta dedicated blog index and article pages

### What the app does for this task
The public Atta website must replace the current Catalogs navigation item with a Blogs navigation item that opens a real blog index page. The blog index must list 10 Atta blog posts, and each post must open on its own dedicated URL with a deeper bilingual article, SEO metadata, FAQ/Q&A content, and structured data for search engines and AI answer engines. The articles must focus on the actual product/technical systems themselves, not broad generic "technology is important" messaging.

### Current requested refinement - make every blog article richer
The existing 10 dedicated Atta blog articles must be expanded into much richer long-form reads. Each article should feel like a serious buyer education page, not a short overview. The expansion should add more technical explanation, practical buyer guidance, decision checklists, failure modes, site examples, and AI-answer-friendly Q&A while preserving the existing URLs, bilingual behavior, metadata, schema, and sitemap coverage.

### Who uses it
- Public Atta Group visitors, especially Arabic-speaking customers in Egypt.
- Factory owners, procurement teams, maintenance managers, engineers, EPC contractors, and industrial buyers researching Atta products.
- Atta Group staff sharing educational product content with customers.

### Tech stack for this task
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content storage:** Local TypeScript blog data in a shared `src/lib` file
- **Assets:** Existing image files inside `public/atta`
- **Database/Auth:** Not used for this public-page fix
- **Hosting:** Vercel

### Pages and user flows for this task
- Public user opens `/atta`.
- Public user switches the page to Arabic.
- The header navigation shows Blogs instead of Catalogs.
- Clicking Blogs opens `/atta/blogs`.
- `/atta/blogs` shows a premium dark blog index with all posts, categories, product focus, reading time, Arabic/English support, and links to full posts.
- Clicking a blog card opens `/atta/blogs/[slug]`.
- Each `/atta/blogs/[slug]` page shows a full long-form article focused on Atta products, Egyptian industrial buyers, and the actual technical systems being discussed.
- The first 10 articles cover:
  - Why reliable transformers and DATSAN transformer selection matter for modern factories.
  - Why electrical panels and industrial power infrastructure are crucial for uptime and safety.
  - Why oxygen generators, nitrogen generators, and gas compressors matter for modern industrial operations.
  - How Egyptian factories can plan electrical expansion before adding new production lines.
  - How preventive maintenance reduces downtime in factories, utilities, and oil and gas sites.
  - How overhead transmission-line materials support industrial and infrastructure projects.
  - How civil, mechanical, and electrical contracting work together on industrial sites.
  - How oil and gas operators evaluate site-support contractors and technical supply partners.
  - How GuardX AI monitors ESP/pump failure signals and supports earlier field maintenance decisions.
  - How Nexus-N Micro-Reactor Power uses a heat-pipe micro-reactor concept for compact long-duration baseload energy.
- Each full article should be a meaningfully longer read than a card preview, with at least 5 technical sections, product-specific buyer guidance, Q&A/FAQ blocks, and a clear contact CTA.
- Each full article should now be expanded beyond the current version into a richer long-form article with about 8-10 technical sections per language where appropriate.
- Each article should include more practical detail: how the system works, what can go wrong, what buyers should check before requesting a quote, what site conditions matter, what documents/specs to prepare, and how the product connects to uptime, safety, reliability, or maintenance.
- Each article should remain readable by using short paragraphs and clear H2-style section headings rather than one giant wall of text.
- Each article should keep an answer-first style so Google, AI Overviews, ChatGPT browsing, and Perplexity can quote short useful passages.
- Each article should include 5-6 FAQ/Q&A items where useful, with direct answers to buyer questions and AI-answer-engine questions.
- Reading-time labels should be updated to match the richer articles.
- The 7 recently added short posts must be expanded into real articles rather than short summaries.
- GuardX and Nexus-N must each get a dedicated article page and card in the blog index.
- Each article includes English and Arabic copy, with Arabic written naturally for Egyptian industrial buyers instead of a literal machine-style translation.
- English content targets B2B search intent around Egypt, Egyptian factories, industrial procurement, uptime, power reliability, maintenance, and Atta product categories.
- Arabic content targets Arabic/Masri search intent around مصر, المصانع في مصر, محولات DATSAN, محولات كهرباء, لوحات كهربائية, مولدات أكسجين, مولدات نيتروجين, ضواغط غاز, الصيانة الصناعية, توقف الإنتاج, والسلامة.
- The blog index and article pages connect Atta products to concrete technical mechanisms: ratings, load planning, protection, failure signals, operating conditions, maintenance windows, gas purity/pressure, line hardware, heat-pipe micro-reactor architecture, and site execution requirements.

### Data models and storage for this task
- No database changes.
- Blog content is stored locally in code as a list of article objects.
- Each blog article object includes `slug`, bilingual `title`, bilingual `description`, bilingual `category`, bilingual `productFocus`, bilingual `summary`, bilingual `readingTime`, `image`, bilingual keyword lists, bilingual article sections, bilingual FAQs, and SEO metadata.
- Each article page uses the same data source for visible content, metadata, JSON-LD `BlogPosting`, and FAQ schema.
- Richer article content is still stored in the same local TypeScript blog data file, not in a new CMS or database.
- Existing article slugs should not change, because those URLs are already live and included in the sitemap.
- No third-party CMS is used for this task.

### Third-party services for this task
- None.

### What done looks like for this task
- [ ] Header nav says Blogs instead of Catalogs.
- [ ] Blogs nav item opens `/atta/blogs`.
- [ ] The old Catalogs header item is removed from desktop and mobile navigation.
- [ ] `/atta/blogs` exists and shows all 10 Atta blog posts in a premium dark index layout.
- [ ] `/atta/blogs/[slug]` exists for each of the 10 articles.
- [ ] Each article page has a full long-form article, not only a preview card.
- [ ] Each full article has richer long-form content, targeting about 8-10 technical sections where appropriate.
- [ ] Each section adds real product/system explanation rather than repeating marketing phrases.
- [ ] Each article includes practical buyer guidance, such as specs to prepare, site conditions to check, maintenance questions, failure risks, or commissioning considerations.
- [ ] Each article keeps paragraphs short enough to read comfortably on mobile.
- [ ] Each article has expanded FAQ/Q&A content for AI-answer visibility.
- [ ] The 7 short added articles are expanded and no longer read like summaries.
- [ ] GuardX AI has a dedicated article focused on ESP/pump monitoring, signal visibility, abnormal-pattern detection, and earlier maintenance decisions.
- [ ] Nexus-N has a dedicated article focused on heat-pipe micro-reactor architecture, compact baseload power, long-duration operation, and critical-site energy planning.
- [ ] Each article includes Q&A/FAQ questions that answer likely buyer and AI-answer-engine questions.
- [ ] FAQ answers are concise, direct, and useful enough to be quoted by AI search results.
- [ ] Blog content focuses on Atta products and why modern industrial technology is crucial today.
- [ ] Blog titles, descriptions, headings, and summaries are written for search intent, not generic marketing copy.
- [ ] Each article includes Egypt-focused terms naturally, including Egyptian factories, Egypt industrial buyers, or product supply in Egypt.
- [ ] Arabic mode shows fully translated blog index and article pages, including headings, paragraphs, FAQs, product focus, and reading time.
- [ ] Arabic text reads naturally, uses correct right-to-left layout, and avoids broken encoding.
- [ ] English and Arabic blog content include relevant search phrases without keyword stuffing.
- [ ] Blog index and article pages use semantic headings and readable text that search engines can crawl.
- [ ] Article pages include JSON-LD `BlogPosting` and FAQ structured data.
- [ ] Existing SEO components are preserved: metadata, bilingual keywords, Open Graph data, `BlogPosting` schema, `FAQPage` schema, canonical URLs, Arabic alternates, and sitemap URLs.
- [ ] Sitemap includes `/atta/blogs` and every `/atta/blogs/[slug]` URL for all 10 articles.
- [ ] No unrelated public-page or dashboard behavior is changed.
- [ ] `npm run build` passes.
- [ ] Dev server runs and `/atta`, `/atta/blogs`, `/atta/blogs/[slug]`, and Arabic versions are checked in the browser.
- [ ] The verified update is deployed to `atta-group.net`.

## Blog topics for this task
- **DATSAN Transformers for Egyptian Factories:** how the right transformer choice protects uptime, expansion plans, and electrical reliability.
- **Electrical Panels and Industrial Power Safety:** why modern panels, protection, and organized distribution matter for factories, utilities, and contractors.
- **Industrial Gas Systems:** why oxygen generators, nitrogen generators, and gas compressors are becoming critical infrastructure for modern operations.
- **Electrical Expansion Planning:** how factories in Egypt should prepare transformers, panels, and distribution before adding production lines.
- **Preventive Maintenance for Industrial Sites:** how maintenance planning reduces downtime and protects industrial assets.
- **Overhead Transmission-Line Materials:** why line materials, hardware, and site coordination matter for power infrastructure.
- **Civil + Mechanical + Electrical Contracting:** why industrial sites need coordinated execution across disciplines.
- **Oil and Gas Site Support:** how operators evaluate contractors, maintenance partners, and technical supply readiness.
- **GuardX AI for ESP and Pump Monitoring:** how signal visibility and abnormal-pattern detection can help field teams move from reactive shutdowns to earlier maintenance decisions.
- **Nexus-N Micro-Reactor Power:** how heat-pipe micro-reactor architecture can support compact, long-duration baseload energy for critical and remote industrial sites.

## Out of scope for this task
- Full Supabase CRM storage.
- Paid lead-data APIs.
- Automatic emailing or WhatsApp sending.
- Scraping private, login-only, or personal data.
- Replacing the public Atta website.
- Adding a CMS.
- Paid external content APIs.

## Current task - Atta favicon consistency for Google and blog pages

### What the app does for this task
The public Atta website must use the same correct Atta favicon on the main Atta page and all Atta blog pages. The current issue is that the correct favicon appears when opening the main website, but the browser/search result can fall back to a default/basic favicon, especially on the blog routes.

### Who uses it
- Public visitors opening `atta-group.net`.
- Visitors opening `/atta/blogs` and `/atta/blogs/[slug]`.
- Google Search crawlers reading the site's favicon for search results.
- Atta staff checking the brand appearance in browser tabs and Google results.

### Tech stack for this task
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Not relevant for this task
- **Assets:** Existing Atta logo/favicon assets under `public/atta`, plus root-level favicon files if needed
- **Hosting:** Vercel
- **Database/Auth:** Not used

### Pages and user flows for this task
- Public user opens `https://atta-group.net/atta`.
- Public user opens `https://atta-group.net/atta/blogs`.
- Public user opens `https://atta-group.net/atta/blogs/[slug]`.
- All these pages expose the same Atta favicon metadata.
- The site exposes a stable root favicon URL that Google can crawl, such as `/favicon.ico` and/or `/icon.png`.
- The blog index and article metadata do not accidentally omit or override the Atta favicon.

### Data models and storage for this task
- No database changes.
- Favicon image files live in `public`.
- Metadata is defined through Next.js metadata exports.

### Third-party services for this task
- Google Search is the external crawler/display surface, but there is no API integration needed.
- Google may take time to refresh the favicon in search results after deployment and recrawl.

### What done looks like for this task
- [ ] Root-level favicon files exist and point to the correct Atta brand icon.
- [ ] `/atta` metadata includes the correct Atta favicon.
- [ ] `/atta/blogs` metadata includes the same correct Atta favicon.
- [ ] `/atta/blogs/[slug]` metadata includes the same correct Atta favicon for every article.
- [ ] Favicon URLs are square, crawlable, stable, and at least suitable for Google's favicon requirements.
- [ ] The browser tab shows the Atta favicon on `/atta`, `/atta/blogs`, and article pages.
- [ ] `npm run build` passes.
- [ ] Dev server runs and the favicon metadata is checked locally.
- [ ] The verified update is deployed to `atta-group.net`.

### Out of scope for this task
- Redesigning the Atta logo.
- Changing blog content.
- Changing unrelated STS pages.
- Forcing Google to update instantly; Google recrawl timing is outside the app's direct control.

## Current task - Atta lead generator login entry and deployment

### What the app does for this task
The public Atta website at `atta-group.net` must expose a clear login entry in the top-right header so authorized Atta/ST‌S users can open the existing internal Atta AI Lead Sales Generator. The lead generator itself remains protected behind the existing login/session system.

### Who uses it
- Public Atta visitors still use the site normally.
- Atta Group sales users and STS founders use the new header login entry to access the internal dashboard.
- Unauthorized visitors may see the login button, but they cannot access `/dashboard` or `/dashboard/atta-leads` without valid credentials.

### Tech stack for this task
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Auth:** Existing custom login route using `FOUNDER_CREDENTIALS` and `AUTH_SESSION_SECRET`
- **Database:** No database changes
- **Lead data:** Existing local TypeScript seed data plus `public/atta-generated-leads.json`
- **Hosting:** Vercel deployment for `atta-group.net`

### Pages and user flows for this task
- Public user opens `https://atta-group.net/atta`.
- The top-right desktop header shows one phone number plus a Login button instead of two phone-number buttons.
- The Login button links to `/login`.
- After login, the user can reach `/dashboard` and open `/dashboard/atta-leads`.
- The Atta blog header may also show a compact Login link if it fits without hurting the mobile layout.
- Mobile navigation includes a Login option so phone users can still reach the dashboard.
- Existing public phone/contact paths remain available elsewhere on the page.

### Data models and storage for this task
- No new data models.
- No Supabase changes.
- Credentials remain stored in environment variables, not in code.
- The lead generator continues to load leads from `src/lib/atta-leads.ts` and `public/atta-generated-leads.json`.

### Third-party services for this task
- **Vercel:** used to deploy the verified change to `atta-group.net`.
- No Stripe, Supabase, CRM, email, WhatsApp sending, or paid lead-data service is added in this task.

### What done looks like for this task
- [ ] `project_specs.md` is approved before code changes.
- [ ] The Atta homepage header replaces one top-right phone-number button with a Login button.
- [ ] The Login button is visually consistent with the premium dark Atta header.
- [ ] The mobile Atta menu includes a Login option.
- [ ] `/login` still works with the existing environment-based credentials.
- [ ] `/dashboard/atta-leads` remains protected from users without a valid session.
- [ ] The lead generator can be opened after a successful login.
- [ ] No credentials are hardcoded into the app source.
- [ ] `npm run build` passes.
- [ ] Dev server runs and `/atta`, `/login`, `/dashboard`, and `/dashboard/atta-leads` are checked locally.
- [ ] The verified update is deployed to `atta-group.net`.

### Out of scope for this task
- Changing the lead generator features or lead data.
- Adding Supabase auth.
- Creating new user-management screens.
- Publishing passwords inside source code or committing `.env.local`.

## Current task - Manual lead entry inside Atta lead generator

### What the app does for this task
The internal Atta AI Lead Sales Generator must let an authenticated user add their own lead manually from inside `/dashboard/atta-leads`. The manually added lead should appear with the other visible leads, work with the same filters/search/sorting/export behavior, and be available to add into the CRM pipeline cycle like any seeded or generated lead.

### Who uses it
- Atta Group sales users who find a prospect from calls, referrals, exhibitions, WhatsApp, LinkedIn, or offline research.
- STS/Atta operators who want to add a company that is not already in the generated lead list.
- The user adding the lead should be able to classify why the company matters for Atta products before adding it to the pipeline.

### Tech stack for this task
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Auth:** Existing custom login route using `FOUNDER_CREDENTIALS` and `AUTH_SESSION_SECRET`
- **Database:** No Supabase/database change for this task
- **Manual lead storage:** Browser `localStorage` for the first version, so manual leads survive refreshes on the same browser without adding a backend table
- **Future storage:** Supabase Postgres with RLS if manual leads need to be shared across users/devices later
- **Hosting:** Vercel deployment for `atta-group.net`

### Pages and user flows for this task
- Authenticated user opens `/dashboard/atta-leads`.
- User clicks an **Add Lead** button near the lead controls.
- A dark industrial modal or side panel opens with a structured form.
- User enters the specific lead information needed to make the lead fit naturally with the existing lead cards:
  - Company name
  - Industry
  - Segment
  - Governorate
  - City
  - Industrial zone
  - Address
  - Website
  - Phone
  - Email
  - LinkedIn
  - Source name
  - Source URL
  - Source type
  - Atta products to pitch
  - Fit score
  - Score breakdown fields
  - Confidence
  - Why this lead is a good fit
  - Pain signals
  - Suggested pitch
  - Next action
  - Expected value
  - Last verified date
- User saves the manual lead.
- The new lead appears in the same lead list as the other leads.
- The new lead works with existing product focus filters, governorate filters, industrial-zone filters, industry filters, contact filters, search, score filter, and sorting.
- The new lead can be copied/exported with the same CSV export behavior.
- The new lead can be added to the pipeline board using the existing add-to-pipeline flow.
- The new lead stays available after refresh in the same browser.

### Data models and storage for this task
- No new server table.
- Manual leads use the existing `AttaLead` shape.
- Manual leads receive a generated local ID such as `manual-[timestamp]`.
- Manual leads use `sourceType` values already accepted by the app where possible.
- Manual leads are stored in `localStorage` under a clear key such as `atta-manual-leads`.
- Pipeline behavior continues to use the existing local state approach.

### Third-party services for this task
- None.
- No paid lead API, email sender, WhatsApp sender, Supabase table, or CRM integration is added in this task.

### What done looks like for this task
- [ ] `project_specs.md` is approved before code changes.
- [ ] `/dashboard/atta-leads` has a visible **Add Lead** button.
- [ ] Clicking **Add Lead** opens a polished dark modal or side panel form.
- [ ] The form captures the specific lead fields needed to match existing leads.
- [ ] Required fields are clearly marked and invalid saves show a clear error.
- [ ] User can select one or more Atta products to pitch.
- [ ] User can enter fit score and score breakdown values.
- [ ] Saving creates a manual lead that appears in the ranked lead list.
- [ ] Manual leads work with search, filters, sorting, CSV export, and copy outreach.
- [ ] Manual leads can be added to the CRM pipeline cycle.
- [ ] Manual leads persist after page refresh in the same browser.
- [ ] No secrets are hardcoded.
- [ ] `npm run build` passes.
- [ ] Dev server runs and the manual add-lead flow is checked locally.
- [ ] The verified update is deployed to `atta-group.net`.

### Out of scope for this task
- Shared team database storage across devices.
- Editing or deleting manual leads after creation.
- Importing leads from Excel/CSV.
- Automatic enrichment or scoring from AI.
- Sending WhatsApp/email messages automatically.

## Current task - Upgraded Atta company profile PDF

### What the PDF does for this task
The existing `mohamed-atta-company-profile.pdf` must be upgraded into a modern sales-ready Atta Group company profile that reflects the rebuilt Atta website. The new PDF should keep the company profile purpose, but present the stronger current positioning from the website: DATSAN transformers first, electrical panels and industrial supply, civil/mechanical/electrical contracting, facility maintenance, project proof, client/partner credibility, bilingual market positioning, and clear contact routes.

### Who uses it
- Atta Group sales users sending a profile to industrial buyers, procurement teams, EPC contractors, oil and gas operators, utilities, and factory owners.
- STS founders supporting Atta with business development and presentation material.
- Public prospects who want a polished offline document after viewing `atta-group.net`.

### Source material for this task
- Existing source PDF: `C:\Users\Youssef Gebaly\Downloads\mohamed-atta-company-profile.pdf`
- Current website content in `src/app/atta/page.tsx`
- Current Atta service and project data in `src/lib/atta-data.ts`
- Current Atta metadata and business contact details in `src/lib/atta-metadata.ts`
- Current Atta blog/product positioning in `src/lib/atta-blog-data.ts`
- Existing Atta visual assets under `public/atta`

### Output
- Final upgraded PDF saved under `output/pdf/`
- Intermediate render checks saved under `tmp/pdfs/`
- The original downloaded PDF must not be overwritten.

### Content requirements
- Modern English-first company profile with selective Arabic support where useful.
- Stronger opening positioning around Atta Group as an industrial supply and contracting partner in Egypt.
- Dedicated coverage for:
  - DATSAN transformers
  - Distribution, CSP, and isolation transformers
  - Electrical panels and electrical materials
  - Oxygen generators, nitrogen generators, and gas compressors
  - Civil works
  - Mechanical and electrical contracting
  - Facility maintenance and site support
  - Overhead transmission-line materials
  - GuardX AI monitoring concept
  - Nexus-N micro-reactor power concept
- Include the seven website project proof points from the current Atta data.
- Include current contact details:
  - `info@atta-group.net`
  - `01214444253`
  - `01159900749`
  - First Mall, First District, South 90th Street, Fifth Settlement, 2nd Floor
  - LinkedIn company page

### Design requirements
- Premium dark industrial design matching the current Atta website.
- Use existing Atta images and logo assets where possible.
- Avoid generic AI/robot visuals.
- No emoji icons.
- No inline website/app code changes.
- Keep page layouts readable, with clean spacing, strong hierarchy, and no clipped text.

### Third-party services
- None.

### What done looks like for this task
- [ ] `project_specs.md` is approved before generation work starts.
- [ ] The existing PDF is reviewed for baseline content.
- [ ] Current website content and assets are reviewed.
- [ ] A new upgraded PDF is generated under `output/pdf/`.
- [ ] The PDF is rendered to PNG pages for visual QA.
- [ ] The render check confirms no clipped text, overlapping elements, unreadable glyphs, or broken images.
- [ ] The final answer gives the exact saved PDF path and any remaining limitations.

### Out of scope for this task
- Editing the public website.
- Rewriting Atta website code.
- Replacing the downloaded original PDF.
- Adding Supabase, Vercel, or any external service.

## Current task - Atta sales pitch and customer offerings PDFs

### What the PDFs do for this task
Create two new Atta Group sales documents based on the upgraded company profile and current Atta website positioning:

1. **Internal sales engineer PDF in Egyptian Arabic**
   - A practical sales pitch guide for the person selling Atta offers.
   - Written in Egyptian Arabic / Masri style, not formal Arabic.
   - Helps the sales engineer explain Atta's offers clearly in calls, meetings, WhatsApp follow-ups, and site visits.

2. **Customer-facing offerings PDF in English**
   - A polished PDF that can be sent directly to customers.
   - Written in clear professional English.
   - Explains Atta's offers, who they are for, what buyers should prepare, and how to contact Atta.

### Who uses them
- **Sales engineer PDF:** Atta sales engineers, STS founders, and internal business-development users.
- **Customer offerings PDF:** factory owners, procurement teams, maintenance managers, EPC contractors, oil and gas operators, utility buyers, and industrial decision-makers.

### Source material for this task
- Upgraded company profile PDF generated under `output/pdf/`
- Current website content in `src/app/atta/page.tsx`
- Current Atta service and project data in `src/lib/atta-data.ts`
- Current Atta metadata and business contact details in `src/lib/atta-metadata.ts`
- Current blog/product positioning in `src/lib/atta-blog-data.ts`
- Existing Atta visual assets under `public/atta`

### Output
- `output/pdf/atta-sales-engineer-pitch-ar.pdf`
- `output/pdf/atta-customer-offerings-en.pdf`
- Intermediate render checks under `tmp/pdfs/`
- Existing PDFs must not be overwritten except when regenerating these two named outputs.

### Sales engineer PDF content requirements
- Egyptian Arabic tone: direct, practical, confident, and easy to say out loud.
- Include a short positioning pitch for Atta.
- Include product-by-product talk tracks for:
  - DATSAN transformers
  - Distribution, CSP, and isolation transformers
  - Electrical panels and electrical materials
  - Oxygen generators
  - Nitrogen generators
  - Gas compressors
  - Civil works
  - Mechanical and electrical contracting
  - Facility maintenance and site support
  - Overhead transmission-line materials
  - GuardX AI monitoring concept
  - Nexus-N micro-reactor power concept
- Include discovery questions the sales engineer should ask customers.
- Include objection handling in Egyptian Arabic.
- Include WhatsApp follow-up message templates.
- Include meeting flow: opening, qualification, offer framing, next step.
- Include quote-preparation checklist.
- Include what not to say, especially around future concepts like Nexus-N.

### Customer offerings PDF content requirements
- Professional English tone, suitable to send to customers.
- Explain Atta Group as an industrial supply and contracting partner.
- Present the offers clearly, without sounding like an internal script.
- Include product/service sections for the same offer list above.
- Include buyer checklists for quote requests.
- Include project proof and partner/client credibility where useful.
- Include clear contact details:
  - `info@atta-group.net`
  - `01214444253`
  - `01159900749`
  - First Mall, First District, South 90th Street, Fifth Settlement, 2nd Floor
  - `atta-group.net`
  - LinkedIn company page

### Design requirements
- Premium dark industrial design matching the upgraded profile and Atta website.
- Sales engineer PDF may be denser and more practical.
- Customer PDF should be cleaner, more polished, and easier to send externally.
- Use existing Atta visuals and logo assets where possible.
- No emoji icons.
- No generic AI/robot visuals.
- No inline styling in generated source.
- Rendered pages must be readable, aligned, and free of clipped text.

### Third-party services
- None.

### What done looks like for this task
- [ ] `project_specs.md` is approved before generation work starts.
- [ ] Existing Atta source content and assets are reviewed.
- [ ] Arabic sales engineer PDF is generated under `output/pdf/`.
- [ ] English customer offerings PDF is generated under `output/pdf/`.
- [ ] Both PDFs are rendered to PNG pages for visual QA.
- [ ] Arabic PDF renders right-to-left correctly with readable Egyptian Arabic.
- [ ] English customer PDF is polished enough to send externally.
- [ ] Render checks confirm no clipped text, overlapping elements, unreadable glyphs, or broken images.
- [ ] Final answer gives exact saved paths and any limitations.

### Out of scope for this task
- Editing the public website.
- Adding a CRM, Supabase table, or external sales tool.
- Sending the PDFs to customers automatically.
- Creating pricing tables unless pricing is explicitly provided.
- Making legal or regulatory promises for Nexus-N beyond careful feasibility-level positioning.

## Current task - STS investor business plan presentation

### What the presentation does for this task
Create a polished investor-ready PowerPoint presentation for Sierra Tech Spaces. The deck must explain STS as a real AI consulting business for Egyptian SMBs, covering the problem, service model, go-to-market plan, sales process, revenue model, financial assumptions, timeline, risks, and why investors should believe the business can move quickly.

### Who uses it
- STS founders presenting the business to investors.
- Investors who need a clear view of what STS sells, how customers are acquired, how revenue is generated, and how the company can scale.
- Future sales or agency partners who need to understand the customer acquisition machine.

### Source material for this task
- User direction from the current request:
  - STS will work with a social media agency to run ads.
  - STS will hire a dedicated sales person whose job is to call leads and secure meetings.
  - STS will start with a free audit of each prospect's daily workflows.
  - After the audit, STS will recommend the most appropriate service, based on what saves time or saves money.
  - STS will implement only what is needed to modernize the business and improve processes.
  - The deck should include ERP as one of the service categories.
  - The plan should move quickly and avoid becoming too long.
- Existing STS brand and business context from `AGENTS.md` and `BRAND_FOUNDATIONS.md`.
- Existing customer offer and sales script from `CUSTOMER_OFFER_AND_SCRIPT.md`.
- Reference PDF: `C:\Users\Youssef Gebaly\Downloads\AI-Driven Acquisition & Value creation v.1.pdf`.

### Reference PDF elements to adapt
- AI is now a measurable value creation lever, not an experimental idea.
- Priority targets have high labor intensity, standardized workflows, margin pressure, low digital maturity, and manual exception handling.
- AI impact should be measured through time saved, cost reduced, response speed, lead capture, and margin improvement.
- Use a phased roadmap: foundation, scale, transform.
- Keep a risk framework around over-automation, poor data readiness, team resistance, and integration complexity.
- Avoid copying the PDF as-is; adapt the thinking to STS, Egyptian SMBs, and practical consulting services.

### Output
- Final deck saved under `output/pptx/`.
- Preferred filename: `STS_Investor_Business_Plan.pptx`.
- Optional PDF export for easy sharing if local conversion tools work: `output/pptx/STS_Investor_Business_Plan.pdf`.
- Intermediate render checks saved under `tmp/pptx/`.

### Deck structure
Target length: 12-14 slides.

1. Title - Sierra Tech Spaces business plan.
2. The market problem - Egyptian SMBs lose time, leads, and margin through manual work.
3. Investment thesis - AI as practical value creation for operators, adapted from the reference PDF.
4. Target customers - e-commerce, real estate, clinics, hospitality, professional services, and operations-heavy SMBs.
5. STS operating model - free audit, workflow mapping, focused demo, paid implementation, retainer.
6. Services - WhatsApp AI, lead generation, customer service, operations automation, ERP/workflow systems, websites, content engines, dashboards, custom software.
7. Go-to-market engine - social media agency runs ads, sales person qualifies and calls, founders close meetings with demos.
8. Sales funnel and unit economics - leads, calls, meetings, audits, proposals, closed projects, retainers.
9. Pricing and revenue streams - setup fees, retainers, audits/quick wins, ERP/custom builds, performance bonuses where appropriate.
10. 90-day execution timeline - fast launch, proof, repeatable sales motion, first case studies, agency optimization.
11. 12-month financial view - conservative revenue scenarios, monthly burn, sales/ads assumptions, break-even logic.
12. Delivery and team - Omar, Nabih, Youssef roles plus sales hire and agency partner.
13. Risks and controls - over-automation, weak data, client resistance, scope creep, poor ad quality, sales execution.
14. Investor ask / use of funds - what funding supports, expected milestones, next decision.

### Financial assumptions to include
- Use EGP as the main currency.
- Keep numbers clearly labeled as planning assumptions, not guaranteed results.
- Starting operating budget should recognize the existing low-cost stack from STS planning, plus new ad spend and sales hire.
- Include three revenue categories:
  - Quick wins: EGP 5K-30K.
  - Core systems: EGP 20K-75K setup plus EGP 5K-15K monthly retainer.
  - Premium / ERP / custom systems: EGP 75K-150K+ setup plus larger retainers where relevant.
- Include a simple funnel model with example assumptions for ad leads, qualified calls, meetings, audits, closed projects, average setup fee, and average retainer.
- Include a conservative, base, and upside 12-month scenario.

### Design requirements
- Premium dark STS design using Deep Navy, Teal Accent, Dark Slate, Sea Green, Amber, Coral, and clean white text.
- Use STS logo assets where possible.
- Use charts, timelines, process diagrams, service cards, and financial tables.
- No stock AI brains or robot images.
- No emoji icons.
- No generic gradients.
- Keep text short, investor-readable, and visually polished.
- Make the deck feel like a real business plan, not a long school report.

### Third-party services
- Social media agency for ad execution.
- Vercel/website stack for STS web presence.
- WhatsApp Business API where needed for demos and client systems.
- HubSpot, Google Sheets, or simple CRM tooling for early sales tracking.
- Supabase may be used for future client systems, but is not required to create this deck.

### What done looks like for this task
- [ ] `project_specs.md` is approved before presentation generation starts.
- [ ] Reference PDF content is reviewed and adapted into STS-specific ideas.
- [ ] Existing STS brand and sales materials are reviewed.
- [ ] A 12-14 slide investor business plan deck is created under `output/pptx/`.
- [ ] The deck includes services, go-to-market plan, sales process, financials, timeline, risk controls, and investor ask.
- [ ] ERP/workflow systems are included as a service category.
- [ ] Financials are shown as clear assumptions and scenarios, not promises.
- [ ] The presentation is visually checked by rendering slides to images or PDF.
- [ ] A final QA pass confirms no clipped text, overlapping elements, unreadable text, or broken images.

### Out of scope for this task
- Editing the STS website.
- Creating a full legal investment memorandum.
- Guaranteeing exact revenue, valuation, or fundraising outcomes.
- Building a CRM, ad campaign, or ERP product during this task.
- Sending the deck to investors automatically.
