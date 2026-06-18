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
  telegram: "https://t.me/yevedel",
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
  { label: "Solutions", href: "/#industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export const ticker = [
  "Upwork Top Rated Plus",
  "~$2M delivered",
  "950+ projects",
  "Replies within hours",
  "Works across US / EU / AU time zones",
  "Free 30-min UX audit",
];

export const scarcity = "Booking 2 new projects this quarter.";

export const hero = {
  eyebrow: "Product design for founders",
  headline: ["Design that ships.", "Not Figma files that don't."],
  sub: "You're too early for a design team and too serious to ship something half-baked. I'm the one senior partner who turns messy product, site, and brand into things that actually launch. ~$2M delivered across 950+ projects.",
  proof: ["~$2M delivered", "950+ projects", "Top Rated Plus", "10+ years"],
};

export const logos = {
  label: "Senior rigor brought to work for teams like",
  items: ["Google", "Nestlé", "P&G", "AB InBev", "WhatsApp"],
};

export const about = {
  heading: "You don't need a design team. You need one person who's seen this before.",
  body: "I've spent 10+ years designing products, sites, and brands across fintech, AI, healthcare, and B2B SaaS. 950+ projects, ~$2M delivered. I know which decisions matter at your stage and which can wait. That judgment is what you're actually buying.",
  link: { label: "More about me", href: "/about" },
};

export const industries = {
  heading: "I go deep where it counts",
  sub: "One partner, but not a generalist. Pick your space, see the work and the thinking behind it.",
  items: [
    { label: "AI", slug: "ai" },
    { label: "Web3", slug: "web3" },
    { label: "Fintech", slug: "fintech" },
    { label: "Healthcare", slug: "healthcare" },
    { label: "Edtech", slug: "edtech" },
    { label: "Ecommerce", slug: "ecommerce" },
    { label: "Real Estate", slug: "real-estate" },
    { label: "Gambling", slug: "gambling" },
    { label: "B2B", slug: "b2b" },
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
  sub: "Built to reduce your risk at every step, not to fill time.",
  steps: [
    { n: "01", title: "Discovery", body: "We get on a call. I learn the product, the users, the constraints, and what “shipped” means for you. You get a clear scope, no guesswork." },
    { n: "02", title: "Design", body: "I work in fast cycles, senior decisions first. You see progress early and often, not a big reveal at the end." },
    { n: "03", title: "Ship", body: "Production-ready files and front-end-aware handoff. Built to launch, not to admire in Figma." },
    { n: "04", title: "Iterate", body: "I stay close after launch. Real usage beats opinions." },
  ],
};

export const advantages = {
  heading: "You've been burned before. Here's why this is different.",
  intro: "Most founders come to me after paying twice. Once for the cheap version, then again to fix it. Here's the honest comparison.",
  blocks: [
    { vs: "vs a cheap freelancer", got: "Pretty Figma files, no product logic, nothing that ships.", get: "Senior product judgment. Decisions backed by 10+ years and 950+ projects, designed to launch, not to admire." },
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
    { quote: "Yev worked with us for over a year. He was truly like a member of our internal team. He's highly creative and really collaborative. We tackled some difficult design problems together.", name: "Scott Morris", role: "Propulsion (US)" },
    { quote: "He understands both the big picture and the details. Proactive with recommendations, takes feedback without reservation. I would work with him again.", name: "Zach Wagner", role: "Product MVP (US)" },
    { quote: "The consummate professional! Super talented and great to work with. Hire with confidence!", name: "Ozzie Burnham", role: "Finance SaaS startup (US)" },
    { quote: "Outstanding job on our UX. They took our ideas and turned them into clean, modern, user-friendly designs. The final output exceeded expectations.", name: "Patrick McCarthy", role: "Product lead (UK)" },
    { quote: "One of the most talented designers I've ever worked with. Innovative, unique, and modern.", name: "Tessa Scordio", role: "Frequency Ads (US)" },
    { quote: "Best designer on Upwork, as simple as that.", name: "Dav G", role: "SaaS SMS platform (France)" },
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
    { q: "What does it cost?", a: "Projects start at $500. For ongoing work I run at $1,000/week. We scope the exact number on the call, so you commit knowing it, no surprise invoices." },
    { q: "How fast can you start, and how long does it take?", a: "I usually take on a new project within a week. A focused scope ships from two weeks, longer for bigger builds. We set the timeline on the call so you're not guessing." },
    { q: "Do you work solo? What if I need more than one person?", a: "Yes, solo and senior. That's the value: one accountable partner, no middlemen. When you genuinely need a team, I help you build one, later, once the direction is proven." },
    { q: "Do you sign an NDA?", a: "Yes, always. Your product and data stay yours." },
    { q: "What do you actually deliver?", a: "Production-ready design (Figma), front-end-aware handoff for React/Next.js/Tailwind/Webflow, and the thinking behind every decision." },
    { q: "Which industries do you know?", a: "Fintech, AI, healthcare, B2B SaaS, Web3, ecommerce, real estate, and more. See the industry pages for niche-specific work." },
    { q: "What time zone are you in?", a: "Based in Zagreb (CET). I work across US, EU, and Australia time zones." },
  ],
};

export const booking = {
  heading: "Let's talk",
  sub: "Book a 20-minute call. Tell me the problem, and I'll tell you straight whether I'm the right fit. No pitch.",
};

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
];

