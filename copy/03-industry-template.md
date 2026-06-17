# Copy — Industry landing page template (`/solutions/[industry]`)

> Reusable across all 9 verticals (AI, Web3, Fintech, Healthcare, Edtech, Ecommerce, Real Estate, Gambling, B2B). Built once, tokens swapped per industry.
> Per SEO consult + strategy §5: **screen 1 = offer + mini-form (NOT a logo/illustration background)**, real HTML, FAQPage schema, internal links to cases. Voice: sharp, diagnostic, problem-first. These pages are the targets for ads/outreach and the on-ramp from the homepage Industries tiles.

---

## A. REUSABLE TEMPLATE (tokens in `{...}`)

### Screen 1 — Offer + form (above the fold)
- **Eyebrow:** `PRODUCT DESIGN FOR {INDUSTRY} FOUNDERS`
- **Headline:** `{industry-specific founder problem, one short sentence}`
- **Subhead:** `{what I design in this vertical} + the one-senior-partner frame, {vertical} flavored.`
- **Offer + mini-form:** `Free 30-minute {INDUSTRY} UX audit. {one-line hook}.`
  Fields: Name · Email · `{Product URL / what you're building}` → **Send request**
- **Secondary CTA:** Book a call
- Visual: real product screenshots from this vertical (no decorative illustration).

### 2 — Why {INDUSTRY}, specifically
`{2–3 sentences on the design challenges unique to this vertical, e.g. compliance, trust, data density, onboarding, RTL. Why senior judgment matters here. One vertical-proof line.}`

### 3 — {N} {INDUSTRY} projects
Heading: **{INDUSTRY} work** · `{N} projects in this space.`
[Case cards → /work/[case], filtered to this industry. Lead with the one that has metrics.]

### 4 — How it works (industry-flavored)
[Reuse homepage Process (Discovery → Design → Ship → Iterate), one line flavored to {INDUSTRY}.]
CTA after block: **Book a call →**

### 5 — FAQ ({INDUSTRY}-specific; schema.org FAQPage)
Heading: **Straight answers, {INDUSTRY} edition**
`{4–6 vertical questions: domain knowledge, constraints/compliance, platforms, timeline, price (start at $500 / $1,000 per week), NDA.}`

### 6 — Closing CTA / form (after the decision block)
`{One-line recap of the offer}` → **Book a call →** · or **Get your free {INDUSTRY} audit**

### SEO / tech
- Real HTML copy (SSR). `FAQPage` + `BreadcrumbList` schema. Internal links to the vertical's cases and to `/work`. Unique title/meta per industry.

---

## B. WORKED EXAMPLE — Fintech (`/solutions/fintech`)

### Screen 1
- **Eyebrow:** `PRODUCT DESIGN FOR FINTECH FOUNDERS`
- **Headline:** # Users decide if they trust you on the first screen.
- **Subhead:** I design fintech products, onboarding, KYC, dashboards, payments, that feel clear and trustworthy, and ship to production. One senior partner, regulated-grade rigor, founder speed.
- **Offer + form:** **Free 30-minute fintech UX audit.** Send your product, I'll show you exactly where users drop off before they fund.
  Name · Email · Product URL → **Send request**
- **Secondary:** Book a call
- Visual: Vuelo / Dragin product screens.

### 2 — Why fintech, specifically
In fintech, trust is the conversion. One confusing step in onboarding or KYC, one screen that feels unsafe, and the funded account never happens. The hard part isn't making it pretty, it's making compliance, dense data, and speed feel effortless at once. That's a senior judgment call, not a template.
*Proof line:* Work spanning an FCA-regulated fintech (Vuelo) to finance SaaS startups.

### 3 — Fintech work
Heading: **Fintech work** · A look at products built for trust and conversion.
- **Vuelo** — FCA-regulated travel fintech (flexible payments). → /work/vuelo
- **Dragin** — finance SaaS startup, UI/UX. → /work/dragin
[+ more as published]
> *Ozzie Burnham, finance SaaS founder:* "The consummate professional! Super talented and great to work with. Hire with confidence!"

### 4 — How it works
Discovery (your users, your compliance constraints, what "shipped" means) → Design (senior decisions first, fast cycles) → Ship (production-ready, front-end-aware) → Iterate (real usage beats opinions). Built to reduce your risk, not fill time.
**Book a call →**

### 5 — FAQ, fintech edition
- **Do you understand KYC, onboarding, and compliance flows?** Yes. I design them so they convert without cutting corners on trust or regulation.
- **Can you work within our regulated constraints?** Yes, I've designed for an FCA-regulated product. I design with your compliance and legal limits as inputs, not afterthoughts.
- **Web, mobile, or both?** Both, including dense dashboards and mobile-first flows.
- **What does it cost?** Projects start at $500; ongoing work is $1,000/week. We scope the exact number on the call.
- **How fast?** I take on new projects within a week; a focused scope ships from two weeks.
- **Do you sign an NDA?** Always. Your product and data stay yours.

### 6 — Closing
Trust is your conversion. Let's make the first screen earn it.
**Book a call →** · or **Get your free fintech audit**

---

## C. Per-industry token cheat-sheet (fill when building each page)

| Industry | Headline angle | "Why" hook | Lead proof |
|---|---|---|---|
| **Fintech** | trust on first screen | compliance + trust + data density | Vuelo (FCA), Dragin · Ozzie quote |
| **Healthcare** | patients/clinicians actually use it | engagement, clarity, regulated, accessibility | Eterno Health, Senior Living, Confyde, Nader (RTL) · Eterno quote |
| **AI** | make the AI legible, not magic | trust in outputs, data density, novel patterns | Reliant.ai, Blackwave.ai, Pastry |
| **Web3** | onboard normal users, not just degens | gamified onboarding, wallet conversion | (Balakin-style quest framing; Yev's web3 work) |
| **B2B SaaS** | users find value before they churn | activation, dashboards, retention | Propulsion, Frequency Ads, Reliant · Scott/Tessa quotes |
| **Real Estate** | turn listings/data into action | data density, search/marketplace UX | Zoomprop, Lusardi Land · Mike quote |
| **Edtech** | learners finish, not bounce | engagement, progress, motivation | Coursinity, Edtech work |
| **Ecommerce** | shoppers checkout, not abandon | conversion, trust, speed | Jessica Charles ecommerce |
| **Gambling** | compliant, fast, retention-driven | trust, speed, regulated, retention | (Yev's gambling work) |

## Open / needs Yev
- Confirm which named cases are publishable per vertical (NDA).
- Web3 / Gambling: which real projects back these pages?
- Each page's free-audit offer: keep "30-minute"? same across verticals?
