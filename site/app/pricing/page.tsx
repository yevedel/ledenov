import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/Bits";
import Reveal from "../components/Reveal";
import LetsTalk from "../components/LetsTalk";
import { BookCall } from "../components/Sections";
import { pricing, faq } from "../content";

export const metadata: Metadata = {
  title: "Pricing — Yev Ledenov",
  description: pricing.sub,
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing — Yev Ledenov", description: pricing.sub, url: "/pricing" },
};

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title={pricing.heading} sub={pricing.sub} glow />

      {/* Plans */}
      <section className="pb-8 pt-4">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {pricing.plans.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 70}
                className={`flex flex-col rounded-card border p-7 ${
                  p.highlight ? "border-orange bg-surface shadow-[0_12px_40px_rgba(255,62,2,0.08)]" : "border-line bg-surface"
                }`}
              >
                <h2 className="text-[15px] font-semibold uppercase tracking-[0.06em] text-orange-ink">{p.name}</h2>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-[-0.02em] text-ink">{p.price}</span>
                  <span className="text-[14px] text-sub">{p.unit}</span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-sub">{p.desc}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {p.includes.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[14px] text-ink">
                      <span className="mt-0.5 text-orange" aria-hidden>✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  {p.price === "$0" ? (
                    <Link
                      href="/#audit"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-line2 px-5 py-2.5 text-[15px] font-medium text-ink transition-colors hover:border-ink"
                    >
                      {p.cta} →
                    </Link>
                  ) : (
                    <LetsTalk variant={p.highlight ? "primary" : "ghost"} label={p.cta} align="left" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Common projects */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{pricing.commonProjects.heading}</h2>
            <p className="mt-3 text-[17px] text-sub">{pricing.commonProjects.sub}</p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {pricing.commonProjects.items.map((p, i) => (
              <Reveal
                key={p.name}
                delay={(i % 2) * 50}
                className="flex items-baseline justify-between gap-4 bg-surface px-6 py-5"
              >
                <span className="text-[16px] font-medium text-ink">{p.name}</span>
                <span className="shrink-0 text-[15px] font-semibold text-orange">{p.from}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cost comparison vs alternatives */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{pricing.compare.heading}</h2>
            <p className="mt-3 text-[17px] text-sub">{pricing.compare.sub}</p>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-card border border-line">
            {pricing.compare.rows.map((r, i) => (
              <Reveal
                key={r.option}
                delay={i * 50}
                className={`grid grid-cols-1 gap-1 border-b border-line p-5 last:border-b-0 sm:grid-cols-[1fr_auto_1.5fr] sm:items-center sm:gap-6 ${
                  r.me ? "bg-tint" : "bg-surface"
                }`}
              >
                <span className={`text-[16px] font-semibold ${r.me ? "text-orange-ink" : "text-ink"}`}>{r.option}</span>
                <span className={`text-[18px] font-semibold ${r.me ? "text-orange" : "text-ink"}`}>{r.cost}</span>
                <span className="text-[14px] text-sub">{r.note}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-line py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.trust.map((t) => (
              <Reveal key={t} className="flex items-start gap-2 text-[15px] text-ink">
                <span className="mt-0.5 text-orange" aria-hidden>✓</span>
                {t}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">{faq.heading}</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {faq.items.map((item, i) => (
              <div key={i} className="py-5">
                <dt className="text-[17px] font-medium text-ink">{item.q}</dt>
                <dd className="mt-2 text-[16px] text-sub">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <BookCall />
    </>
  );
}
