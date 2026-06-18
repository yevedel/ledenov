import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import Reveal from "../components/Reveal";
import { BookCall } from "../components/Sections";
import { reviewsPage } from "../content";

export const metadata: Metadata = {
  title: "Reviews — Yev Ledenov",
  description: reviewsPage.sub,
};

const grads = [
  "from-tint to-[#ffd2c0]",
  "from-[#f4f4f5] to-[#e7e7ea]",
  "from-[#fbe9e2] to-[#eef0f2]",
  "from-[#ededed] to-[#fbfbfb]",
  "from-[#fff0e9] to-[#f1f1f1]",
  "from-[#eef0f2] to-[#e2e4e7]",
];

export default function Reviews() {
  return (
    <>
      <PageHero eyebrow={reviewsPage.eyebrow} title={reviewsPage.title} sub={reviewsPage.sub} glow />
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviewsPage.reviews.map((r, i) => (
              <Reveal key={i} delay={(i % 3) * 50} className="flex flex-col rounded-card border border-line bg-surface p-6">
                <span className="w-fit rounded-full bg-tint px-2.5 py-1 text-[12px] font-medium text-orange-ink">{r.tag}</span>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">“{r.quote}”</p>

                {/* project thumbnail + author */}
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <div
                    className={`flex h-11 w-[68px] shrink-0 items-center justify-center rounded-lg border border-line bg-gradient-to-br ${grads[i % grads.length]}`}
                    aria-hidden
                  >
                    <span className="px-1 text-center text-[10px] font-semibold leading-tight text-ink/45">{r.project}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[14px] font-semibold text-ink">{r.name}</p>
                    <p className="truncate text-[12px] text-sub">{r.role}</p>
                  </div>
                </div>

                {/* brief result */}
                <p className="mt-2.5 flex items-center gap-1.5 text-[13px] text-orange-ink">
                  <span aria-hidden>↗</span>
                  {r.result}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BookCall />
    </>
  );
}
