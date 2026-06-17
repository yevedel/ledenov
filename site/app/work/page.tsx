import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/Bits";
import Reveal from "../components/Reveal";
import { BookCall } from "../components/Sections";
import { cases, workCards } from "../content";

export const metadata: Metadata = {
  title: "Work — Yev Ledenov",
  description: "Selected product, site, and brand work across fintech, AI, healthcare, and B2B SaaS.",
};

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Selected work"
        sub="A few in depth, not a wall of thumbnails. Product, site, and brand across fintech, AI, healthcare, and B2B SaaS."
      />
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {cases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link
                  href={`/work/${c.slug}`}
                  className="group flex h-full flex-col rounded-card border border-line bg-surface p-7 transition-colors hover:border-orange"
                >
                  <div className="flex flex-wrap gap-2">
                    {c.tags.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-tint px-2.5 py-1 text-[12px] font-medium text-orange-ink">{t}</span>
                    ))}
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink">{c.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-sub">{c.resultLine}</p>
                  <span className="mt-5 text-[15px] font-medium text-orange">Read case study →</span>
                </Link>
              </Reveal>
            ))}

            {workCards.map((w, i) => (
              <Reveal key={w.title} delay={(cases.length + i) * 60}>
                <div className="flex h-full flex-col rounded-card border border-line bg-surface p-7 opacity-90">
                  <span className="w-fit rounded-full bg-tint px-2.5 py-1 text-[12px] font-medium text-orange-ink">{w.tag}</span>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink">{w.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-sub">{w.blurb}</p>
                  <span className="mt-5 text-[14px] text-sub">Case study coming</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BookCall />
    </>
  );
}
