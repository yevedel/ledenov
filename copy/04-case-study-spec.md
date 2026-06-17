# Case Study Spec — requirements for every `/work/[case]` page

> The definitive checklist for building a case study. Based on the Balakin/Everscale reference (RESEARCH.md §6b), the UX teardowns (Alex Berman, DesignerUp), and strategy §7.
> Audience = a skeptical, runway-conscious founder. Job of the page: remove every doubt and let them book directly from the case.

---

## 0. Principles (apply to every section)
- **Result first, process second.** Lead with the outcome, then show the thinking that earned it.
- **Every section is a proof unit:** a decision + the evidence it worked (ideally a number).
- **Show your thinking.** "Showing your thinking separates someone who executes from someone who thinks." Tradeoffs, not just final pixels.
- **Honesty reads as senior.** Real numbers, real constraints, real learnings. Never fabricate metrics.
- **Voice:** sharp, diagnostic, problem-first. Short sentences. About the user/business problem, not the craft.

## 1. Required sections (in order)

| # | Section | Required? | Must contain |
|---|---|---|---|
| 1 | **Hero headline** | ✅ | Result-first, with the number in it (e.g. "Onboarding 212,000 users via gamification") |
| 2 | **Subhead** | ✅ | One line: what the product is |
| 3 | **Metrics row** | ✅ (or fallback) | 3–5 quantified outcomes; if no metrics, a qualitative shipped-outcome line |
| 4 | **Metadata block** | ✅ | Role · Client/Company · Scope · Year · Platform · Industry tag(s) |
| 5 | **Hero visual** | ✅ | Real key screen / device shot (no decorative illustration) |
| 6 | **About the product** | ✅ | 2–4 sentences: what it is, who it's for, the context/stage |
| 7 | **Body: Problem → Solution → Result blocks** | ✅ | 3–6 self-contained mini-stories, each with its own metric + visual |
| 8 | **Wrap-up / learnings** | ✅ | Honest insights, what you'd watch next; transparency |
| 9 | **Testimonial** | ⬚ recommended | The client's quote pulled into the case |
| 10 | **Related cases + CTA** | ✅ | 2–3 other cases + Book-a-call |

## 2. Section detail

**1–2. Hero + subhead**
- Headline contains the single biggest measurable result. If the project has no hard number, lead with the shipped outcome ("Redesigned the onboarding that took the app to launch").
- Subhead = one neutral sentence describing the product.

**3. Metrics row** (the above-the-fold proof)
- 3–5 stats, each = number + label + (timeframe). e.g. `+212K users / 12 days`, `+67.1% account conversion`, `99.3% mobile`.
- Pull from analytics, the client, or the contract. If confidential, use relative (`+34%`) not absolute, or mark "directional."
- **No metrics available?** Replace with concrete deliverables + scope ("Shipped landing, web app, and iOS in 6 weeks") and a stronger testimonial. Do not invent numbers.

**4. Metadata block**
- **Role** (be precise: "Product designer", "Design lead"; state if part of a team).
- **Client/Company**, **Scope** (e.g. "Landing, web app, mobile app"), **Year**, **Platform**, **Industry tags** (drive the /work filters + /solutions linking).

**5. Hero visual** — the strongest real screen, on a clean/dark backdrop. Device mockups OK.

**6. About the product** — context so the reader understands the problem space and stage (seed/Series A, traffic source, audience).

**7. Body — Problem → Solution → Result blocks** (the core)
- **3–6 blocks**, each a contained story:
  - **Problem:** specific, with a number where possible ("only 25% scrolled to all quests").
  - **Solution:** what you did + *why* (the decision and tradeoff).
  - **Result:** the metric it moved ("75% now see 14 quests instead of 8").
- Each block carries its own visual: **before/after** (most persuasive), flow diagram, heatmap, or screen.
- This beats one long narrative arc — each block is independent proof.

**8. Wrap-up / learnings** — honest retention/limits/next-steps. Signals senior maturity.

**9. Testimonial** — drop the relevant client quote (full name + company + platform logo) into the case.

**10. Related + CTA** — 2–3 related/industry-matched cases + **Book a call** (also place a CTA mid-page after the strongest result block).

## 3. Proofs to show (priority order)
1. **Quantified outcomes** (conversion, users, retention, revenue, time saved) — in the metrics row + per block.
2. **Before/after visuals** — the single most persuasive asset for a founder.
3. **Real product screenshots / flows / heatmaps** — evidence of real, shipped work.
4. **Client testimonial** tied to this project (full name, from `inbox/clients-and-testimonials.md`).
5. **Role + scope clarity** — exactly what Yev owned (honesty pre-empts the "did he really do this?" doubt).
6. **Credentials/logos** — small, contextual, never the hero.

## 4. Formatting & visual rules
- Minimalist, work-forward; the screens are the centerpiece. One accent (orange `#ff3e02`) on warm near-white; device shots can sit on dark.
- Alternating text/visual rhythm; generous whitespace; clean type (Passenger Sans).
- Short paragraphs (2–3 sentences). Scannable. Bold the result.
- Metrics row visually distinct (big numbers).
- Fully responsive — founders open these on mobile.
- Real HTML text (SSR), not text baked into images (SEO + LLM readability).

## 5. Data structure (for build — scalable, not hardcoded)
- **Card (index):** thumbnail, title, result line, industry/type/year tags → links to detail. Powers `/work` filters + `/solutions/[industry]` listings.
- **Detail:** structured fields {headline, subhead, metrics[], meta{role,client,scope,year,platform}, blocks[{problem,solution,result,media[]}], wrapup, testimonialRef, relatedRefs[]}.
- New case = new data entry, not a new bespoke layout.

## 6. SEO / tech requirements
- `CreativeWork`/`CaseStudy` + `BreadcrumbList` schema; unique title/meta.
- Real HTML; lazy-load heavy media; compress images; keep LCP clean.
- Internal links: case → related cases, case → its `/solutions/[industry]` page, case → `/work`.

## 7. Do / Don't
**Do:** lead with results · quantify · show before/after · show thinking & tradeoffs · be honest about role and limits · one CTA after the best block + one at the end.
**Don't:** art-gallery of pretty screens · vague "improved the UX" with no metric · hide your specific role · fabricate numbers · wall of thumbnails with no narrative · bury the result at the bottom.

## 8. Per-case intake (what Yev supplies for each case)
- [ ] Headline result + 3–5 metrics (or "no metrics → use deliverables + testimonial")
- [ ] Role, client, scope, year, platform, industry tags
- [ ] 3–6 problem→solution→result stories, each with a number if possible
- [ ] Visuals: hero screen, before/after pairs, flows/heatmaps, final screens
- [ ] Client testimonial + permission to use name/logo
- [ ] NDA check: is this client/work publishable? any numbers to mask?
- [ ] Honest learnings / what you'd do next
