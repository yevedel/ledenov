# Sitemap & Conversion Funnel — Ledenov site

> All pages + the action funnel a lead moves through. Companion to `strategy-and-ia.md` (IA detail) and `CLAUDE.md` (brief).
> Macro-conversion = **Book a call** (Calendly). Secondary = **DM** (Telegram/WhatsApp). Micro = free UX audit, send brief, view case.

---

## 1. Full sitemap

```
/                                  Homepage — full pitch, all 14 sections
│
├── /about                         Persona, story, senior rigor, "why one partner"
│
├── /work                          Portfolio index — filterable (industry · type · year)
│   └── /work/[case]               Case-study detail (result-first template, §7 strategy)
│        e.g. /work/vuelo, /work/hostiq, /work/huddl, /work/nader …
│
├── /solutions                     (optional hub listing all verticals)
│   ├── /solutions/ai
│   ├── /solutions/web3
│   ├── /solutions/fintech
│   ├── /solutions/healthcare
│   ├── /solutions/edtech
│   ├── /solutions/ecommerce
│   ├── /solutions/real-estate
│   ├── /solutions/gambling
│   └── /solutions/b2b             Industry landing pages — offer + form first (ads/outreach targets)
│
├── /pricing                       Packages / engagement models
│
├── /reviews                       Aggregated reviews + platform logos (Upwork/Clutch/Google)
│
├── /blog                          Blog index — GEO/SEO engine
│   └── /blog/[post]               Article (low-frequency, early-decision queries)
│
├── /privacy                       Legal
├── /cookies                       Legal
└── /thank-you                     Post-booking confirmation (sets reply expectation)

Global (every page):
  • Top nav: About · Work · Solutions · Pricing · Blog  +  [ Let's talk ]
  • Sticky "Let's talk" trigger → dropdown panel (Book a call / Send a message)
  • Footer: contacts (Telegram/WhatsApp) · location (Zagreb) · socials
            (LinkedIn, Behance, Dribbble, Upwork, Instagram, Contra) · Ledo.digital OÜ
  • Above footer: human-written SEO content block (collapsible)
```

## 2. The "Let's talk" panel (the conversion hub)

One trigger, three exits — user keeps browsing (dropdown, not full modal):

```
[ Let's talk ▾ ]
   ├── ① Book a call      → Calendly  (PRIMARY, visually dominant)
   │       step 1: pick a slot
   │       step 2: name · email · short description → Send request → /thank-you
   ├── ② Send a message   → Telegram / WhatsApp  (secondary, low-friction)
   └── ③ Send a brief     → short form (name · email · what you need) → "I reply fast"
```
Never routes to Upwork. Reply-time expectation stated ("I reply within X hours").

## 3. Conversion funnel — what the lead does

```
        ENTRY  ─────────────────────────────────────────────────────────►  CONVERSION
┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌──────────────┐  ┌──────────────┐
│ 1. LAND       │  │ 2. QUALIFY    │  │ 3. TRUST      │  │ 4. DE-RISK   │  │ 5. CONVERT   │
│ arrives       │→ │ "is this for  │→ │ "is he good / │→ │ "is this     │→ │ books / messages │
│               │  │  me?"         │  │  real?"       │  │  safe?"      │  │              │
└───────────────┘  └───────────────┘  └───────────────┘  └──────────────┘  └──────────────┘
 hero eyebrow +     hero problem        Upwork $2M/950,     process, vs-       Let's talk panel:
 first paint        headline,           logos, featured     alternatives,      Book a call (macro)
                    subhead w/ outcome  cases, testimonials  FAQ, free audit    · DM · send brief
```

**Lead actions by stage (and the CTA that catches them):**

| Stage | Lead's question | What answers it | Action available |
|---|---|---|---|
| 1. Land | — | Fast load, clean senior look | scroll |
| 2. Qualify | "Is this for me?" | Eyebrow (`PRODUCT DESIGN FOR FOUNDERS`) + problem headline | scroll / `Let's talk` |
| 3. Trust | "Is he good and real?" | Upwork ~$2M/950+, logos (small), featured cases, testimonials w/ numbers | **View case** (micro) |
| 4. De-risk | "Will this waste my runway?" | Process, Advantages (vs junior/agency/AI/hire), FAQ (price/scope/timeline), **free 30-min UX audit** | **Get free audit** / **Send brief** (micro) |
| 5. Convert | "Let's talk" | `Let's talk` panel | **Book a call** (macro) · **DM** (secondary) |
| 6. Post | "What now?" | `/thank-you` + reply-time promise | awaits reply |

**Conversion principle (from RESEARCH.md):** a CTA after every decision block, not only top + footer. So stages 3–5 each end with a contextual CTA ("Want results like this?" after a case; "Book a call →" after Advantages; form after Process).

## 4. Entry-point flows (traffic → page → action)

```
A. NAME SEARCH (highest intent — from Upwork/Freelance Hunt)
   Google "Yev Ledenov"  →  /  (homepage)  →  Book a call / DM in footer
   (lead already convinced, wants the direct line — keep contact easy & visible)

B. PAID / OUTREACH (warm, vertical-specific)
   Ad or DM link  →  /solutions/[industry]  →  offer + mini-form (screen 1)  →  Book a call
   (retargeting: "come back, here's an offer")

C. ORGANIC / GEO (cold, early-stage)
   Blog query or AI-chat recommendation  →  /blog/[post] or /  →  /work  →  Book a call
   (educate → trust → convert; personalized SERP lifts return visits)

D. REFERRAL / DIRECT
   Word of mouth  →  /  or /work/[case]  →  Book a call
```

## 5. Notes
- Industry pages are both ad landing pages AND on-ramps from the homepage "Industries" tiles.
- `/reviews` and `/work` are the two "proof depth" pages reached via `Show more` from homepage sections.
- Every page exposes the global `Let's talk` panel, so the macro-conversion is always one click away.
- Free UX audit = the strongest micro-conversion for stage 4 (low commitment, high qualification); it appears in the ticker bar and as a CTA on industry pages.
```
