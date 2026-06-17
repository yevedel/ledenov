import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import { site } from "../content";

export const metadata: Metadata = { title: "Privacy — Yev Ledenov" };

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-[16px] leading-relaxed text-sub">
          <p>{/* TODO: replace with a reviewed privacy policy. */}This is a placeholder privacy policy for {site.legal} ({site.domain}). Replace with reviewed legal copy before launch.</p>
          <p>We collect only the information you choose to share (for example, when you book a call or send a message) and use it solely to respond to you. We do not sell personal data.</p>
          <p>Questions: <a className="text-orange hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
