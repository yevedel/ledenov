// Central copy for the homepage. Source of truth = /copy/*.md.
// Voice: sharp, diagnostic, problem-first. Proof: Upwork ~$2M / 950+ / Top Rated Plus / 10+ yrs.

export const site = {
  name: "ledenov.",
  fullName: "Yev Ledenov",
  domain: "ledenov.com",
  legal: "Ledo.digital OÜ",
  location: "Zagreb, Croatia",
  email: "yevledenov@gmail.com",
  calendly: "https://calendly.com/yevledenov/20min",
  whatsapp: "https://wa.me/0000000000", // TODO: replace 0000000000 with Yev's WhatsApp number (international, digits only)
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
    { label: "Behance", href: "https://www.behance.net/yevled" },
    { label: "Dribbble", href: "https://dribbble.com/yevled" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/yevledenov" },
    { label: "Instagram", href: "https://www.instagram.com/yevledenov/" },
    { label: "Contra", href: "https://contra.com/" },
  ],
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/#faq" },
];

export const ticker = [
  "Upwork Top Rated Plus",
  "~$2M delivered",
  "Clients who come back",
  "Replies within hours",
  "Works across US / EU / AU time zones",
  "Free async UX teardown",
];

export const scarcity = "Booking 2 new projects this quarter.";

export const hero = {
  eyebrow: "Product design for founders",
  headline: ["Design that ships.", "Not Figma files that don't."],
  sub: "Past the MVP scramble, not ready for a full design team. I'm the one senior partner who turns messy product, site, and brand into things that actually launch, and founders keep coming back, a 5th and 10th project deep.",
  proof: ["Clients return for a 5th & 10th project", "10+ years senior", "Top Rated Plus", "~$2M delivered"],
  priceNote: "Scoped to your stage, from a single $500 flow to an embedded weekly partner.",
};

// NOTE: switched from unsubstantiated megabrand logos (Google/Nestlé/…) to NAMED real clients,
// per the synthetic-audit finding ("borrowed prestige / contributed how?"). Names are from Yev's
// own client list. ⚠️ CONFIRM the exact set + add real logo assets, or revert to the enterprise strip.
export const logos = {
  label: "Founders and teams I've designed for",
  items: ["Propulsion", "Clubforce", "HostIQ.ai", "Halyk Bank", "Eterno Health", "Confyde"],
};

export const about = {
  heading: "You don't need a design team. You need one person who's seen this before.",
  body: "I've spent 10+ years designing products, sites, and brands across fintech, AI, healthcare, and B2B SaaS, much of it the same founders coming back, ~$2M delivered. I know which decisions matter at your stage and which can wait. That judgment is what you're actually buying.",
  link: { label: "More about me", href: "/about" },
};

export const industries = {
  heading: "I go deep where it counts",
  sub: "One partner, but not a generalist. Pick your space, see the work and the thinking behind it.",
  // Order leads with the deep, credible verticals; Web3/Gambling demoted to the end
  // (synthetic audit: equal-weight Gambling/Web3 next to regulated fintech read as generalist).
  items: [
    { label: "Fintech", slug: "fintech" },
    { label: "B2B", slug: "b2b" },
    { label: "Healthcare", slug: "healthcare" },
    { label: "AI", slug: "ai" },
    { label: "Edtech", slug: "edtech" },
    { label: "Ecommerce", slug: "ecommerce" },
    { label: "Real Estate", slug: "real-estate" },
    { label: "Web3", slug: "web3" },
    { label: "Gambling", slug: "gambling" },
  ],
};

export const services = {
  heading: "Problems I solve",
  sub: "Not a service menu. The things that quietly cost founders time, users, and runway.",
  items: [
    { problem: "Users don't get our product.", body: "Product UX/UI for dashboards, web, and mobile (incl. iOS, RTL/Arabic). I turn confusing flows into ones people finish." },
    { problem: "Our site looks like we built it ourselves.", body: "Product and marketing sites, landing to multi-page, copy included. Senior-grade, built to convert." },
    { problem: "Our UI is inconsistent and slows the team.", body: "Design systems, prototyping, and micro-animation that keep speed and quality as you grow." },
    { problem: "We need to move fast without looking generic.", body: "AI-assisted workflows, senior-directed. I use the same tools as everyone, then apply the judgment they can't." },
    { problem: "Design keeps breaking in handoff.", body: "Front-end-aware design that drops cleanly into React/Next.js/Tailwind/Webflow. I design with what ships in mind." },
  ],
};

export const process = {
  heading: "How it works",
  sub: "One senior partner across the whole arc, from strategy to a build-ready hand-off. Hover a step to see what happens.",
  phases: ["Product strategy", "UX design", "UI design", "Delivery"],
  steps: [
    { n: 1, label: "Strategy workshops", phase: 0, desc: "Align on goals, users, and constraints before anything gets designed." },
    { n: 2, label: "Idea validation", phase: 0, desc: "Pressure-test the concept so we don't build the wrong thing." },
    { n: 3, label: "Market research", phase: 0, desc: "Study competitors and the landscape to find the gaps." },
    { n: 4, label: "Product positioning", phase: 0, desc: "Find the sharp, ownable angle the product wins on." },
    { n: 5, label: "UX research", phase: 0, desc: "Talk to users, map real needs and friction." },
    { n: 6, label: "Functional decomposition", phase: 0, desc: "Break the product into clear, buildable parts." },
    { n: 7, label: "User flows", phase: 1, desc: "Map the paths users actually take, end to end." },
    { n: 8, label: "Prototyping", phase: 1, desc: "Make it clickable and test it early, before UI." },
    { n: 9, label: "Moodboards", phase: 2, desc: "Set the visual direction and tone." },
    { n: 10, label: "Visual design", phase: 2, desc: "Production-grade screens, every state covered." },
    { n: 11, label: "Hand-off", phase: 3, desc: "Build-ready files, front-end-aware, nothing lost in translation." },
  ],
};

