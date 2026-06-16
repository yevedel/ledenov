# Ledenov — Personal Site

Conversion website for **Yevhen "Yev" Ledenov**, senior product designer (UX/UI, product design, design systems, brand, AI-assisted workflows), 10+ years. A lead-generation channel + credibility and case-study showcase, aimed at startup founders.

**Positioning:** One senior product-design partner — product, site, and brand — at founder speed.
**Primary conversion:** book a call (Calendly). Secondary: direct message (Telegram/WhatsApp).
**Markets:** US · Europe · Australia. **Language:** English.

---

## Status — 2026-06-16

| Phase | State |
|---|---|
| Discovery (design, SEO audit, brand brief) | ✅ Done |
| Open decisions (CTA, aesthetic, domain) | ✅ Resolved |
| Deep-research (credibility verification + positioning) | ✅ Done |
| Strategy + IA | ✅ Drafted — `strategy-and-ia.md` |
| **Copy (English, per section)** | ⏳ **Next** |
| Design cleanup → build | ◻️ Pending |

---

## Repo structure

```
ledenov/
├── README.md              ← this file (living index)
├── strategy-and-ia.md     ← authoritative plan: positioning, proof, sitemap, homepage IA, GEO/SEO reqs
└── inbox/                 ← raw inputs
    ├── brand-brief.md     ← client brand brief + resolved decisions
    ├── research-dossier.md← deep-research: verified facts, profile inventory, positioning/GEO
    ├── design/            ← Figma section screenshots
    └── seo/
        └── seo-call-transcript.md  ← SEO specialist consult (transcript)
```

**Figma source:** file `PS9FhSJAfngcPnS7aXJQop`, page node `1554:10414`.

---

## Locked decisions

- **Brand:** persona, not studio — the site is "Yev" the person. Wordmark `ledenov.` (lowercase).
- **Legal entity:** **Ledo.digital OÜ** (Estonia, reg. 16774666) — footer only.
- **Domain:** canonical = surname-based (`ledenov.*`); `ledo.digital` and others 301 → canonical. (Existing site: `yledenov.com`.)
- **Aesthetic:** restrained product minimalism (Linear / HostIQ lane), one direction sitewide. Accent orange `#ff3e02` on warm near-white `#fafafa`. Delphi-style motion (animated hero circle + section reveals). Font: Passenger Sans (web license TBD).
- **Primary CTA:** Book a call (Calendly), visually dominant. Secondary: DM. Never route primary to Upwork.
- **Site type:** full multi-page (not a landing). Portfolio = scalable data structure.
- **Voice:** sharp, diagnostic, problem-first. Short sentences. Confidence without bragging. About the founder's problem, not Yev's features. No fluff. Minimal decorative em-dashes.

## Proof hierarchy

1. **Upwork:** ~$2M earned · 950+ contracts · Top Rated Plus · 10+ yrs (primary).
2. Dribbble 25.7K followers · Behance ~868K project views.
3. Enterprise logos (Google, Nestlé, P&G, AB InBev, WhatsApp) — small trust strip.
4. Case studies (few, deep, narrative).
5. LinkedIn recommendations (pending export).
- **Not published:** "18M views" (unless screenshot-backed), "11 awards" (until named), SWPS degree (removed).

## Target buyer

Time-poor, runway-conscious seed–Series B founder, already burned by a cheap Upwork designer (pretty files, no product logic) / a slow expensive agency / generic DIY-AI (v0, Lovable). Chosen against junior, agency, DIY-AI, and early full-time hire — all at once. Breadth framed as one accountable partner, not three vendors.

---

## Key changes from current Figma (from SEO consult + research)

- Industry pages: **remove decorative illustrations**; screen 1 = offer + mini-form.
- FAQ: **schema.org FAQPage** markup; highest-intent Qs (price/scope/timeline) first.
- Footer: **add contacts + location (Zagreb) + social links + Ledo.digital OÜ**.
- Add a **human-written SEO content block** above the footer (collapsible).
- CTA/form **after each decision block**, not only top + footer.
- Build requirement: **content + nav in real HTML (SSR/SSG)** — JS-only is invisible to Google/LLMs.
- Off-site: spread reviews across Clutch/G2/Trustpilot/Google Business; presence on Reddit/Quora/Contra (GEO).

## Next steps

1. **Copy** — English, section by section, in the locked voice (start: hero + "why me / vs alternatives").
2. Confirm tech stack (recommended: **Next.js + Tailwind**, SSR + Framer Motion).
3. Yev to provide: LinkedIn recommendations, named awards (if kept), Passenger Sans license.
4. Design cleanup (purge leftover UI-kit tokens) → build.

## Document map

- **`strategy-and-ia.md`** — the plan (read this first for execution).
- **`inbox/brand-brief.md`** — positioning, services, voice, resolved decisions.
- **`inbox/research-dossier.md`** — what's verified vs not; profile inventory; positioning/GEO patterns.
- **`inbox/seo/seo-call-transcript.md`** — full SEO consult.
