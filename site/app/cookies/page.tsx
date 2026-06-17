import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import { site } from "../content";

export const metadata: Metadata = { title: "Cookies — Yev Ledenov" };

export default function Cookies() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-[16px] leading-relaxed text-sub">
          <p>{/* TODO: replace with a reviewed cookie policy. */}This is a placeholder cookie policy for {site.domain}. Replace with reviewed legal copy before launch.</p>
          <p>This site uses minimal cookies, only what's needed for basic functionality and, if enabled, privacy-respecting analytics. You can control cookies in your browser settings.</p>
        </div>
      </section>
    </>
  );
}
