# Case Study (worked example) — Paladir

> Built to the Case Study Spec (`copy/04-case-study-spec.md`), using the narrative from the Figma case (`Ledo-cases`, node 438:4606).
>
> 🚨 **ALL NUMBERS IN THIS DOC ARE FICTIONAL PLACEHOLDERS** marked `[PH]`. There were no real metrics for this project. Replace every `[PH]` with real data (or remove and use the deliverables-only fallback from spec §2) BEFORE publishing. Publishing invented metrics would break the site's whole trust thesis.
> NDA check: confirm Paladir is publishable and the client name can be shown (or anonymize to "a GRC SaaS startup").

---

## Card (for /work index + /solutions listings)
- **Title:** Paladir — making a compliance platform feel like a guided journey
- **Result line:** `[PH]` Onboarding completion up 64%; time-to-first-framework cut from days to 15 minutes
- **Tags:** B2B SaaS · GRC / Security & Compliance · AI · Web app · 2025
- **Thumbnail:** compliance dashboard (Green/Yellow/Red status)

---

## 1. Hero headline (result-first)
# From a wall of controls to a configured framework in 15 minutes `[PH]`

## 2. Subhead
Paladir is an AI-powered compliance platform for SMBs working toward SOC 2 and ISO 27001. I redesigned it end to end, so it reads like a guided journey, not a regulatory inventory.

## 3. Metrics row  🚨 `[PH]` — all fictional, replace
- **+64%** onboarding completion `[PH]`
- **15 min** to a configured framework, down from ~3 days `[PH]`
- **+38%** week-1 activation (users reaching their first framework) `[PH]`
- **−47%** "where do I start?" support tickets `[PH]`
- **72%** of AI-suggested tasks accepted `[PH]`

## 4. Metadata block
- **Role:** Senior UX/UI Designer (end to end)
- **Client:** Paladir
- **Scope:** Research → IA → user flows → UI · design system
- **Domain:** B2B SaaS, Security & Compliance (GRC), AI-assisted workflows
- **Platform:** Web app (desktop)
- **Year:** 2025

## 5. Hero visual
The compliance dashboard: framework / policy / task progress with Green-Yellow-Red triage. [Figma screens available.]

## 6. About the product
Paladir is a security posture management platform for SMBs working toward SOC 2 / ISO 27001 readiness. It centralizes policies, SOPs, playbooks, and runbooks, then turns them into trackable tasks with audit-ready evidence trails. An AI layer reads uploaded policies and generates the relevant tasks, owners, and cadences automatically.

The client came in with a working concept, a target market, and a pile of internal documents describing functionality. What they didn't have: a coherent product structure, a clear user journey, or a design system that could carry the platform through onboarding, daily use, and audit readiness.

## 7. Body — Problem → Solution → Result blocks

**Block 1 — The product had no spine**
- *Problem:* Raw product docs, specs, and a competitor comparison, but no information architecture. Users would be dropped into dozens of frameworks and hundreds of controls with no path through.
- *Solution:* Translated the documentation into a structured IA, six core areas (Onboarding, Dashboard, Frameworks, Policies, Tasks, Settings), each with a defined user need, a single primary CTA, and an empty-state strategy.
- *Result:* `[PH]` A navigable product where every area has one job. Task-discovery time dropped 41%. `[PH]`
- *Visual:* IA map / sitemap.

**Block 2 — Compliance felt like a checklist, not a journey**
- *Problem:* The old flow asked users to input company info, then dumped policies and tasks to comply with. No sense of progress or direction. The core question: how do you show that GRC is a holistic journey, not a bunch of checklists?
- *Solution:* Mapped the end-to-end flow, framework selection → policy generation/upload → AI task assignment → evidence collection → continuous post-audit feedback. Every screen ties back to a measurable progress metric, so users always know where they stand against their target framework.
- *Result:* `[PH]` Compliance progress now visible at every level (framework → control → task → evidence); week-1 activation up 38%. `[PH]`
- *Visual:* end-to-end flow + progress indicators.

**Block 3 — Onboarding overwhelmed non-technical owners**
- *Problem:* The messy initial setup (existing policies vs. starter policies, framework choice, team invites) stalled SMB owners who didn't know where to start.
- *Solution:* An onboarding wizard that handles setup step by step, with AI recommending the right framework during onboarding.
- *Result:* `[PH]` Onboarding completion up 64%; time-to-first-configured-framework cut from ~3 days to 15 minutes. `[PH]`
- *Visual:* onboarding wizard (before/after).

**Block 4 — Density caused cognitive overload**
- *Problem:* GRC tools are information-dense by nature, and these users already have full plates.
- *Solution:* Cross-product UX rules: every page opens with a one-line context explainer, every page has a single primary CTA, empty states teach instead of sitting empty, and status uses Green/Yellow/Red for fast triage with drill-down into control gaps.
- *Result:* `[PH]` "Where do I start?" support tickets down 47%. `[PH]`
- *Visual:* page-template pattern + status dashboard.

**Block 5 — AI was a feature, not an experience**
- *Problem:* An AI layer existed, but bolting it on as a separate "AI section" wouldn't help users in the moment.
- *Solution:* Embedded AI as native UX moments: recommended frameworks during onboarding, gap analysis on the framework page, policy-generation prompts on empty states, and "this task brings you 5% closer to compliance" hints.
- *Result:* `[PH]` 72% of AI-suggested tasks accepted; AI read as part of the product, not a chatbot. `[PH]`
- *Visual:* inline AI moments across screens.

## 8. Wrap-up / learnings
A GRC platform that reads less like a regulatory inventory and more like a guided, AI-assisted workflow. Compliance progress is visible at every level, the AI feels woven in rather than bolted on, and onboarding takes a non-technical SMB owner from "I don't know where to start" to a configured framework.
*What I'd watch next:* `[PH]` how evidence-collection holds up at audit time, and whether the AI's task cadences need tuning per framework. `[PH]`

## 9. Testimonial
[No real Paladir testimonial available. If publishable, request a 1-line quote tied to the redesign outcome. Otherwise omit, or pair with a relevant SaaS quote from `inbox/clients-and-testimonials.md` clearly attributed to a different project.]

## 10. Related + CTA
- Related: [2–3 other B2B SaaS / AI cases → /work/...]
- CTA (mid-page after Block 3, and at end):
  > Got a dense product that should feel simple? Let's fix it.
  > **Book a call →**

---

## Build notes
- Maps 1:1 onto Spec §1 sections and the scalable data structure (Spec §5).
- Replace every `[PH]` with real numbers or switch to the deliverables-only fallback (Spec §2: "Shipped end-to-end research → IA → flows → UI for a GRC platform" + testimonial).
- Pull the real screens from the Figma case (`Ledo-cases`, 438:4606): dashboard, onboarding wizard, frameworks, policies, tasks, AI moments. Use before/after pairs where the old version exists.
