import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import Reveal from "../components/Reveal";
import { BookCall } from "../components/Sections";
import { aboutPage } from "../content";

export const metadata: Metadata = {
  title: "About — Yev Ledenov",
  description: aboutPage.intro,
};

export default function About() {
  return (
    <>
      <PageHero eyebrow={aboutPage.eyebrow} title={aboutPage.title} glow />
      <section className="pb-8">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[18px] leading-relaxed text-sub">{aboutPage.intro}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {aboutPage.proof.map((p) => (
              <li key={p} className="rounded-full bg-tint px-3 py-1 text-[13px] font-medium text-orange-ink">{p}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <div className="divide-y divide-line border-y border-line">
            {aboutPage.sections.map((s, i) => (
              <Reveal key={i} className="py-8">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">{s.h}</h2>
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
