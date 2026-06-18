import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crumbs } from "../../components/Bits";
import Reveal from "../../components/Reveal";
import LetsTalk from "../../components/LetsTalk";
import { Process, BookCall } from "../../components/Sections";
import { solutions, faq } from "../../content";

export function generateStaticParams() {
  return solutions.map((s) => ({ industry: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const s = solutions.find((x) => x.slug === industry);
  if (!s) return { title: "Solutions — Yev Ledenov" };
  return { title: `${s.label} product design — Yev Ledenov`, description: s.sub };
}

export default async function SolutionPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const s = solutions.find((x) => x.slug === industry);
  if (!s) notFound();

  return (
    <>
      <Crumbs items={[{ label: "Solutions", href: "/#industries" }, { label: s.label }]} />

      {/* Screen 1: offer + form */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] rounded-full opacity-60" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">{s.eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">{s.headline}</h1>
            <p className="mt-5 text-[18px] leading-relaxed text-sub">{s.sub}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LetsTalk variant="primary" label="Book a call" />
              <LetsTalk variant="ghost" label="Get the free audit" />
            </div>
          </div>

          {/* Offer card + mini form (visual; TODO wire to a form backend) */}
          <div className="rounded-card border border-line bg-surface p-7">
            <h2 className="text-lg font-semibold text-ink">Free 30-minute {s.label} UX audit</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-sub">{s.offer}</p>
            <div className="mt-5 space-y-3">
              <input className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-[14px] outline-none focus:border-orange" placeholder="Name" aria-label="Name" />
              <input className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-[14px] outline-none focus:border-orange" placeholder="Email" type="email" aria-label="Email" />
              <input className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-[14px] outline-none focus:border-orange" placeholder="Product URL" aria-label="Product URL" />
              <LetsTalk variant="primary" label="Send request" />
            </div>
          </div>
        </div>
      </section>

      {/* Why this industry */}
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">Why {s.label.toLowerCase()}</p>
          <p className="mt-4 text-[20px] leading-relaxed text-ink">{s.why}</p>
          <p className="mt-5 text-[15px] text-sub">{s.proofLine}</p>
        </div>
      </section>

      {/* Work in this niche (placeholder) */}
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">{s.label} work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 60} className="flex aspect-[4/3] items-center justify-center rounded-card border border-dashed border-line2 bg-surface text-[13px] text-sub">
                Case study →
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* Industry FAQ */}
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">{faq.heading}</h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
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
