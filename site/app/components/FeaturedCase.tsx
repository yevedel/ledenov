import Link from "next/link";
import Reveal from "./Reveal";
import { cases } from "../content";

// Homepage proof anchor: one real, clickable shipped case with hard before/after metrics.
// Directly answers the synthetic-audit "show me one real thing that shipped" flip-condition.
export default function FeaturedCase() {
  const c = cases[0];
  return (
    <section id="featured-case" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">Featured case</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{c.headline}</h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-sub">{c.subhead}</p>
        </Reveal>

        <Reveal className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {c.metrics.slice(0, 4).map((m) => (
            <div key={m.label} className="bg-surface p-6">
              <div className="text-4xl font-semibold tracking-[-0.03em] text-orange">{m.value}</div>
              <p className="mt-2 text-[14px] leading-snug text-sub">{m.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={`/work/${c.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-orange-ink"
          >
            Read the full case →
          </Link>
          {c.liveUrl && (
            <a
              href={c.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-ink hover:text-orange"
            >
              View it live ↗
            </a>
          )}
          <span className="text-[13px] text-sub">{c.tags.slice(0, 3).join(" · ")}</span>
        </Reveal>
      </div>
    </section>
  );
}