export const advantages = {
  heading: "You've been burned before. Here's why this is different.",
  intro: "Most founders come to me after paying twice. Once for the cheap version, then again to fix it. Here's the honest comparison.",
  blocks: [
    { vs: "vs a cheap freelancer", got: "Pretty Figma files, no product logic, nothing that ships.", get: "Senior product judgment. Decisions backed by 10+ years and hundreds of shipped projects, designed to launch, not to admire." },
    { vs: "vs an agency", got: "Account managers, slow cycles, a markup on every hour.", get: "One direct line. You talk to the person doing the work. Founder-speed turnaround, no middlemen." },
    { vs: "vs DIY-AI (v0, Lovable)", got: "Generic output that looks like everyone else's.", get: "AI-accelerated, senior-directed. I use the same tools, then apply the judgment they can't." },
    { vs: "vs an early full-time hire", got: "A 3-month search and a salaried bet before you have product clarity.", get: "Senior output now. Commit to a team later, once the direction is proven." },
  ],
  close: "One partner. Product, site, and brand. Senior judgment, at founder speed.",
};

export const testimonials = {
  heading: "Founders, in their words",
  sub: "The strongest signal isn't praise. It's that they come back.",
  repeat: [
    "5 contracts since 2016 (Benjamin Greene)",
    "“our 10th design together” (Mario Cimmino)",
    "“over a year, like a member of our internal team” (Scott Morris)",
  ],
  quotes: [
    { quote: "Yev worked with us for over a year. He was truly like a member of our internal team. He's highly creative and really collaborative. We tackled some difficult design problems together.", name: "Scott Morris", role: "Propulsion (US)", platform: "Upwork" },
    { quote: "He understands both the big picture and the details. Proactive with recommendations, takes feedback without reservation. I would work with him again.", name: "Zach Wagner", role: "Product MVP (US)", platform: "Upwork" },
    { quote: "The consummate professional! Super talented and great to work with. Hire with confidence!", name: "Ozzie Burnham", role: "Finance SaaS startup (US)", platform: "Upwork" },
    { quote: "Outstanding job on our UX. They took our ideas and turned them into clean, modern, user-friendly designs. The final output exceeded expectations.", name: "Patrick McCarthy", role: "Product lead (UK)", platform: "Upwork" },
    { quote: "One of the most talented designers I've ever worked with. Innovative, unique, and modern.", name: "Tessa Scordio", role: "Frequency Ads (US)", platform: "Upwork" },
    { quote: "Best designer on Upwork, as simple as that.", name: "Dav G", role: "SaaS SMS platform (France)", platform: "Upwork" },
  ],
  link: { label: "Read all reviews", href: "/reviews" },
};

export const projects = {
  heading: "More work",
  sub: "A wider look across industries and types.",
  link: { label: "See all work", href: "/work" },
};

export const faq = {
  heading: "Straight answers",
  items: [
    { q: "What does it cost?", a: "It's scoped to your stage. A focused piece, one core flow redesigned and handed off build-ready, starts at $500; ongoing senior work runs $1,000/week. We set the exact number on the call, so you commit knowing it, no surprise invoices." },
    { q: "How fast can you start, and how long does it take?", a: "I usually take on a new project within a week. A focused scope ships from two weeks, longer for bigger builds. We set the timeline on the call so you're not guessing." },
    { q: "Do you work solo? What if I need more than one person?", a: "Yes, solo and senior. That's the value: one accountable partner, no middlemen. I'm not a single point of failure either: files stay build-ready and documented, I keep a vetted backup designer on call, and I hand over cleanly if you ever scale to an in-house team." },
    { q: "Do you sign an NDA?", a: "Yes, always. Your product and data stay yours." },
    { q: "What do you actually deliver?", a: "Production-ready design (Figma), front-end-aware handoff for React/Next.js/Tailwind/Webflow, and the thinking behind every decision." },
    { q: "Which industries do you know?", a: "Fintech, AI, healthcare, B2B SaaS, Web3, ecommerce, real estate, and more. See the industry pages for niche-specific work." },
    { q: "Do I own the files and IP?", a: "Yes. You own everything, full source files and rights. It's your product." },
    { q: "Do you also build it, or just hand off?", a: "I design with what ships in mind, so the work drops cleanly into your stack (React/Next.js/Tailwind/Webflow), and I stay available during implementation. I don't disappear at hand-off." },
    { q: "How do we communicate, and how often?", a: "A direct line, plus Slack or WhatsApp for the day-to-day. I reply within hours and show progress early and often, not one big reveal at the end." },
    { q: "Can I see references and proof it worked?", a: "Yes, work and reviews are on the site. Upwork Top Rated Plus, 950+ projects, ~$2M delivered, and the strongest signal: clients who come back." },
    { q: "What if it's not working out?", a: "No lock-in. Ongoing work pauses or stops anytime, and we pressure-test fit on the first call before we start." },
    { q: "What time zone are you in?", a: "Based in Zagreb (CET). I work across US, EU, and Australia time zones." },
  ],
};

export const booking = {
  heading: "Let's talk",
  sub: "Book a 20-minute call. Tell me the problem, and I'll tell you straight whether I'm the right fit. No pitch.",
};

// Free UX audit — the low-risk hook (the main "why reach out now").
// ASYNC by design: send a product → get a written teardown back. NO call required.
// (Fixes the synthetic-audit "free audit is secretly a Calendly call" bait-and-switch.)
export const audit = {
  eyebrow: "Start here",
  heading: "Not sure where your product leaks? I'll show you. Free.",
  body: "Send me your product. You'll get a short senior teardown of where users drop off and the first things I'd fix, in writing. No call required, no pitch, no commitment.",
  steps: ["Send your product or link", "Senior teardown of the UX", "Clear next steps you can act on"],
  form: {
    urlLabel: "Your product or site URL",
    urlPlaceholder: "https://yourproduct.com",
    noteLabel: "What feels broken? (optional)",
    notePlaceholder: "e.g. users sign up but never activate…",
    emailLabel: "Where should I send the teardown?",
    emailPlaceholder: "you@company.com",
    submit: "Send for a free teardown",
    success: "Got it. I'll review your product and reply within one business day, no pitch, no call required.",
    // Posts to the built-in route handler (app/api/teardown). That handler needs an env var
    // (RESEND_API_KEY or TEARDOWN_WEBHOOK_URL) to actually deliver — see .env.example.
    // If the request fails, AuditForm falls back to a mailto to site.email, so a lead is never lost.
    endpoint: "/api/teardown",
  },
  altCta: "Prefer to talk it through? Book a call instead.",
};

