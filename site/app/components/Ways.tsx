import Reveal from "./Reveal";
import { ways } from "../content";

// 3 entry tiers so pre-seed / project / scaling buyers each see a path built for them,
// plus an explicit solo-continuity (bus-factor) line. From the synthetic-audit remaining gaps.
export default function Ways() {
  return (
    <section id="ways" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">{ways.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{ways.heading}</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-sub">{ways.sub}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {ways.tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div
                className={`flex h-full flex-col rounded-card border p-7 ${
                  t.highlight ? "border-orange bg-tint/40" : "border-line bg-surface"
                }`}
              >
                <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-orange-ink">{t.who}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{t.name}</h3>
                <p className="mt-1 text-[15px] font-medium text-sub">{t.price}</p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-sub">{t.desc}</p>
                <a
                  href={t.cta.href}
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors ${
                    t.highlight
                      ? "bg-orange text-white hover:bg-orange-ink"
                      : "border border-line2 text-ink hover:border-ink"
                  }`}
                >
                  {t.cta.label} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="max-w-3xl text-[15px] leading-relaxed text-sub">
            <span className="font-medium text-ink">No bottleneck, no bus factor. </span>
            {ways.continuity}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
