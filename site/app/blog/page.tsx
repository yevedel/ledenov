import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import { BookCall } from "../components/Sections";
import { blogPage } from "../content";

export const metadata: Metadata = {
  title: "Blog — Yev Ledenov",
  description: blogPage.sub,
};

export default function Blog() {
  return (
    <>
      <PageHero eyebrow={blogPage.eyebrow} title={blogPage.title} sub={blogPage.sub} />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-card border border-dashed border-line2 bg-surface p-10 text-center text-[15px] text-sub">
            Articles are on the way. In the meantime, the fastest way to get value is a call.
          </div>
        </div>
      </section>
      <BookCall />
    </>
  );
}
