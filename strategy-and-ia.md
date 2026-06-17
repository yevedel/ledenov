# Ledenov — Site Strategy & Information Architecture

> The authoritative plan: brand brief × SEO consult × deep-research, mapped onto the existing Figma.
> Inputs: `inbox/brand-brief.md`, `inbox/seo/seo-call-transcript.md`, `inbox/research-dossier.md`, Figma `PS9FhSJAfngcPnS7aXJQop`.
> Status: draft for Yev's review. Copy is the next phase (this doc defines intent + structure, not final wording).

---

## 1. Positioning (locked)

**One senior product-design partner — product, site, and brand — at founder speed.**

- **Buyer:** time-poor, runway-conscious seed–Series B founder, already burned by a cheap Upwork designer / a slow agency / generic DIY-AI (v0, Lovable).
- **Chosen against, all at once:** junior (no product judgment) · agency (middlemen, slow, expensive) · DIY-AI (generic) · early full-time hire (premature commitment).
- **Emotional nerve:** "I'll pay for Figma files that never ship and the process eats my runway." Antidote = production-ready output, senior judgment, direct line.
- **Breadth = single ownership**, never "I do many things." One accountable partner instead of three vendors.
- **Voice:** sharp, diagnostic, problem-first. Short sentences. Confidence without bragging. Write about the founder's risk, not Yev's features. No fluff, no "passionate about design," no feature-dumps. English. Minimal decorative em-dashes.

## 2. Proof hierarchy (use in this order)

