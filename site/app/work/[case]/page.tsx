import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crumbs } from "../../components/Bits";
import Reveal from "../../components/Reveal";
import { BookCall } from "../../components/Sections";
import LetsTalk from "../../components/LetsTalk";
import { cases } from "../../content";

export function generateStaticParams() {
  return cases.map((c) => ({ case: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ case: string }>;
}): Promise<Metadata> {
  const { case: slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return { title: "Case study — Yev Ledenov" };
  return { title: `${c.title} — Yev Ledenov`, description: c.subhead };
}

export default async function CasePage({ params }: { params: Promise<{ case: string }> }) {
  const { case: slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <Crumbs items={[{ label: "Work", href: "/work" }, { label: c.meta.client }]} />

      {/* Hero: result-first */}
      <section className="pt-8">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span key={t} className="rounded-full bg-tint px-2.5 py-1 text-[12px] font-medium text-orange-ink">{t}</span>
            ))}
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
            {c.headline}
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-sub">{c.subhead}</p>
          {c.liveUrl && (
            <a
              href={c.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-orange hover:underline"
            >
              View it live ↗
            </a>
          )}
        </div>
      </section>

      {/* Metrics row */}
      <section className="pt-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
            {c.metrics.map((m) => (
              <div key={m.label} className="bg-surface p-5">
                <div className="text-2xl font-semibold tracking-[-0.02em] text-orange">{m.value}</div>
                <div className="mt-1 text-[13px] leading-snug text-sub">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero visual placeholder */}
      <section className="pt-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex aspect-[16/9] items-center justify-center rounded-card border border-dashed border-line2 bg-surface text-[13px] text-sub">
            Hero visual (product screen)
          </div>
        </div>
      </section>

      {/* Metadata block */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-6">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-y border-line py-7 sm:grid-cols-3">
            {[
              ["Role", c.meta.role],
              ["Client", c.meta.client],
              ["Scope", c.meta.scope],
              ["Domain", c.meta.domain],
              ["Platform", c.meta.platform],
              ["Year", c.meta.year],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-sub">{k}</dt>
                <dd className="mt-1 text-[15px] text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          {/* About */}
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">About the product</h2>
            {c.about.map((p, i) => (
              <p key={i} className="text-[17px] leading-relaxed text-sub">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution → Result blocks */}
      <section className="pb-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-4">
            {c.blocks.map((b, i) => (
              <Reveal key={i} className="rounded-card border border-line bg-surface p-7">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-orange-ink">0{i + 1}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">
                  <span className="font-semibold">Problem. </span>{b.problem}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">
                  <span className="font-semibold">Solution. </span>{b.solution}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-orange-ink">
                  <span className="font-semibold">Result. </span>{b.result}
                </p>
                <div className="mt-5 flex aspect-[16/7] items-center justify-center rounded-lg border border-dashed border-line2 text-[12px] text-sub">
                  Before / after, flow, or screen
                </div>
              </Reveal>
            ))}
          </div>

          {/* Engineering handoff proof */}
          {(c.engineerQuote || c.handoff) && (
            <div className="mt-12 rounded-card border border-line bg-surface p-7">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-orange-ink">Built, not just designed</h2>
              {c.engineerQuote && (
                <figure className="mt-4">
                  <blockquote className="text-[17px] leading-relaxed text-ink">“{c.engineerQuote.quote}”</blockquote>
                  <figcaption className="mt-3 text-[14px] text-sub">
                    <span className="font-medium text-ink">{c.engineerQuote.name}</span> — {c.engineerQuote.role}
                  </figcaption>
                </figure>
              )}
              {c.handoff && (
                <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {c.handoff.map((h) =>
                    h.href ? (
                      <a
                        key={h.label}
                        href={h.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-line2 px-3 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-orange hover:text-orange"
                      >
                        {h.label} ↗
                      </a>
                    ) : (
                      <span key={h.label} className="rounded-full bg-tint px-3 py-1.5 text-[13px] font-medium text-orange-ink">
                        {h.label}
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          )}

          {/* Wrap-up */}
          <div className="mt-12 rounded-card bg-tint p-7">
            <h2 className="text-xl font-semibold text-ink">The outcome</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-orange-ink">{c.wrapup}</p>
          </div>

          {/* Mid CTA */}
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg font-medium text-ink">Got a dense product that should feel simple?</p>
            <LetsTalk variant="primary" label="Book a call" />
          </div>
        </div>
      </section>

      <BookCall />
    </>
  );
}
