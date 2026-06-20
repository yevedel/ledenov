import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import WorkGrid from "../components/WorkGrid";
import { BookCall } from "../components/Sections";
import { allWork } from "../content";

const workDesc = "Selected product, site, and brand work across fintech, AI, healthcare, and B2B SaaS.";
export const metadata: Metadata = {
  title: "Work — Yev Ledenov",
  description: workDesc,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work — Yev Ledenov", description: workDesc, url: "/work" },
};

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Selected work"
        sub="A few in depth, not a wall of thumbnails. Product, site, and brand across fintech, AI, healthcare, and B2B SaaS."
      />
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6">
          <WorkGrid items={allWork} masonry />
        </div>
      </section>
      <BookCall />
    </>
  );
}
