import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import Reveal from "../components/Reveal";
import LetsTalk from "../components/LetsTalk";
import { BookCall } from "../components/Sections";
import { pricing, faq } from "../content";

export const metadata: Metadata = {
  title: "Pricing — Yev Ledenov",
  description: pricing.sub,
};

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title={pricing.heading} sub={pricing.sub} glow />
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
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-sub">{p.desc}</p>
                <div className="mt-6">
                  <LetsTalk variant={p.highlight ? "primary" : "ghost"} label={p.cta} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">Pricing questions</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {faq.items.slice(0, 3).map((item, i) => (
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
