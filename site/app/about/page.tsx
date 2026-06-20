import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import Numbers from "../components/Numbers";
import { BookCall } from "../components/Sections";
import { aboutPage } from "../content";

export const metadata: Metadata = {
  title: "About — Yev Ledenov",
  description: aboutPage.intro,
  alternates: { canonical: "/about" },
  openGraph: { title: "About — Yev Ledenov", description: aboutPage.intro, url: "/about" },
};

const a = aboutPage;

export default function About() {
  return (
    <>
      {/* Hero — Beyond Pixels */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] rounded-full opacity-70" />
        <div className="relative mx-auto max-w-5xl px-6 pb-10 pt-24 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">{a.hero.eyebrow}</p>
          <h1 className="mt-5 text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-ink sm:text-8xl lg:text-9xl">
            {a.hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-md text-2xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">
            {a.hero.statement}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4 pt-2">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="text-[18px] leading-relaxed text-sub">{a.intro}</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {a.proof.map((p) => (
                <li key={p} className="rounded-full bg-tint px-3 py-1 text-[13px] font-medium text-orange-ink">{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Numbers (Upwork-anchored social proof) */}
      <Numbers />

      {/* Recognition */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sub">{a.recognition.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-orange sm:text-5xl">{a.recognition.heading}</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {a.recognition.cards.map((c, i) => (
              <Reveal key={i} delay={i * 70} className="rounded-card border border-line bg-surface p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                    <path d="M3 8l4 4 5-7 5 7 4-4v9H3z" />
                  </svg>
                </div>
                <div className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-orange">{c.big}</div>
                <div className="mt-2 text-[16px] font-semibold text-ink">{c.label}</div>
                <p className="mt-1 text-[14px] leading-relaxed text-sub">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sub">{a.method.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-orange sm:text-5xl">{a.method.heading}</h2>
          </Reveal>
          <Reveal className="mt-12">
            <span className="inline-block rounded-full border border-line bg-surface px-5 py-2 text-[14px] font-medium text-ink shadow-sm">
              My method
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {a.method.nodes.map((n, i) => (
                <span key={n} className="flex items-center gap-2">
                  {i > 0 && <span className="text-line2" aria-hidden>→</span>}
                  <span className="rounded-full bg-tint px-4 py-2 text-[15px] font-medium text-orange-ink">{n}</span>
                </span>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-sub">{a.method.note}</p>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sub">{a.journey.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-orange sm:text-5xl">{a.journey.heading}</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-[17px] leading-relaxed text-sub">{a.journey.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {a.journey.places.map((p) => (
                  <li key={p} className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-ink">{p}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="grid grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`aspect-[4/3] rounded-card border border-line bg-gradient-to-br ${
                    ["from-tint to-[#ffd2c0]", "from-[#f4f4f5] to-[#e7e7ea]", "from-[#fbe9e2] to-[#eef0f2]", "from-[#eef0f2] to-[#e2e4e7]"][i]
                  } ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                />
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="divide-y divide-line border-y border-line">
            {a.principles.map((s, i) => (
              <Reveal key={i} className="py-8">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink">{s.h}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-sub">{s.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookCall />
    </>
  );
}
