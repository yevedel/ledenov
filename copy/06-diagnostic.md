# Copy — Project Diagnostic (draft v1)

> Voice: sharp, diagnostic, problem-first. Short sentences. About the founder's problem, not the form. Proof: Upwork ~$2M / 950+ / Top Rated Plus / 10+ yrs. No 18M/awards/SWPS. No decorative em-dashes.
> Purpose: a smarter, more engaging version of "message me." Lower friction than Book a call, more committed than a cold form. It qualifies the lead, mirrors Yev's diagnostic thinking, and gives value back before asking for contact.
> Position in funnel: **Primary = Book a call. Secondary = Text me (Telegram/WhatsApp). This diagnostic replaces the cold "contact form"** as the engaged middle path.
> Builds on the existing `audit` object in `site/app/content.ts` — extend that, don't add a third mechanism.

---

## Entry point / trigger

Label (button / CTA): **Run a 60-second diagnostic** — or — **Not ready for a call? Start here.**
Eyebrow: `START HERE`
Heading: **Not sure where your product leaks? Answer 4 questions. I'll tell you straight.**
Sub: No call yet, no email yet. Four taps, and you'll see roughly what it takes to fix it.

> Microcopy under the start button: `~60 seconds · no signup`

---

## Step 1 of 4 — Stage

**Where's your product right now?**
- Pre-launch. Still getting it real.
- Live, but not converting the way it should.
- Scaling. It works, now it has to look and feel like it.
- Just an idea and a deadline.

## Step 2 of 4 — The pain

**What's actually broken?** (pick the loudest one)
- Users don't get it. They drop off, or never activate.
- Our site looks like we built it ourselves.
- The UI is inconsistent and slowing the team down.
- We need a rebrand / it doesn't match the product we've become.
- All of it. I need one person to own product, site, and brand.

## Step 3 of 4 — Urgency

**When do you need this moving?**
- This week. It's blocking us.
- This month.
- Next quarter, planning ahead.
- Just scoping for now.

## Step 4 of 4 — Budget reality

**What are you working with?** (so I don't waste your time)
- A focused fix. ~$500–$2k.
- Ongoing senior help. ~$1k/week.
- Bigger build, let's scope it.
- Not sure yet. Tell me what's realistic.

> Note: this step is the qualifier. It maps to locked pricing (projects from $500, ongoing $1k/week). Keep the ranges honest, not aspirational.

---

## Final screen — give value, then ask for contact

> Logic: the result line is generated from the answers (stage + pain + urgency + budget). Below are the templates. Always lead with the read, then the rough shape (timeline + price band), then the soft contact choice.

### Result block (dynamic — template)
Eyebrow: `YOUR READ`
> **Sounds like [pain, in plain words].**
> At your stage that's usually a **[scope: e.g. focused UX pass / full product + site / design-system rebuild]**. Typically **[N] weeks**, in the **[price band]** range. I'd start by **[first concrete move]**.

**Worked examples:**
- *Live + "users don't get it" + this month + ~$500–2k →*
  > **Sounds like an activation problem, not a redesign.** Usually a focused UX pass on the first-run flow. Typically 2–3 weeks, from ~$500. I'd start by mapping where users drop before they reach value.
- *Scaling + "inconsistent UI" + this quarter + ~$1k/week →*
  > **Sounds like you've outgrown ad-hoc design.** Usually a lightweight design system plus cleanup. Ongoing at $1k/week, a few weeks to stabilize. I'd start by auditing your components and locking the primitives.
- *Pre-launch + "all of it" + this week + bigger build →*
  > **Sounds like you need one partner on product, site, and brand.** That's the core of what I do. We'd scope it on a short call. I'd start by pinning down what "shipped" means for your launch.

### Contact choice (soft, one screen — pick your channel)
> **Where do I send the full read?**
> Pick whatever's easiest. I reply fast.

- **Email** — `you@company.com` → *I'll send a short written teardown.*
- **Telegram / WhatsApp** — *fastest. We can go back and forth.*
- **Book the call** — *prefer to just talk? Grab 20 minutes.* → (Calendly)

> Optional single field above the buttons: `One line on your product (optional)` — gives Yev context before he replies. Keep it optional; required fields kill completion.

Submit microcopy: `No spam, no list. This goes straight to me. — Yev`

---

## Failure / fit-honesty path (optional but on-brand)

If budget = "not sure" + urgency = "just scoping": still give the read, but set expectations.
> **Honest answer: you might not need me yet.** Here's what I'd sort out first [1 line]. When you're ready to ship, the diagnostic's still here.

(This builds trust and filters tire-kickers without a hard "you don't qualify" wall.)

---

## Build / SEO notes (read before implementing)

- **SEO/GEO constraint:** the multi-step wizard is JS-interactive, so Google/LLMs won't read it. Do **not** let it replace the indexable HTML mini-form on industry pages (required by the SEO consult: screen 1 = offer + mini-form in real HTML). The diagnostic is an *added* engaged path on the homepage + CTA blocks, layered over a static fallback.
- **Reuse, don't multiply:** extend the existing `audit` object/section in `content.ts` rather than introducing a third contact mechanism. The diagnostic is the richer front-end for the same "reach out" intent.
- **Keep it to 4 steps.** Every extra step costs completion. Progress indicator visible from step 1 ("1 of 4") so time-poor founders see it's short.
- **Radio choices, not free text** for steps 1–4 (faster, and they power the result logic). Only the final contact field is open.
- **Backend:** the audit form is already flagged "wire to a backend" in the launch list. This diagnostic submits through the same endpoint — answers + chosen channel + optional line → email/Telegram to Yev.

---

## Open / needs Yev

- Confirm the result-logic copy for the main answer combinations (the 3 examples are seeds — your senior read is the real source).
- Confirm price bands shown per path (default uses locked $500 / $1k-week).
- Telegram/WhatsApp links + email (still placeholders in `content.ts`).
- Decide entry points: homepage hero secondary CTA? after "Problems I solve"? in the Let's-talk panel? (recommend: Let's-talk panel + after Problems-I-solve.)
