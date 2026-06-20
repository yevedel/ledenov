import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import { site } from "../content";

export const metadata: Metadata = {
  title: "Cookies — Yev Ledenov",
  description: `How ${site.domain} uses cookies.`,
  alternates: { canonical: "/cookies" },
};

// Baseline policy. ⚠️ Update the analytics section to match whatever (if any) analytics
// is actually deployed, and have a lawyer review before launch.
export default function Cookies() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-[16px] leading-relaxed text-sub">
          <p className="text-[14px] text-sub">Last updated: June 2026</p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">What cookies are</h2>
            <p>
              Cookies are small text files a site stores on your device. This site, {site.domain}, operated by{" "}
              {site.legal}, uses as few as possible.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">What we use</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-ink">Essential</span> — needed for the site to load and
                function. These are always on and store no marketing data.
              </li>
              <li>
                <span className="font-medium text-ink">Analytics (if enabled)</span> — privacy-respecting,
                aggregate measurement of page visits to improve the site. No selling of data, no cross-site
                advertising profiles.
              </li>
            </ul>
            <p>
              Third-party tools you actively use, such as Calendly when you book a call, may set their own
              cookies under their respective policies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">Controlling cookies</h2>
            <p>
              You can block or delete cookies in your browser settings. Disabling essential cookies may break
              parts of the site. Questions:{" "}
              <a className="text-orange hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