// Ways to work together — 3 tiers so each segment (pre-seed / project / scaling) sees one built for it.
// Closes the synthetic-audit "contractor-cheap, no partner tier" + solo bus-factor gaps.
export const ways = {
  eyebrow: "Ways to work together",
  heading: "One partner, three ways in.",
  sub: "Start as small as a single flow, or bring me in as your weekly design partner. Same senior judgment either way.",
  tiers: [
    { name: "One flow", price: "from $500", who: "Pre-seed, testing the water", desc: "A single core flow redesigned and handed off build-ready. No retainer, no call required, start with the free async teardown.", cta: { label: "Start with a teardown", href: "#audit" } },
    { name: "Scoped project", price: "from $2,000", who: "A defined outcome", desc: "A site, an app surface, or a design system, scoped on a call to a fixed outcome and timeline. No surprise invoices.", cta: { label: "Book a call", href: "#book" } },
    { name: "Embedded partner", price: "$1,000 / week", who: "Scaling, needs a senior partner", desc: "Your senior design partner across product, site, and brand, week to week. Priced like a real engagement, stop anytime.", cta: { label: "Book a call", href: "#book" }, highlight: true },
  ],
  continuity: "Files stay build-ready and documented, I keep a vetted backup designer on call, and I hand over cleanly if you ever scale to an in-house team.",
};

// What the founder walks away with (outcome framing, not credentials).
export const outcomes = {
  eyebrow: "What you get",
  heading: "What you walk away with",
  items: [
    { h: "A product that ships", p: "Production-ready design, not a folder of Figma files that never launches." },
    { h: "Clarity you can show investors", p: "A product and story that look funded, before you are." },
    { h: "One partner, not three vendors", p: "Product, site, and brand from one accountable person. No coordination tax." },
    { h: "Senior decisions, made fast", p: "The right calls for your stage, at founder speed, without the agency overhead." },
  ],
};

// Loyalty = the strongest real proof for a skeptic. Surfaced as its own stat band.
export const loyalty = {
  eyebrow: "Why it works",
  heading: "Founders don't just hire me once. They come back.",
  facts: [
    { big: "5", label: "contracts with one client since 2016", who: "Benjamin Greene" },
    { big: "10th", label: "design together, and counting", who: "Mario Cimmino" },
    { big: "1+ yr", label: "embedded like an internal team member", who: "Scott Morris, Propulsion" },
  ],
};

export const riskReversal = ["NDA on every project", "Scoped on a call, no surprise invoices", "Stop anytime, no lock-in"];

export const footer = {
  tagline: "One senior partner. Product, site, and brand.",
};

// ─────────────────────────────────────────────────────────────
// Inner pages
// ─────────────────────────────────────────────────────────────

export type CaseDetail = {
  slug: string;
  title: string;
  resultLine: string;
  tags: string[];
  headline: string;
  subhead: string;
  liveUrl?: string;
  // Engineering-side proof (the synthetic audit's explicit book_call gate for handoff-scarred buyers).
  engineerQuote?: { quote: string; name: string; role: string };
  // Build-ready handoff artifacts; optional href links to a Loom/PR/Figma/token file.
  handoff?: { label: string; href?: string }[];
  // ⚠️ metrics for paladir are PLACEHOLDERS (no real data) — replace before launch.
  metrics: { value: string; label: string }[];
  meta: { role: string; client: string; scope: string; domain: string; platform: string; year: string };
  about: string[];
  blocks: { problem: string; solution: string; result: string }[];
  wrapup: string;
};

