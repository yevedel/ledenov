// Central copy for the homepage. Source of truth = /copy/*.md.
// Voice: sharp, diagnostic, problem-first. Proof: Upwork ~$2M / 950+ / Top Rated Plus / 10+ yrs.

export const site = {
  name: "ledenov.",
  fullName: "Yev Ledenov",
  domain: "ledenov.com",
  legal: "Ledo.digital OÜ",
  location: "Zagreb, Croatia",
  email: "hello@ledenov.com", // TODO confirm real address
  calendly: "https://calendly.com/", // TODO real Calendly link
  telegram: "https://t.me/", // TODO
  whatsapp: "https://wa.me/", // TODO
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
  sub: "Book a 30-minute call. Tell me the problem, and I'll tell you straight whether I'm the right fit. No pitch.",
  secondary: "Prefer to message? Telegram or WhatsApp. I reply fast.",
};

export const footer = {
  tagline: "One senior partner. Product, site, and brand.",
};
