# RESEARCH.md — Competitor & Reference Analysis

> Competitor research for the Ledenov site. Sources gathered 2026-06-16 via WebSearch + WebFetch (UX teardowns) and live screenshots (Playwright via system Chrome).
> Screenshots: `research/screens/<slug>__fold.png` (above-the-fold) and `__full.png` (full page). Manifest: `research/screens/manifest.json`. All homepages returned HTTP 200 and are public (no login wall at homepage).

---

## 1. Landscape at a glance

| # | Site | URL | Tier | One-line positioning | Primary CTA | Pricing shown |
|---|---|---|---|---|---|---|
| 1 | **Designjoy** | designjoy.co | Solo / productized | "Design subscriptions for everyone" | See pricing / Book a call | ✅ flat $4,995/mo |
| 2 | **Artone Studio** | artone.studio | Solo / productized | "Product design, websites & branding for startups. One monthly fee." | Book a Call | ✅ $4,000/mo |
| 3 | **SaaS Designer** | saasdesigner.com | Solo / B2B SaaS | "Turn your B2B SaaS into an experience users love" | Book a UX/UI Discovery Call | partial |
| 4 | **Simon McCade** ⭐ | simonmccade.com | Senior indie, B2B SaaS | "Let's fix your confusing user experience." | Book discovery call | day-rate model |
| 5 | **Oli Batstone** ⭐ | olibatstone.com | Senior indie, health | "You've built it. People just don't engage." | Book discovery call | no (scarcity bar) |
| 6 | **UXIsaac** | uxisaac.com | Freelance, SaaS | "SaaS websites that turn your ICP into booked demos" | Book 15min Call | — |
| 7 | **btsta** (J. Bautista) | btsta.me | Solo design-engineer | "Product design that ships" (embedded partner, not agency) | Book a call (1 slot) | — |
| 8 | **UI Flip** (I. Ivanov) | uiflip.com | Solo vs agency | "Solo by design. Direct line, no agency layers." | Book a call | ✅ $6,000/mo |
| 9 | **Anomaly** | byanomaly.co | Partner (small team) | "Design & Webflow partner for quality-obsessed founders" | Book a free intro call | ✅ weekly/fixed |
| 10 | **Startup Design Partners** | startupdesignpartners.com | Design partner | "design cofounder / partner for founders" | (open manually) | — |
| 11 | **Rauno Freiberg** | rauno.me | Aesthetic ref only | Vercel interaction designer, manifesto site | email only | — |
| 12 | **Paco Coursey** | paco.me | Aesthetic ref only | Linear webmaster, minimalist personal site | email only | — |

⭐ = closest analogues to Yev's exact positioning (independent senior product designer, problem-first, book-a-call).

## 2. The two closest analogues (study these first)

### Simon McCade — `screens/simon-mccade__*` — the template to beat
Dark theme, single blue accent, work-forward. Anatomy of the hero:
- **Eyebrow:** `PRODUCT DESIGN FOR B2B SAAS` — instant relevance filter.
- **Headline (problem-first):** "Let's fix your confusing user experience." — a sentence about the buyer's pain, not his service.
- **Subhead (outcome + proof):** "I've helped 30+ B2B SaaS teams turn unfriendly products into intuitive experiences so that users find value faster and stick around longer."
- **Dual CTA:** `Book discovery call` (primary) + `Read case studies` (secondary) — exactly Yev's planned pattern.
- **Inline proof:** 4 founder avatar faces + "Trusted by 30+ software founders," directly under the CTA.
- **Hero visual:** real product screenshots (dashboards on laptop, app on phone) — shows the work, not an illustration.
- Nav: Case studies · Testimonials · Blog · About + `Book discovery call`.

**Takeaway for Yev:** this is the cleanest expression of his own pitch. Borrow the eyebrow→problem-headline→outcome-subhead→dual-CTA→inline-proof stack. Yev's differentiator vs Simon: broader single-partner scope + the $2M/950-contract proof, which is heavier than "30+ teams."

