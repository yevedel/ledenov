import Link from "next/link";
import { footer, site, nav } from "../content";
import LetsTalk from "./LetsTalk";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      {/* SEO content block (placeholder — replace with human-written copy, not AI) */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <details className="text-[14px] text-sub">
          <summary className="cursor-pointer select-none font-medium text-ink">About Yev Ledenov, senior product designer</summary>
          <p className="mt-3 max-w-3xl leading-relaxed">
            {/* TODO: replace with human-written SEO copy (not AI-generated). */}
            Yev Ledenov is a senior product designer working with startup founders across the US, Europe, and
            Australia, covering product UX/UI, websites, brand, and AI-assisted design. Industries include fintech,
            AI, healthcare, B2B SaaS, Web3, ecommerce, and real estate.
          </p>
        </details>
      </div>

      <div className="mx-auto max-w-6xl border-t border-line px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-xl font-semibold text-ink">{footer.tagline}</p>
            <div className="mt-5">
              <LetsTalk variant="primary" label="Book a call" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-sub">Site</p>
              <ul className="mt-3 space-y-2">
                {nav.map((n) => (
                  <li key={n.label}>
                    <Link href={n.href} className="text-[14px] text-ink hover:text-orange">{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-sub">Connect</p>
              <ul className="mt-3 space-y-2">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[14px] text-ink hover:text-orange">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-sub">Contact</p>
              <ul className="mt-3 space-y-2 text-[14px] text-ink">
                <li><a href={`mailto:${site.email}`} className="hover:text-orange">{site.email}</a></li>
                <li><a href={site.telegram} className="hover:text-orange">Telegram</a></li>
                <li><a href={site.whatsapp} className="hover:text-orange">WhatsApp</a></li>
                <li className="text-sub">{site.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[13px] text-sub sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legal}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/cookies" className="hover:text-ink">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
