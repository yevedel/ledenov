# CLAUDE.md — Ledenov Personal Site (project brief)

This is the canonical brief. Read it before working on this project. For execution detail see `strategy-and-ia.md`; for competitor data see `RESEARCH.md`; raw inputs live in `inbox/`.

---

## What this is

A conversion website for **Yevhen "Yev" Ledenov**, a senior product designer (UX/UI, product design, design systems, brand, AI-assisted workflows), 10+ years. Purpose: a lead-generation channel that builds trust in Yev as a senior specialist and showcases case studies. It is a **persona site** ("Yev" the person), not a studio.

- **Primary conversion:** book a call via Calendly. **Secondary:** direct message (Telegram/WhatsApp). Never route the primary CTA to Upwork.
- **Markets:** US · Europe · Australia. **Language:** English.
- **Not** the same project as DesignPrep / `mypath` (interview-prep app). Same person, different product.

## Positioning

**One senior product-design partner — product, site, and brand — at founder speed.** (Working line; refine in copy, don't hardcode.)

Every section reinforces "one senior partner" over "I do many things." Breadth is framed as **one accountable partner instead of coordinating three vendors**, never as jack-of-all-trades.

**Chosen against, all at once:**
- vs **junior** — senior product judgment, not just execution.
- vs **agency** — no middlemen, direct line, faster.
- vs **DIY-AI** (v0/Lovable) — AI-accelerated but senior-directed, not generic.
- vs **early full-time hire** — senior output now, commit to a team later.

## Who the buyer is

Time-poor, runway-conscious **seed–Series B founder**. The real target is their *state*, not funding stage. Already burned once: by a cheap Upwork designer (pretty files, no product logic), by a slow expensive agency, or by generic DIY-AI tools. Too early for a full-time design hire, too serious to ship something half-baked.

**Emotional nerve (drives the tone):** "I'll pay for Figma files that never become a real product, and the process will eat my runway." Antidote = production-ready output that ships, senior judgment, a direct line.

## Voice

Sharp, diagnostic, problem-first. Short sentences. Confidence without bragging. Write about the **founder's problem and risk**, not Yev's features. No marketing fluff, no "I'm passionate about design," no feature-dumping. English. Copy rule: no decoratively-used em-dashes (use commas/parentheses); keep em-dashes only where genuinely needed.

## Services (group under the single-partner frame)

- Product UX/UI (dashboards, web apps, mobile incl. iOS and RTL/Arabic)
- Product + marketing sites (landing to multi-page, copywriting included)
- Design systems, prototyping, micro-animation (Figma Smart Animate, Lottie)
- AI-assisted design workflows (embeds Claude/Midjourney/v0/Cursor; builds custom tooling — design-audit pipelines, prompt generators — for client projects)
- Front-end-aware design (hands off work that drops cleanly into React/Next.js/Tailwind/Webflow)

Stack Yev works in: Figma, Webflow, React/Next.js/Tailwind, AI tooling. He is the bridge between design and dev.

## Proof hierarchy (use in this order)

1. **Upwork: ~$2M earned · 950+ contracts · Top Rated Plus · 10+ years** — primary hard proof (concrete, founder-language, semi-verifiable on profile).
2. **Dribbble 25.7K followers · Behance ~868K project views** — design-community credibility (real, public).
3. **Enterprise logos** (Google, Nestlé, P&G, AB InBev, WhatsApp) — SMALL trust strip, framed as "I've seen how the best operate and bring that rigor to your stage." Never the hero.
4. **Case studies** — few, deep, narrative (the ready ones; build as scalable structure for more).
5. **LinkedIn recommendations** — testimonials (pending Yev's export; LinkedIn is login-walled).

### ⚠️ Accuracy guardrails — DO NOT publish as fact (deep-research, 2026-06-16)
- **"18M+ views"** — unverified publicly (Dribbble shows 25.7K followers/16.3K likes; Behance ~868K views). Only use if backed by a first-party Dribbble-analytics screenshot; otherwise drop. Lead with the Upwork numbers instead.
- **"11 international design awards"** — no public listing found. Don't publish a number we can't name; name specific awards or omit.
- **SWPS Human-Centered Design degree** — none; **removed**.
- **Client credits** (Vuelo, Formulae Prescott, Clubforce, HostIQ.ai, Burai, Kinder Dispo, Confyde, Halyk Bank, Coursinity, Wrk, Scout Travel, Chladni, Huddl, GridSpace, Nader, Star Doctors, Pastry) — products are real, but no public source credits Yev (normal under NDA). Present as his own documented case studies (first-party), not as externally-verified facts.
- Full dossier: `inbox/research-dossier.md`.

## Locked decisions

- **Brand:** persona, not studio. Wordmark `ledenov.` (lowercase).
- **Legal entity:** **Ledo.digital OÜ** (Estonia, reg. 16774666, sole owner Yevhen Ledenov, founded Jul 2023) — exact registered name, footer only.
- **Domain:** canonical = surname-based (`ledenov.*`); `ledo.digital` and others 301 → canonical. Existing site: `yledenov.com`.
- **Base / location:** Zagreb, Croatia (for the contact/trust block).
- **Aesthetic:** restrained product minimalism (Linear / HostIQ lane), ONE direction sitewide. Accent orange `#ff3e02` on warm near-white `#fafafa` (tint `#ffefea`). Delphi-style motion: animated hero circle + subtle section reveals. Other styles (isometric, editorial) appear only inside case studies as range. Font: Passenger Sans (commercial — web license required before build).
- **Site type:** full multi-page (not a landing). Portfolio = scalable data structure (card with industry/type/year tags + detail page), not hardcoded.
- **Primary CTA:** Book a call (Calendly), visually dominant; secondary = DM. Single `Let's talk` trigger opens a dropdown panel exposing both.

## Information architecture (summary)

Homepage (14 sections): hero → logos → about → featured cases → video → industries → expertise/services → process → advantages (vs-alternatives) → testimonials → projects → FAQ → Calendly → footer. Plus a human-written SEO content block above the footer.

Sitemap: `/` · `/about` · `/work` + `/work/[case]` · `/solutions/[industry]` (9 verticals) · `/pricing` · `/reviews` · `/blog` + `/blog/[post]` · `/privacy` · `/cookies`.

Full section-by-section IA with SEO/conversion annotations: **`strategy-and-ia.md`**.

## SEO / GEO requirements (build-critical)

- **Content + nav in real HTML (SSR/SSG)** — JS-only is invisible to Google and LLMs. Top technical risk from the SEO consult.
- **schema.org:** `Person` (Yev) + `Organization` (Ledo.digital OÜ) + `FAQPage` + `BreadcrumbList` + per-case `CreativeWork`.
- **FAQ** with highest-intent Qs (price, scope, timeline, NDA) first; doubles as ad-landing reassurance + AI-overview fuel.
- **CTA/form after each decision block**, not only top + footer.
- **Industry pages:** screen 1 = offer + mini-form (NOT a logo background); remove decorative illustrations.
- **Blog** = GEO/SEO engine: human-written posts (NOT AI-generated — Google de-indexes) targeting low-frequency, early-decision-stage queries.
- **Off-site presence:** reviews across Clutch/G2/Trustpilot/Google Business Profile; profiles + mentions on Reddit/Quora/Contra (LLMs crawl these). ~50% of B2B buyers now start research in an AI chatbot (G2, 2025).
- **Long SEO content block** above footer (human-written, collapsible).
- Add **contacts + location + social links** to the footer (missing today).

## Tech stack (recommended, pending confirmation)

**Next.js (App Router) + Tailwind on Vercel** — SSR satisfies the HTML-not-JS requirement; Framer Motion covers Delphi-style motion; scales to blog + programmatic industry/case pages. Calendly embed for booking.

## Source documents

- `strategy-and-ia.md` — execution plan (positioning, proof, sitemap, homepage IA, industry template, conversion system, case-study structure, GEO/SEO reqs).
- `RESEARCH.md` — competitor + reference analysis (sites, hero/CTA/pricing patterns, case-study structures, screenshots in `research/screens/`).
- `inbox/brand-brief.md` — original client brand brief + resolved decisions.
- `inbox/research-dossier.md` — deep-research: verified vs unverified facts, profile inventory, GEO findings.
- `inbox/seo/seo-call-transcript.md` — SEO specialist consult (full transcript).
- Figma source: file `PS9FhSJAfngcPnS7aXJQop`, page node `1554:10414`.

## Status (2026-06-16)

Discovery done (design + SEO audit + brand brief). Decisions resolved (CTA, aesthetic, domain, proof hierarchy). Deep-research done. Strategy + IA written. Competitor research in progress (screenshots + RESEARCH.md). **Next: English copy section-by-section (hero + vs-alternatives first), then confirm stack and build.**
