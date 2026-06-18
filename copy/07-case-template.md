# Case-study template (fill-in)

> Every case the synthetic audit asked for follows this shape: **problem → decisions → before/after metrics → live link → engineering-handoff proof.** The last two are what separate "pretty portfolio" from "senior partner who ships." Copy one block below into `site/app/content.ts` → `cases: CaseDetail[]`, replace every ⟨…⟩, delete the guidance notes.

Maps to the `CaseDetail` type in `content.ts`. Required unless marked optional.

```ts
{
  slug: "⟨kebab-slug⟩",                  // becomes /work/⟨slug⟩ and the work-grid link
  title: "⟨Client⟩ — ⟨one-line what you did⟩",
  resultLine: "⟨the single hardest before/after metric, one sentence⟩",  // shown on the homepage card
  tags: ["⟨Industry⟩", "⟨Type⟩", "⟨Platform⟩", "⟨Year⟩"],
  headline: "⟨outcome-first headline, not 'I redesigned X'⟩",
  subhead: "⟨2 sentences: what the product is + what you did end to end⟩",
  liveUrl: "⟨https://the-shipped-product.com⟩",   // optional but HIGH value — a clickable shipped thing

  metrics: [                              // 4–5 hard before/after numbers. Real or clearly flagged placeholder.
    { value: "⟨+64%⟩", label: "⟨what it measures⟩" },
    // …
  ],

  meta: {
    role: "⟨e.g. Senior Product Designer (end to end)⟩",
    client: "⟨Client⟩",
    scope: "⟨Research → IA → flows → UI, design system⟩",
    domain: "⟨e.g. Fintech, regulated payments⟩",
    platform: "⟨Web app / Mobile (iOS)⟩",
    year: "⟨2025⟩",
  },

  about: [                                // 1–2 short paragraphs: what the product is, what state it was in
    "⟨what the product does and who it's for⟩",
    "⟨what they had vs what they lacked when you started⟩",
  ],

  blocks: [                               // 3–5 problem → decision → result. THE decisions are the senior signal.
    {
      problem: "⟨the real friction, in the user's/founder's words⟩",
      solution: "⟨the decision you made and why — what you chose AND what you rejected⟩",
      result: "⟨the measurable outcome of THIS decision⟩",
    },
    // …
  ],

  // ── Engineering-handoff proof (optional but it's the explicit book_call gate
  //    for handoff-scarred and technical founders — include it whenever you can) ──
  engineerQuote: {
    quote: "⟨a developer saying your Figma shipped to prod with little/no rework⟩",
    name: "⟨Engineer name⟩",
    role: "⟨Founding Engineer, Client⟩",
  },
  handoff: [                              // build-ready artifacts; add href to link a Loom/PR/Figma/token file
    { label: "Build-ready Figma (components + variants)" },
    { label: "Tailwind design tokens" },
    { label: "Loom handoff walkthrough", href: "⟨https://loom.com/…⟩" },
    { label: "Shipped production URL", href: "⟨https://…⟩" },
  ],

  wrapup: "⟨one paragraph: the state the product is in now, outcome-first⟩",
}
```

## Notes
- A case **renders fine without** `engineerQuote`/`handoff`/`liveUrl` — they're optional. But the audit showed they're exactly what flips warm leads from "free teardown" to "book a call," so prioritize getting at least one real engineer quote on one case.
- To make a work-grid tile clickable, give its `allWork` entry the same `slug`.
- One **non-Upwork** proof point anywhere (a named client logo, a LinkedIn-verifiable reference) is the other repeated flip condition — worth more than a fifth case.
- Current placeholder cases to replace with real data: `paladir`, `confyde`, `hostiq`, `vuelo`.