### Oli Batstone — `screens/oli-batstone__*` — proof framing + scarcity
Light theme, centered hero. Notable mechanics:
- **Scarcity bar (top):** "Availability for 2 new clients. Book a call →" — creates urgency without hype.
- **Eyebrow → problem headline:** `PRODUCT DESIGN FOR HEALTH STARTUPS + SCALE-UPS` → "You've built it. People just don't engage." (pure founder-nerve).
- **Subhead:** "I help teams build digital health products that patients and clinicians use, not avoid. Engagement follows."
- **Enterprise-logo framing (important for Yev):** a quiet logo row labeled **"With 10 years of experience, I've worked with these brands"** (Uber, Google, etc.). This is *exactly* the framing the brand brief prescribes for Yev's Google/Nestlé/P&G/WhatsApp logos — experience/rigor, not "I'm WhatsApp-level."
- Next section: **"Typical problems I solve"** — a problem-led services grid (not a feature list).

**Takeaway for Yev:** adopt the "worked with these brands" logo label verbatim-in-spirit, the scarcity bar, and the "problems I solve" framing for the services/expertise section.

## 3. Solo / productized tier (pricing + offer mechanics)

- **Designjoy** (`screens/designjoy__*`): canonical solo-operator. Serif-italic accent on a sans headline, "Pause or cancel anytime," nav = Login / Book a call / **See pricing**. Flat **$4,995/mo** shown openly. "The way design should've been done in the first place." Visually louder/more colorful than Yev's minimalist lane — borrow the *structure* (clear offer, open pricing, book-intro-call) not the look.
- **Artone Studio**: Designjoy clone aimed at startups, "One monthly fee. No contracts," $4,000/mo.
- **UI Flip**: strongest **solo-vs-agency** copy — "Solo by design. Direct line, no agency layers," founder-credibility (ex-Teamwork, 16 yrs), problem headline "You shipped without a designer. Now it's costing you growth." $6,000/mo.
- **btsta**: design-engineer angle ("Product design that ships," "embedded design partner, not an agency"), scarcity ("one slot open").
- **SaaS Designer / UXIsaac**: SaaS-niche, outcome-led heroes ("booked demos"), low-friction CTAs ("Book 15min Call" / "Send Project Brief").

**Pricing pattern (research-backed):** ~10/11 high-performing productized sites show pricing openly; rule of thumb = if avg deal < $10K/mo, show the price. Yev's call: a `/pricing` page with packages is on-plan; decide whether to show numbers or "from $X / starting at."

## 4. Aesthetic references (craft only, not conversion)
- **Rauno Freiberg** (`rauno.me`) and **Paco Coursey** (`paco.me`): reference-grade Linear/Vercel minimalism — typography, whitespace, restraint, micro-interaction polish. No services funnel (email-only). Study for visual craft and motion feel; do **not** copy their no-CTA structure.

## 5. Cross-cutting patterns (what converts)

**Hero**
- Eyebrow label = instant "is this for me?" filter (`PRODUCT DESIGN FOR [SEGMENT]`).
- Headline = the founder's *problem* as a short sentence, not the designer's service ("fix your confusing UX", "People just don't engage", "costing you growth").
- Subhead = who you help + the outcome + a proof number.
- Dual CTA: Book call (primary) + case studies / project brief (secondary).
- Inline proof right under the CTA (avatars + "trusted by N founders").
- Hero visual = real product screenshots, never decorative illustration.

**CTA** (from Alex Berman teardown + observed sites)
- Multiple placements: above fold, after each case study, dedicated contact. Vary wording by context, don't repeat one label.
- Action + duration beats generic: "Book a 20-minute intro call" > "Contact me". After a case: "Want results like this?"
- Scarcity ("availability for 2 clients", "one slot open") used tastefully.

**Proof / social proof**
- Logos framed as experience/rigor ("worked with these brands", "10 years experience"), kept small — never the hero.
- Outcome-based testimonials with real numbers, placed inline (inside cases / next to services), not quarantined on a testimonials page.
- Avatar clusters + "trusted by N founders."

**Case studies** (Alex Berman + DesignerUp breakdown of 10 top portfolios)
- 3–5 deep cases beat 10 shallow ones; few, in-depth, narrative — not a thumbnail wall.
- Proven arc: **Hook (outcome in one line) → Client context (2–3 sentences) → Problem (specific, with metrics) → Process & decisions (show thinking, tradeoffs) → Results (quantified)**.
- Before/after is often the single most persuasive image for a founder.
- "Showing your thinking separates someone who executes from someone who thinks."
- Top portfolios (Simon Pan, Elise Fu, Madeline Wukusick) lead with **business impact / result first**, then process; quantify wherever possible.

