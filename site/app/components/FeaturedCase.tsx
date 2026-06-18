import Link from "next/link";
import Reveal from "./Reveal";
import { cases } from "../content";

// Homepage proof anchor: a lead case with hard before/after metrics, plus a row of
// additional cases across domains so the page shows a PATTERN of shipped work, not one point.
// Answers the synthetic-audit "one case is not a pattern / no proof in my domain" blocker.
export default function FeaturedCase() {
  const lead = cases[0];
  const rest = cases.slice(1, 4);
  return (
    <section id="featured-case" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">Featured case</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{lead.headline}</h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-sub">{lead.subhead}</p>
        </Reveal>

        <Reveal className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {lead.metrics.slice(0, 4).map((m) => (
            <div key={m.label} className="bg-surface p-6">
              <div className="text-4xl font-semibold tracking-[-0.03em] text-orange">{m.value}</div>
              <p className="mt-2 text-[14px] leading-snug text-sub">{m.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={`/work/${lead.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-orange-ink"
          >
            Read the full case →
          </Link>
          {lead.liveUrl && (
            <a href={lead.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-ink hover:text-orange">
              View it live ↗
            </a>
          )}
          <span className="text-[13px] text-sub">{lead.tags.slice(0, 3).join(" · ")}</span>
        </Reveal>

        {/* More cases — one line of proof per domain */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link
                href={`/work/${c.slug}`}
                className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-colors hover:border-orange"
              >
                <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-orange-ink">{c.tags[0]}</span>
                <p className="mt-3 text-[16px] font-medium leading-snug text-ink">{c.resultLine}</p>
                <span className="mt-auto pt-5 text-[14px] font-medium text-sub transition-colors group-hover:text-orange">
                  {c.meta.client} case →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
