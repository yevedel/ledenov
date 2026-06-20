import type { Metadata } from "next";
import { PageHero } from "../components/Bits";
import { site } from "../content";

export const metadata: Metadata = {
  title: "Privacy — Yev Ledenov",
  description: `How ${site.legal} collects and handles personal data on ${site.domain}.`,
  alternates: { canonical: "/privacy" },
};

// Baseline GDPR-aware policy. ⚠️ Have a lawyer review before launch and adjust
// processors/retention to match what's actually deployed.
export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-[16px] leading-relaxed text-sub">
          <p className="text-[14px] text-sub">Last updated: June 2026</p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">Who is responsible for your data</h2>
            <p>
              This website ({site.domain}) is operated by {site.legal}, a company registered in Estonia
              (registry code 16774666), founded and owned by Yevhen Ledenov. For any privacy question,
              contact <a className="text-orange hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">What we collect, and why</h2>
            <p>We only collect what you choose to share with us:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-ink">Free UX teardown form</span> — the product/site URL,
                your email, and any note you add. Used solely to review your product and reply to you.
              </li>
              <li>
                <span className="font-medium text-ink">Booking a call</span> — handled by Calendly, which
                collects your name, email, and the time you pick so the meeting can be scheduled.
              </li>
              <li>
                <span className="font-medium text-ink">Direct messages</span> — if you email or message us
                (e.g. WhatsApp), we keep that correspondence to respond and follow up.
              </li>
            </ul>
            <p>
              The legal basis is your consent and our legitimate interest in responding to enquiries and
              providing the services you request. We do not sell personal data and we do not use it for
              automated decision-making.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">Service providers we use</h2>
            <p>
              We share data only with the processors needed to run the site and respond to you, under their
              own data-protection terms:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Vercel — website hosting and delivery.</li>
              <li>Resend — delivering the teardown-form email to us.</li>
              <li>Calendly — scheduling calls you book.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">How long we keep it</h2>
            <p>
              We keep enquiry and project correspondence only as long as needed to respond and to meet legal
              or accounting obligations, then delete it. You can ask us to delete your data sooner.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">Your rights</h2>
            <p>
              Under the GDPR you can request access to, correction of, or deletion of your personal data,
              object to or restrict processing, and request portability. To exercise any of these, email{" "}
              <a className="text-orange hover:underline" href={`mailto:${site.email}`}>{site.email}</a>. You
              also have the right to lodge a complaint with your local data-protection authority.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">Cookies</h2>
            <p>
              See our <a className="text-orange hover:underline" href="/cookies">Cookie Policy</a> for how this
              site uses cookies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