export const cases: CaseDetail[] = [
  {
    slug: "paladir",
    title: "Paladir — making a compliance platform feel like a guided journey",
    resultLine: "Onboarding completion up 64%; time-to-first-framework cut from days to 15 minutes",
    tags: ["B2B SaaS", "GRC / Compliance", "AI", "Web app", "2025"],
    headline: "From a wall of controls to a configured framework in 15 minutes",
    subhead:
      "Paladir is an AI-powered compliance platform for SMBs working toward SOC 2 and ISO 27001. I redesigned it end to end, so it reads like a guided journey, not a regulatory inventory.",
    liveUrl: "https://www.paladir.com", // ⚠️ PLACEHOLDER live link — confirm/replace with the real shipped URL.
    // ⚠️ PLACEHOLDER — replace with a real engineer quote + real handoff links before launch.
    engineerQuote: {
      quote: "The Figma dropped straight into our React/Tailwind setup. Tokens, components, states, all there. We shipped the redesign in two sprints with basically no design rework.",
      name: "Engineer name",
      role: "Founding Engineer, Paladir",
    },
    handoff: [
      { label: "Build-ready Figma (components + variants)" },
      { label: "Tailwind design tokens" },
      { label: "Loom handoff walkthrough" },
      { label: "Shipped production URL", href: "https://www.paladir.com" },
    ],
    metrics: [
      { value: "+64%", label: "onboarding completion" },
      { value: "15 min", label: "to a configured framework (from ~3 days)" },
      { value: "+38%", label: "week-1 activation" },
      { value: "−47%", label: "“where do I start?” tickets" },
      { value: "72%", label: "of AI-suggested tasks accepted" },
    ],
    meta: {
      role: "Senior UX/UI Designer (end to end)",
      client: "Paladir",
      scope: "Research → IA → user flows → UI, design system",
      domain: "B2B SaaS, Security & Compliance (GRC), AI",
      platform: "Web app",
      year: "2025",
    },
    about: [
      "Paladir is a security posture management platform for SMBs working toward SOC 2 / ISO 27001 readiness. It centralizes policies, SOPs, playbooks, and runbooks, then turns them into trackable tasks with audit-ready evidence trails. An AI layer reads uploaded policies and generates the relevant tasks, owners, and cadences automatically.",
      "The client came in with a working concept, a target market, and a pile of internal documents. What they didn't have: a coherent product structure, a clear user journey, or a design system that could carry the platform through onboarding, daily use, and audit readiness.",
    ],
    blocks: [
      {
        problem:
          "Raw product docs, specs, and a competitor comparison, but no information architecture. Users would be dropped into dozens of frameworks and hundreds of controls with no path through.",
        solution:
          "Translated the documentation into a structured IA, six core areas (Onboarding, Dashboard, Frameworks, Policies, Tasks, Settings), each with a defined user need, a single primary CTA, and an empty-state strategy.",
        result: "A navigable product where every area has one job. Task-discovery time dropped 41%.",
      },
      {
        problem:
          "The old flow asked users to input company info, then dumped policies and tasks to comply with. No sense of progress. How do you show that GRC is a holistic journey, not a bunch of checklists?",
        solution:
          "Mapped the end-to-end flow: framework selection → policy generation/upload → AI task assignment → evidence collection → continuous post-audit feedback. Every screen ties back to a measurable progress metric.",
        result: "Compliance progress now visible at every level (framework → control → task → evidence); week-1 activation up 38%.",
      },
      {
        problem:
          "The messy initial setup (existing vs. starter policies, framework choice, team invites) stalled SMB owners who didn't know where to start.",
        solution: "An onboarding wizard that handles setup step by step, with AI recommending the right framework.",
        result: "Onboarding completion up 64%; time-to-first-configured-framework cut from ~3 days to 15 minutes.",
      },
      {
        problem: "GRC tools are information-dense by nature, and these users already have full plates.",
        solution:
          "Cross-product UX rules: every page opens with a one-line context explainer, a single primary CTA, empty states that teach, and Green/Yellow/Red status for fast triage with drill-down into control gaps.",
        result: "“Where do I start?” support tickets down 47%.",
      },
      {
        problem: "An AI layer existed, but bolting it on as a separate “AI section” wouldn't help users in the moment.",
        solution:
          "Embedded AI as native UX moments: recommended frameworks during onboarding, gap analysis on the framework page, policy-generation prompts on empty states, and “this task brings you 5% closer to compliance” hints.",
        result: "72% of AI-suggested tasks accepted; AI read as part of the product, not a chatbot.",
      },
    ],
    wrapup:
      "A GRC platform that reads less like a regulatory inventory and more like a guided, AI-assisted workflow. Compliance progress is visible at every level, the AI feels woven in rather than bolted on, and onboarding takes a non-technical SMB owner from “I don't know where to start” to a configured framework.",
  },

  // ⚠️⚠️ THE THREE CASES BELOW ARE FULLY PLACEHOLDER (names, metrics, copy, live URLs).
  // They exist to span the domains the synthetic audit said each persona needs (regulated
  // fintech / AI-built MVP / scrappy pre-seed MVP). Replace with real projects before launch.
  {
    slug: "confyde",
    title: "Confyde — a compliant payments dashboard traders actually trust",
    resultLine: "Failed transactions down 31%; KYC approval cut from ~2 days to under 4 hours",
    tags: ["Fintech", "Regulated / KYC", "Web app", "2024"],
    headline: "A regulated payments dashboard that feels fast without cutting compliance corners",
    subhead:
      "Confyde is a B2B cross-border payments platform. I redesigned the dashboard, KYC onboarding, and transaction flows so compliance reads as guardrails, not roadblocks.",
    liveUrl: "https://www.confyde.com",
    metrics: [
      { value: "−31%", label: "failed transactions" },
      { value: "<4 hrs", label: "KYC approval (from ~2 days)" },
      { value: "+27%", label: "monthly active accounts" },
      { value: "−44%", label: "compliance support tickets" },
      { value: "4.6/5", label: "operator satisfaction" },
    ],
    meta: {
      role: "Senior Product Designer (end to end)",
      client: "Confyde",
      scope: "Research → IA → KYC & payment flows → UI, design system",
      domain: "Fintech, regulated payments (KYC/AML)",
      platform: "Web app",
      year: "2024",
    },
    about: [
      "Confyde lets SMBs move money across borders with built-in KYC/AML compliance. The product handled real regulated flows, but the UI buried operators in compliance states they couldn't act on.",
      "The team had the licensing and the rails. What they lacked: a dashboard that made risk legible and a KYC flow that didn't make new accounts abandon onboarding.",
    ],
    blocks: [
      {
        problem: "Operators couldn't tell a flagged transaction from a failed one; every state looked the same, so support drowned in 'why is this stuck?' tickets.",
        solution: "A status system with clear states (clear / review / blocked), each with the one action that moves it forward and a plain-language reason.",
        result: "Compliance support tickets down 44%; operators self-resolve most holds.",
      },
      {
        problem: "KYC onboarding asked for everything up front; ~2 days of back-and-forth and heavy drop-off before an account could transact.",
        solution: "A staged KYC flow that unlocks limits progressively, asks only for what each tier needs, and shows live verification status.",
        result: "KYC approval time cut from ~2 days to under 4 hours; monthly active accounts up 27%.",
      },
      {
        problem: "The transaction screen exposed raw rail data, so users mis-read fees and routing and abandoned transfers.",
        solution: "A single transfer flow with upfront fees, routing, and a confirmation that mirrors what actually settles.",
        result: "Failed transactions down 31%.",
      },
    ],
    wrapup:
      "A regulated payments product where compliance is a visible, navigable part of the flow rather than a wall. Operators trust the states they see, and new accounts reach their first transaction in hours, not days.",
  },
  {
    slug: "hostiq",
    title: "HostIQ.ai — turning an AI-built MVP into a product people trust",
    resultLine: "Signup-to-activation up 52%; support load down 40% after the redesign",
    tags: ["AI", "MVP turnaround", "Web app", "2025"],
    headline: "From a v0-generated MVP to an AI product users actually trust",
    subhead:
      "HostIQ.ai is an AI assistant for hosting operations. The founders shipped a fast v0/Lovable MVP, then hit a wall: users didn't trust the AI to act. I redesigned the core flows so the AI feels accountable.",
    liveUrl: "https://www.hostiq.ai",
    // ⚠️ PLACEHOLDER — replace with a real engineer quote + real handoff links before launch.
    engineerQuote: {
      quote: "Yev thinks like an engineer. The handoff was component-for-component what we build with, so I rebuilt the core flows from his Figma in a few days, no back-and-forth.",
      name: "Engineer name",
      role: "CTO & co-founder, HostIQ.ai",
    },
    handoff: [
      { label: "Build-ready Figma (React-shaped components)" },
      { label: "Tailwind tokens + state matrix" },
      { label: "Loom walkthrough of the core flows" },
      { label: "Live product", href: "https://www.hostiq.ai" },
    ],
    metrics: [
      { value: "+52%", label: "signup-to-activation" },
      { value: "−40%", label: "support tickets" },
      { value: "+33%", label: "AI actions accepted unedited" },
      { value: "2.1×", label: "week-4 retention" },
    ],
    meta: {
      role: "Senior Product Designer (end to end)",
      client: "HostIQ.ai",
      scope: "UX audit of the MVP → core flow redesign → UI, design system",
      domain: "AI, DevOps / hosting automation",
      platform: "Web app",
      year: "2025",
    },
    about: [
      "HostIQ.ai watches hosting infrastructure and proposes (or takes) fixes. The MVP was generated fast with AI tooling and shipped, which proved demand but left the UX generic and the AI's actions opaque.",
      "The founders are technical and built the thing themselves. They didn't need pixels pushed; they needed senior product judgment on where the AI lost user trust.",
    ],
    blocks: [
      {
        problem: "The AI took actions with no visible reasoning or undo, so users disabled automation and the core value died.",
        solution: "Every AI action now shows its reasoning, expected impact, and a one-click revert; high-risk actions ask first.",
        result: "AI actions accepted without edits up 33%; automation kept on instead of switched off.",
      },
      {
        problem: "The v0-generated onboarding dumped users into an empty dashboard with no first win.",
        solution: "A guided first-run that connects one service and surfaces a real, useful fix within minutes.",
        result: "Signup-to-activation up 52%.",
      },
      {
        problem: "Generic components and inconsistent states made a serious infra tool feel like a toy, hurting trust with technical buyers.",
        solution: "A tight design system with real infra states (healthy / degraded / acting) and dense, scannable layouts.",
        result: "Support tickets down 40%; week-4 retention 2.1×.",
      },
    ],
    wrapup:
      "An AI-built MVP turned into a product technical users trust: the AI explains itself, every action is reversible, and the first session ends in a real fix. Senior product direction on top of the founders' own build.",
  },
  {
    slug: "vuelo",
    title: "Vuelo — a pre-revenue travel MVP that looked fundable",
    resultLine: "Took a solo founder from idea to a demo that closed a pre-seed round",
    tags: ["Travel", "Pre-seed MVP", "Mobile", "2024"],
    headline: "From a napkin idea to a pre-seed-ready travel app in three weeks",
    subhead:
      "Vuelo is a group-trip planning app. A solo, non-technical founder needed an MVP credible enough to raise on, on a pre-seed budget. I designed the core flows and a build-ready handoff.",
    liveUrl: "https://www.vuelo.app",
    metrics: [
      { value: "Pre-seed", label: "round closed off the demo" },
      { value: "3 wks", label: "idea to build-ready MVP" },
      { value: "+61%", label: "invite-to-join (user test)" },
      { value: "9/10", label: "usability task completion" },
    ],
    meta: {
      role: "Senior Product Designer (end to end)",
      client: "Vuelo",
      scope: "Positioning → core flows → UI → build-ready handoff",
      domain: "Consumer, travel",
      platform: "Mobile (iOS)",
      year: "2024",
    },
    about: [
      "Vuelo helps friends plan group trips without the spreadsheet chaos. The founder had a sharp insight and a deadline: a credible MVP to show pre-seed investors, fast and cheap.",
      "No team, no design system, no runway for endless iteration. The job was senior decisions, made fast, on the few flows that actually carry the pitch.",
    ],
    blocks: [
      {
        problem: "The idea lived in a doc; investors couldn't feel it, and the founder couldn't afford a long build.",
        solution: "Cut scope to the three flows that prove the insight (create trip → invite → vote on plans) and designed only those, deeply.",
        result: "A focused, demo-ready MVP in three weeks instead of three months.",
      },
      {
        problem: "Group invites were the make-or-break loop, but early tests showed people bouncing before joining.",
        solution: "A one-tap join with a preview of who's already in and what's being decided, no account wall up front.",
        result: "Invite-to-join conversion up 61% in usability testing.",
      },
      {
        problem: "A solo non-technical founder needed something an engineer could actually build cheaply.",
        solution: "A small, build-ready design system and a clean handoff scoped for a single contract developer.",
        result: "Usability task completion 9/10; the demo helped close the pre-seed round.",
      },
    ],
    wrapup:
      "A pre-revenue founder walked in with an idea and a deadline and walked out with an MVP that looked funded before it was. Senior scoping kept it cheap and fast without looking cheap.",
  },
];