1. **Upwork: ~$2M earned · 950+ contracts · Top Rated Plus · 10+ years.** Primary hard proof — concrete, founder-language, semi-verifiable.
2. **Dribbble 25.7K followers · Behance ~868K project views** — design-community credibility (real, public).
3. **Enterprise logos** (Google, Nestlé, P&G, AB InBev, WhatsApp) — SMALL trust strip; frame as "I've seen how the best operate and bring that rigor to your stage," never the hero.
4. **Case studies** — few, deep, narrative (the ready ones; structure for more).
5. **LinkedIn recommendations** — testimonials (pending Yev's export).
- **Do not publish:** "18M views" (unless backed by a Dribbble-analytics screenshot), "11 awards" (until named), SWPS degree (removed).

## 3. Sitemap

```
/                     Homepage
/about                About (persona, story, rigor)
/work                 Portfolio index (filterable: industry, type, year)
/work/[case]          Case-study detail (scalable template)
/solutions/[industry] Industry landing pages (AI, Web3, Fintech, Healthcare,
                        Edtech, Ecommerce, Real Estate, Gambling, B2B)
/pricing              Pricing / packages
/reviews              Reviews (aggregated, with platform logos)
/blog                 Blog index (News) — GEO/SEO engine
/blog/[post]          Article
/privacy  /cookies    Legal
Footer (global)       Contacts, location (Zagreb), socials, Ledo.digital OÜ
```

CTA system is global (see §6). Calendly connected to the primary CTA.

## 4. Homepage IA — section-by-section (his 14 sections, annotated)

Legend: **KEEP** / **CHANGE** / **ADD** · ⚙️ = SEO/GEO fix · 🎯 = conversion mechanic

1. **Hero** — KEEP. Animated orange circle (Delphi-style). Headline = problem-first ("clarity to complexity" direction is good). Subhead names the segments (SaaS/AI/fintech/healthcare/edu). 🎯 Primary CTA `Let's talk` (opens panel). ⚙️ H1 in real HTML text, not an image.
2. **Logos** — KEEP, small. Enterprise + client logos as a quiet trust strip, not the hero (per brief).
3. **About (short)** — KEEP. One-paragraph diagnostic intro: the founder's risk + why one senior partner solves it. Link to `/about`.
4. **Featured cases** — KEEP. 2–4 deep, narrative cases (not a thumbnail wall — research-backed). Each → `/work/[case]`. 🎯 CTA after this block.
5. **Video** — KEEP. Short reel/offer video (the "review offer" you described). Lazy-load; keep LCP clean.
6. **Industries ("Where I work")** — CHANGE. ⚙️ Kill the decorative illustrations (research + your own read: they distract, add no meaning). Replace with clean tiles → each `/solutions/[industry]`. These tiles are the on-ramp to the industry pages used for outreach/ads.
7. **Expertise / Services** — CHANGE. Simplify. Group under the single-partner frame: Product UX/UI · Sites + copy · Design systems & motion · AI-assisted workflows · front-end-aware handoff. Each = the founder's problem it solves, not a feature list.
8. **Process ("How it works")** — KEEP. The wavy timeline is strong. Reframe steps as risk-reduction (clarity, speed, ships). 🎯 CTA after.
9. **Advantages ("Why me")** — KEEP, sharpen. This is the **vs junior / agency / DIY-AI / early hire** block. Diagnostic comparison, founder-language.
10. **Testimonials** — CHANGE. Per your idea + research: tie each testimonial to a result/stat and a platform logo (Upwork/Clutch/Google) so it reads as real, not decorative. `Show more` → `/reviews`.
11. **Projects** — KEEP. Broader grid/carousel of additional work (lighter than featured cases). Animated where it earns it.
12. **FAQ** — CHANGE. ⚙️ Add **schema.org FAQPage** markup. Put the highest-intent Qs first (price, scope, timeline, how we start, NDA). Doubles as ad-landing reassurance + AI-overview fuel. Keep it tight; full set can live on a dedicated page only if it grows.
13. **Calendly** — KEEP. Inline booking. 🎯 Two-step: pick slot → contact details (name, email, short description) → send request. Mirror the global panel.
14. **Footer** — CHANGE. ⚙️ Add what's missing today: **contacts (Telegram/WhatsApp), location (Zagreb, Croatia), social links** (LinkedIn, Behance, Dribbble, Upwork, Instagram, Contra), and **Ledo.digital OÜ** (legal, footer only). Big closing `Let's talk`.
- **ADD ⚙️ — SEO content block above footer:** a longer, human-written (NOT AI-generated) keyword-relevant section, collapsible in a spoiler. Feeds Google new keywords without cluttering the design. Per SEO consult.

## 5. Industry landing page template (`/solutions/[industry]`)

Built once, reused for all 9. Per SEO consult + research:
1. ⚙️ **Screen 1 = offer + minimal form** (not a logo-background). Names the industry, the founder's problem, a specific offer (e.g. free 30-min UX audit). 🎯 form here for warm/retargeted traffic.
2. **Why this industry, specifically** — short, no water. Proof relevant to the vertical.
3. **N cases in this niche** — concrete count + the actual cases.
4. **Process + FAQ** (industry-flavored). 🎯 CTA/form after the decision block.
5. ⚙️ Real HTML copy (ad + organic landing), FAQPage schema, internal links to relevant cases.

## 6. Conversion system (global)

- Single **`Let's talk`** trigger (sticky nav + section CTAs + footer) opens a **dropdown panel**, not a full modal — user can keep browsing.
- Panel offers two paths: **① Book a call** (Calendly, visually dominant) · **② Send a message** (Telegram/WhatsApp + short form: name, email, description → "I reply fast"). Set the response-time expectation.
- ⚙️ Never route the primary CTA to Upwork (keeps the senior direct-partner frame).
- Place a CTA/form **after each decision block** (cases, process, advantages), not only top + footer.

## 7. Case-study page (`/work/[case]`)

Scalable data structure (card + detail), not hardcoded. Card tags: industry, type, year. Built so a skeptical founder's doubts fall away and they can book directly from the case. 🎯 CTA mid + end.

**Detail template (modeled on the Balakin/Everscale reference — see RESEARCH.md §6b):**
1. **Result-first headline** with the number in it (e.g. "Onboarding 212,000 users into blockchain via gamification") + one-line "what it is" subhead.
2. **Metrics row** immediately under the hero (3–5 quantified outcomes).
3. **Metadata block:** Role · Company · Scope.
4. **"About the product"** — short context.
5. **Several self-contained Problem → Solution → Result mini-stories**, each with its own metric (not one long arc). Each section = a proof unit: decision + number. Before/after imagery where possible.
6. **Wrap-up** with honest insights/learnings (transparency reads as senior).
7. Visuals interleaved after each section (product shots, heatmaps, flows, device mockups on dark).
- Where Yev lacks hard metrics on a project, lead with the qualitative decision + shipped outcome; don't fabricate numbers.

## 8. GEO / SEO build requirements (hand to dev)

- ⚙️ **Content + nav in real HTML**, not JS-only — Google and LLMs can't read JS-rendered text (the #1 technical risk from the consult). SSR/SSG.
- ⚙️ **schema.org:** `Person` (Yev) + `Organization` (Ledo.digital OÜ) + `FAQPage` + `BreadcrumbList` + per-case `CreativeWork`.
- ⚙️ Clean technical baseline before launch (crawl with Screaming Frog/Netpeak; fix before indexing).
- ⚙️ **Blog** = the GEO/SEO engine: human-written posts targeting low-frequency, early-stage-of-decision queries ("how to choose a product designer", etc.). Personalized SERP lifts return visitors.
- ⚙️ **Off-site presence** (drives both trust and LLM recommendation): reviews spread across Clutch / G2 / Trustpilot / Google Business Profile; profiles + mentions on Reddit / Quora / Contra (LLMs crawl these). ~50% of B2B buyers now start in an AI chatbot (G2, 2025).
- ⚙️ Canonical domain = surname-based (ledenov.*); ledo.digital + others 301 → canonical.

## 9. Open / next
- **Copy phase:** section-by-section English copy in the locked voice (next deliverable).
- Yev to provide: LinkedIn recommendations (testimonials), named awards (if we keep an awards line), final Upwork stat phrasing, decision on the "18M views" screenshot.
- Decide tech stack for build (Next.js + Tailwind recommended — SSR for the HTML/SEO requirement, fits Framer Motion for Delphi-style motion).
- Font licensing: Passenger Sans web license.