// Gallery grid (godly.website style). `slug` links to a case page; others are previews.
// `img` is a screenshot path under /public/work — drop real screenshots there later.
export type WorkItem = { title: string; tag: string; slug?: string; img?: string };
export const allWork: WorkItem[] = [
  { title: "Paladir", tag: "GRC / Compliance", slug: "paladir" },
  { title: "Vuelo", tag: "Fintech" },
  { title: "HostIQ.ai", tag: "SaaS" },
  { title: "Reliant.ai", tag: "AI" },
  { title: "Propulsion", tag: "B2B SaaS" },
  { title: "Trolleymate", tag: "Mobile" },
  { title: "Zoomprop", tag: "Real Estate" },
  { title: "Eterno Health", tag: "Healthcare" },
  { title: "Vozzy", tag: "Marketplace" },
  { title: "EverTwo Films", tag: "Brand / Web" },
  { title: "Firstfan", tag: "Music / Social" },
  { title: "Clubrunna", tag: "Sports" },
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
  sub: "Open pricing. We scope the exact number on a call, then you commit knowing it.",
  plans: [
    { name: "Free UX audit", price: "$0", unit: "30 minutes", desc: "Send your product. I'll show you where users drop off and what I'd fix first.", cta: "Book the audit", highlight: false },
    { name: "Project", price: "from $500", unit: "scoped", desc: "A defined piece of work, scoped on the call. Production-ready, front-end-aware handoff.", cta: "Book a call", highlight: true },
    { name: "Ongoing", price: "$1,000", unit: "per week", desc: "Embedded senior partner for product, site, and brand. Senior decisions, founder speed, one direct line.", cta: "Book a call", highlight: false },
  ],
  faqRef: true,
};

export const aboutPage = {
  eyebrow: "About",
  title: "I'm the senior designer you hire before you can afford a team.",
  intro:
    "I'm Yev Ledenov. For 10+ years I've designed products, sites, and brands for founders, across fintech, AI, healthcare, and B2B SaaS. 950+ projects, ~$2M delivered, Upwork Top Rated Plus. Founders hire me when they're too early for a design team and too serious to ship something half-baked.",
  sections: [
    { h: "One partner, not three vendors", p: "Most founders end up coordinating a UX person, a web person, and a brand person, then stitching the seams themselves. I cover product UX/UI, sites, brand, and AI-assisted workflows as one accountable partner. Breadth isn't a gimmick, it's fewer handoffs, one direct line, and decisions that hold together." },
    { h: "Senior judgment, not just execution", p: "The value isn't pixels, it's knowing which decisions matter at your stage and which can wait. I've seen how the best operate and I bring that rigor to early-stage products, without the agency overhead or the wait for a full-time hire." },
    { h: "Built to ship", p: "I design with what ships in mind, front-end-aware work that drops cleanly into React/Next.js/Tailwind/Webflow. AI-accelerated where it helps, senior-directed so it never goes generic. The output is production-ready, not a folder of Figma files." },
  ],
  proof: ["~$2M delivered", "950+ projects", "Top Rated Plus, 10+ years", "Based in Zagreb, work worldwide"],
};

export const reviewsPage = {
  eyebrow: "Reviews",
  title: "What clients say",
  sub: "Across Upwork and direct work. The strongest signal: many of them come back.",
  quotes: [
    ...testimonials.quotes,
    { quote: "Yev is a top tier designer.", name: "Mike Garite", role: "Zoomprop (US)" },
    { quote: "One of the best I've worked with, an excellent designer with a keen eye for detail and great communication skills.", name: "Alvin Leer", role: "Pinecone (Norway)" },
    { quote: "Highly skilled and experienced UI/UX designer. Strong communication skills and the ability to do great work.", name: "Aaron Carbon", role: "Luminal (UAE)" },
    { quote: "Took our app to the next level. The new look and feel really pops.", name: "Michael Dausmann", role: "Trolleymate (Sydney)" },
    { quote: "An absolute pleasure. Professional, communicative, and creative. He gave me a clear list of steps that helped me understand the workflow in detail.", name: "Yehor Barkanov", role: "EverTwo Films (LA)" },
    { quote: "Great professionalism, creativity, and a strong sense of responsibility.", name: "Galvanek Bau", role: "(Germany)" },
    { quote: "Yevhen was incredible. Very quick and love his style. Highly recommend.", name: "Cody Jordan", role: "(US)" },
    { quote: "Always amazing and high quality work! This is probably our 10th design together. We will always reach out.", name: "Mario Cimmino", role: "Website CRO partner (US)" },
    { quote: "Fast work, to the point, very high quality.", name: "Alejandro Barrera", role: "(Chile)" },
  ],
};

export const blogPage = {
  eyebrow: "Blog",
  title: "Notes on product, design, and founders",
  sub: "Practical, no fluff. Coming soon.",
};