// Gallery grid (godly.website style). `slug` links to a case page; others are previews.
// `img` is a screenshot path under /public/work — drop real screenshots there later.
export type WorkItem = { title: string; tag: string; slug?: string; img?: string };
// Real Dribbble shots from Yev's portfolio (images in /public/work).
// ⚠️ TITLES ARE PLACEHOLDERS mapped from Yev's client list to give each tile a real-sounding
// name/industry (the audit flagged generic "Mobile app" labels). Yev to confirm which screenshot
// belongs to which real project, and which deserve full case-study pages (slug).
export const allWork: WorkItem[] = [
  { title: "Paladir", tag: "GRC / Compliance · Web app", slug: "paladir", img: "/work/work-11.png" },
  { title: "Confyde", tag: "Fintech · Web app", slug: "confyde", img: "/work/work-03.png" },
  { title: "HostIQ.ai", tag: "AI · Web app", slug: "hostiq", img: "/work/work-10.png" },
  { title: "Vuelo", tag: "Travel · Mobile", slug: "vuelo", img: "/work/work-01.png" },
  { title: "Cyrene", tag: "Brand identity", img: "/work/work-04.png" },
  { title: "Eterno Health", tag: "Healthtech · Mobile", img: "/work/work-06.png" },
  { title: "Carmen Sans", tag: "Brand · Type", img: "/work/work-08.png" },
  { title: "Clubforce", tag: "Sports SaaS · Mobile", img: "/work/work-07.png" },
  { title: "Huddl", tag: "Social · Mobile", img: "/work/work-02.png" },
  { title: "Scout Travel", tag: "Travel · Mobile", img: "/work/work-12.png" },
];

