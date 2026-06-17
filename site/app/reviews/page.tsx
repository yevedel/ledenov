import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import Reveal from "../components/Reveal";
import { BookCall } from "../components/Sections";
import { reviewsPage } from "../content";

export const metadata: Metadata = {
  title: "Reviews — Yev Ledenov",
  description: reviewsPage.sub,
};

export default function Reviews() {
  return (
    <>
      <PageHero eyebrow={reviewsPage.eyebrow} title={reviewsPage.title} sub={reviewsPage.sub} glow />
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {reviewsPage.quotes.map((q, i) => (
              <Reveal key={i} delay={(i % 3) * 50} className="break-inside-avoid rounded-card border border-line bg-surface p-6">
                <p className="text-[15px] leading-relaxed text-ink">“{q.quote}”</p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-[14px] font-semibold text-ink">{q.name}</p>
                  <p className="text-[13px] text-sub">{q.role}</p>
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