**Common mistakes to avoid**
- Portfolio-as-art-gallery (polish over sales mechanics).
- Vague taglines / "I work with all kinds of businesses" (kills specialist signal).
- Services as feature lists instead of "problems I solve."
- Screenshots without problem→process→results = not a case study.
- Ignoring mobile (founders evaluate on phones).

## 6. Gap & opportunity for Ledenov

No competitor combines **elite Linear-grade minimalist craft** (Rauno/Paco level) **with a tight book-a-call founder funnel** (Simon/Oli level). The aesthetic-craft sites have no funnel; the funnel sites look generic/templated. **Yev's site can own that intersection** — and his **$2M / 950-contract** proof is heavier than any analogue's "30+ teams," while the **single-partner scope** (product + site + brand) is broader than the SaaS-only specialists.

### Concrete moves to borrow (mapped to our IA)
1. **Hero** — add an eyebrow (`PRODUCT DESIGN FOR FOUNDERS` / segment line); keep the problem-first headline; subhead = outcome + the Upwork proof number; dual CTA (Book a call + View work); inline avatars/"trusted by". [Simon McCade]
2. **Scarcity bar** — optional top strip ("Booking N projects this quarter"). [Oli Batstone]
3. **Logos** — label them "Brands I've brought senior rigor to" / "10+ years, worked with" and keep small. [Oli Batstone] (respects the brief's framing + our NDA guardrail).
4. **Services** → reframe as **"Problems I solve"**, problem-led not feature-led. [Oli Batstone]
5. **Case studies** → 3–5 deep, the Hook→Context→Problem→Process→Results arc, before/after imagery, quantified outcomes. [Alex Berman / DesignerUp]
6. **Pricing** → keep `/pricing` with packages; decide show-number vs "starting at". [productized tier]
7. **Motion/craft bar** → hold to Rauno/Paco restraint so the site reads "senior," not "template."

## 6b. Case-study presentation reference — Alexei Balakin / Everscale ⭐
`screens/ref-balakin-everscale__*` · alexeibalakin.com/cases/everscale — the gold standard for the case-study page. Exact structure to mirror:

1. **Result-first hero headline** with the number in it: "Onboarding 212,000 users into blockchain via gamification." Subhead = one line on what it is.
2. **Metrics row immediately under the hero** (5 stats): +212K users in 12 days · +67.1% account conversion · +14% wallet conversion · +15 countries · 99.3% mobile. Quantified impact above the fold.
3. **Metadata block:** Role · Company · Scope (e.g. "Product designer · Broxus · Landing, web app, mobile app").
4. **Body = several self-contained Problem → Solution → Result mini-stories**, each with its OWN metric, not one long arc. e.g. "Quest card redesign" → Problem: only 25% scrolled to all quests → Solution: compact redesign → Result: "75% of users now see 14 quests instead of 8." This is the "show your thinking, back each decision with a number" pattern the teardowns praise.
5. **Wrap-up with honest insights** (retention 19.6% D1, ~0% D7) — transparency, not glossy spin.
6. **Visuals interleaved after each section:** product screenshots, heatmaps, before/after, flow diagrams. Big device shots on dark backgrounds. Minimal centered editorial layout, clean type.

**For Yev:** this is the template for `/work/[case]`. It beats the generic single-arc case because every section is a proof unit (decision + metric). Use it especially where Yev has real numbers.

## 7. Source teardowns
- alexberman.com/web-designer-freelance-portfolio — designer-portfolio teardown (hero, CTA, case structure, mistakes).
- designerup.co/blog/10-exceptional-product-design-portfolios-with-case-study-breakdowns/ — case-study structures of 10 top portfolios.
- webflow.com/blog/write-the-perfect-case-study — 5-element case framework.
- blog.uxfol.io/ux-case-study-template/ — section-by-section case template.
- thrivethemes.com/hero-section-examples/ — hero copy hierarchy teardown.
- demandcurve.com/teardowns — SaaS hero/CTA conversion teardowns (per-page detail behind individual URLs).
- artone.studio/articles/...-vs-designjoy... — productized-service positioning mechanics (competitor's own piece).