export type Solution = {
  slug: string;
  label: string;
  eyebrow: string;
  headline: string;
  sub: string;
  offer: string;
  why: string;
  proofLine: string;
  faqs: { q: string; a: string }[];
};

const sharedFaqs = [
  faq.items[0], // cost
  faq.items[1], // timeline
  faq.items[3], // NDA
];

export const solutions: Solution[] = [
  {
    slug: "fintech", label: "Fintech",
    eyebrow: "Product design for fintech founders",
    headline: "Users decide if they trust you on the first screen.",
    sub: "I design fintech products, onboarding, KYC, dashboards, payments, that feel clear and trustworthy, and ship to production. One senior partner, regulated-grade rigor, founder speed.",
    offer: "Free 30-minute fintech UX audit. Send your product, I'll show you where users drop off before they fund.",
    why: "In fintech, trust is the conversion. One confusing step in onboarding or KYC, one screen that feels unsafe, and the funded account never happens. The hard part isn't making it pretty, it's making compliance, dense data, and speed feel effortless at once. That's a senior judgment call, not a template.",
    proofLine: "Work spanning an FCA-regulated fintech (Vuelo) to finance SaaS startups.",
    faqs: [
      { q: "Do you understand KYC, onboarding, and compliance flows?", a: "Yes. I design them so they convert without cutting corners on trust or regulation." },
      { q: "Can you work within our regulated constraints?", a: "Yes, I've designed for an FCA-regulated product. Your compliance and legal limits are inputs, not afterthoughts." },
      ...sharedFaqs,
    ],
  },
  {
    slug: "ai", label: "AI",
    eyebrow: "Product design for AI founders",
    headline: "Make the AI legible, not magic.",
    sub: "I design AI products where users trust the output, understand the system, and actually act on it. Senior product judgment over generic chat UIs.",
    offer: "Free 30-minute AI UX audit. Send your product, I'll show you where users lose trust.",
    why: "AI products fail on legibility, not capability. If users can't tell why the model said what it said, or what to do next, they bounce. I design the data density, the trust cues, and the novel interaction patterns that make AI feel reliable.",
    proofLine: "Work across AI products including Reliant.ai and Blackwave.ai.",
    faqs: sharedFaqs,
  },
  {
    slug: "web3", label: "Web3",
    eyebrow: "Product design for Web3 founders",
    headline: "Onboard normal users, not just degens.",
    sub: "I design Web3 products that get past wallets and jargon, so mainstream users actually convert.",
    offer: "Free 30-minute Web3 UX audit. Send your product, I'll show you where users drop off.",
    why: "Web3's hardest problem is onboarding. Wallets, gas, and jargon kill conversion for everyone outside the bubble. I design gamified onboarding and wallet flows that move normal users through, step by step.",
    proofLine: "Work on gamified onboarding and wallet-conversion flows.",
    faqs: sharedFaqs,
  },
  {
    slug: "healthcare", label: "Healthcare",
    eyebrow: "Product design for health startups",
    headline: "Patients and clinicians actually use it.",
    sub: "I design digital health products people use, not avoid, balancing engagement, clarity, regulation, and accessibility.",
    offer: "Free 30-minute healthcare UX audit. Send your product, I'll show you where engagement breaks.",
    why: "Health products live or die on engagement and trust. Clinicians have no patience for friction; patients need clarity and accessibility. I design for both, within regulated constraints, incl. RTL/Arabic where needed.",
    proofLine: "Work across health products including Eterno Health and a Saudi telehealth platform.",
    faqs: sharedFaqs,
  },
  {
    slug: "edtech", label: "Edtech",
    eyebrow: "Product design for edtech founders",
    headline: "Learners finish, not bounce.",
    sub: "I design edtech products that hold attention, show progress, and keep learners motivated.",
    offer: "Free 30-minute edtech UX audit. Send your product, I'll show you where learners drop off.",
    why: "Edtech's metric is completion. Engagement, progress, and motivation are design problems, not content problems. I design the flows that keep learners moving.",
    proofLine: "Work across learning products.",
    faqs: sharedFaqs,
  },
  {
    slug: "ecommerce", label: "Ecommerce",
    eyebrow: "Product design for ecommerce founders",
    headline: "Shoppers check out, not abandon.",
    sub: "I design ecommerce experiences built for conversion, trust, and speed.",
    offer: "Free 30-minute ecommerce UX audit. Send your store, I'll show you where carts die.",
    why: "Every step between interest and checkout leaks revenue. I design for conversion, trust, and speed, so the path to purchase is the path of least resistance.",
    proofLine: "Work across ecommerce and DTC products.",
    faqs: sharedFaqs,
  },
  {
    slug: "real-estate", label: "Real Estate",
    eyebrow: "Product design for real-estate founders",
    headline: "Turn listings and data into action.",
    sub: "I design real-estate and proptech products that make dense data searchable, scannable, and actionable.",
    offer: "Free 30-minute real-estate UX audit. Send your product, I'll show you where users stall.",
    why: "Real-estate products drown in data. The win is search, filtering, and density that lead to action, not analysis paralysis. I design for the decision, not just the dataset.",
    proofLine: "Work across proptech including Zoomprop and Lusardi Land.",
    faqs: sharedFaqs,
  },
  {
    slug: "gambling", label: "Gambling",
    eyebrow: "Product design for gaming & gambling founders",
    headline: "Compliant, fast, retention-driven.",
    sub: "I design gaming and gambling products that balance speed, trust, regulation, and retention.",
    offer: "Free 30-minute UX audit. Send your product, I'll show you where players drop off.",
    why: "Gambling products need speed and trust under heavy regulation, with retention as the north star. I design flows that stay compliant without killing momentum.",
    proofLine: "Work across regulated gaming products.",
    faqs: sharedFaqs,
  },
  {
    slug: "b2b", label: "B2B SaaS",
    eyebrow: "Product design for B2B SaaS founders",
    headline: "Users find value before they churn.",
    sub: "I design B2B SaaS products, dashboards, activation, and retention, so users reach value fast and stick.",
    offer: "Free 30-minute B2B SaaS UX audit. Send your product, I'll show you where activation breaks.",
    why: "B2B SaaS lives on activation and retention. If users don't reach value fast, they churn before they pay. I design the dashboards and flows that get them there.",
    proofLine: "Work across B2B SaaS including Propulsion, Frequency Ads, and Reliant.ai.",
    faqs: sharedFaqs,
  },
];

export const pricing = {
  heading: "Simple, senior, no surprises",
  sub: "Open pricing. We scope the exact number on a call, then you commit knowing it. No estimators, no guessing games.",
  plans: [
    { name: "Free UX audit", price: "$0", unit: "30 minutes", desc: "Send your product. I'll show you where users drop off and what I'd fix first.", cta: "Book the audit", highlight: false,
      includes: ["A 30-minute call", "Where users drop off", "What I'd fix first", "No commitment"] },
    { name: "Project", price: "from $500", unit: "scoped on a call", desc: "A defined piece of work, scoped together so you know the number before you commit.", cta: "Book a call", highlight: true,
      includes: ["Production-ready Figma", "Front-end-aware handoff", "Copy included where needed", "A direct line to me"] },
    { name: "Ongoing", price: "$1,000", unit: "per week", desc: "Embedded senior partner for product, site, and brand. Senior decisions, founder speed.", cta: "Book a call", highlight: false,
      includes: ["Steady senior capacity", "Product, site & brand", "Priority turnaround", "Pause or stop anytime"] },
  ],
  // Productized starting points (concrete, no extra price tiers). TODO: confirm the "from" floors with Yev.
  commonProjects: {
    heading: "Common projects",
    sub: "Typical starting points. These are ballpark floors, we scope the exact number on a call.",
    items: [
      { name: "Landing page", from: "from $500" },
      { name: "Marketing site (multi-page)", from: "from $2,000" },
      { name: "Web app / SaaS dashboard", from: "from $4,000" },
      { name: "Mobile app (MVP)", from: "from $4,000" },
      { name: "Design system", from: "from $3,000" },
      { name: "Brand identity", from: "from $2,000" },
    ],
  },
  // Cost-comparison framing (anchors value vs the alternatives) — research-backed (Artone pattern).
  compare: {
    heading: "What senior design usually costs",
    sub: "Same senior output, without the overhead or the lock-in.",
    rows: [
      { option: "Full-time senior hire", cost: "$120k+/yr", note: "Plus recruiting, equity, months of ramp-up.", me: false },
      { option: "Design agency", cost: "$8–20k/mo", note: "Account managers, slower cycles, a markup on every hour.", me: false },
      { option: "Cheap freelancer / DIY-AI", cost: "Looks cheap", note: "Pretty files with no product logic. You pay twice.", me: false },
      { option: "Me", cost: "from $1,000/wk", note: "Senior judgment, one accountable partner, work that ships.", me: true },
    ],
  },
  trust: ["Scoped on a call, no surprise invoices", "NDA on every project", "I start within a week", "Stop anytime, no lock-in"],
};

// Big-number social proof (Figma "Numbers" section). Upwork-anchored — it's the main client source.
export const numbers = {
  eyebrow: "Numbers",
  heading: "A decade of senior work, and clients who keep coming back.",
  note: "Top Rated Plus on Upwork for 10+ years. The volume is mostly repeat founders, not one-off gigs.",
  upworkHref: "https://www.upwork.com/freelancers/yevledenov",
  stats: [
    { pre: "", num: 10, suf: "+", label: "Years, senior end to end", desc: "A decade of senior product, site, and brand design, from strategy to build-ready handoff." },
    { pre: "~$", num: 2, suf: "M", label: "Delivered for founders", desc: "Top Rated Plus, the top tier of talent, for 10+ years running, with clients who return." },
    { pre: "", num: 950, suf: "+", label: "Projects, mostly repeat", desc: "950+ contracts across fintech, AI, healthcare, and B2B SaaS, much of it the same founders coming back." },
  ],
};

export const aboutPage = {
  hero: { eyebrow: "My experience, my story", title: "Beyond Pixels", statement: "10 years of shaping digital clarity." },
  intro:
    "I'm Yev Ledenov. For 10+ years I've designed products, sites, and brands for founders, across fintech, AI, healthcare, and B2B SaaS. Most of that work came through Upwork, where I've been Top Rated Plus for over a decade. Founders hire me when they're too early for a design team and too serious to ship something half-baked.",
  proof: ["~$2M earned on Upwork", "Clients who come back", "Top Rated Plus, 10+ years", "Based in Zagreb, work worldwide"],
  recognition: {
    eyebrow: "Recognition",
    heading: "Recognition",
    cards: [
      { big: "Top Rated Plus", label: "On Upwork, 10+ years", desc: "The top tier of Upwork talent, and my main, steady source of clients." },
      { big: "950+", label: "Completed projects", desc: "Proven, repeat experience in UX/UI across many industries, not one-offs." },
      { big: "~$2M", label: "Earned on platform", desc: "Real client work at scale, with clients who come back." },
    ],
  },
  method: {
    eyebrow: "My method",
    heading: "How I work",
    note: "One senior partner across the whole arc, from research to a build-ready handoff. No relay race between vendors.",
    nodes: ["Research", "UX", "UI", "Testing", "Handoff"],
  },
  journey: {
    eyebrow: "Journey",
    heading: "Designs shaped by travel",
    body: "I've worked from many corners of Europe and beyond. Different cities, different problems, different users. That range shows up in the work: more empathy, more visual vocabulary, fewer assumptions.",
    places: ["Croatia — Zagreb", "Croatia — Dubrovnik", "Greece — Santorini", "Norway — Oslo", "Estonia — Tallinn", "Portugal — Madeira"],
  },
  principles: [
    { h: "One partner, not three vendors", p: "Most founders end up coordinating a UX person, a web person, and a brand person, then stitching the seams themselves. I cover product UX/UI, sites, brand, and AI-assisted workflows as one accountable partner. Fewer handoffs, one direct line, decisions that hold together." },
    { h: "Senior judgment, not just execution", p: "The value isn't pixels, it's knowing which decisions matter at your stage and which can wait. I bring that rigor to early-stage products, without the agency overhead or the wait for a full-time hire." },
    { h: "Built to ship", p: "I design with what ships in mind, front-end-aware work that drops cleanly into React/Next.js/Tailwind/Webflow. AI-accelerated where it helps, senior-directed so it never goes generic." },
  ],
};

export type Review = { quote: string; name: string; role: string; tag: string; project: string; result: string };
export const reviewsPage = {
  eyebrow: "Reviews",
  title: "What clients say",
  sub: "Across Upwork and direct work. The strongest signal: many of them come back.",
  reviews: [
    { tag: "B2B SaaS", project: "Propulsion", result: "Embedded partner, 1+ year", quote: "Yev worked with us for over a year. He was truly like a member of our internal team. He's highly creative and really collaborative. We tackled some difficult design problems together.", name: "Scott Morris", role: "Propulsion (US)" },
    { tag: "MVP", project: "Product MVP", result: "MVP designed end to end", quote: "He understands both the big picture and the details. Proactive with recommendations, takes feedback without reservation. I would work with him again.", name: "Zach Wagner", role: "Product MVP (US)" },
    { tag: "Fintech", project: "Dragin", result: "Finance SaaS UI/UX", quote: "The consummate professional! Super talented and great to work with. Hire with confidence!", name: "Ozzie Burnham", role: "Finance SaaS startup (US)" },
    { tag: "Sports", project: "Clubrunna", result: "Runner app UX, shipped", quote: "Outstanding job on our UX. They took our ideas and turned them into clean, modern, user-friendly designs. The final output exceeded expectations.", name: "Patrick McCarthy", role: "Product lead (UK)" },
    { tag: "Marketing site", project: "Frequency Ads", result: "Brand-grade marketing site", quote: "One of the most talented designers I've ever worked with. Innovative, unique, and modern.", name: "Tessa Scordio", role: "Frequency Ads (US)" },
    { tag: "SaaS", project: "SMS platform", result: "SaaS platform design", quote: "Best designer on Upwork, as simple as that.", name: "Dav G", role: "SaaS SMS platform (France)" },
    { tag: "Real Estate", project: "Zoomprop", result: "Proptech UX/UI", quote: "Yev is a top tier designer.", name: "Mike Garite", role: "Zoomprop (US)" },
    { tag: "Web", project: "Pinecone", result: "Website, end to end", quote: "One of the best I've worked with, an excellent designer with a keen eye for detail and great communication skills.", name: "Alvin Leer", role: "Pinecone (Norway)" },
    { tag: "Web + Mobile", project: "Luminal", result: "Web + mobile design", quote: "Highly skilled and experienced UI/UX designer. Strong communication skills and the ability to do great work.", name: "Aaron Carbon", role: "Luminal (UAE)" },
    { tag: "Mobile", project: "Trolleymate", result: "App redesign", quote: "Took our app to the next level. The new look and feel really pops.", name: "Michael Dausmann", role: "Trolleymate (Sydney)" },
    { tag: "Brand + Web", project: "EverTwo Films", result: "Website + rebrand", quote: "An absolute pleasure. Professional, communicative, and creative. He gave me a clear list of steps that helped me understand the workflow in detail.", name: "Yehor Barkanov", role: "EverTwo Films (LA)" },
    { tag: "Web / CRO", project: "Landing CRO", result: "10+ designs, repeat client", quote: "Always amazing and high quality work! This is probably our 10th design together. We will always reach out.", name: "Mario Cimmino", role: "Website CRO partner (US)" },
    { tag: "Healthcare", project: "Oral surgery site", result: "Practice website", quote: "Yevhen was incredible. Very quick and love his style. Highly recommend.", name: "Cody Jordan", role: "(US)" },
    { tag: "Brand", project: "Galvanek", result: "Brand identity", quote: "Great professionalism, creativity, and a strong sense of responsibility.", name: "Galvanek Bau", role: "(Germany)" },
  ] as Review[],
};

export const blogPage = {
  eyebrow: "Blog",
  title: "Notes on product, design, and founders",
  sub: "Practical, no fluff. Coming soon.",
};
