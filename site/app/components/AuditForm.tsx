"use client";

import { useState } from "react";
import { audit, site } from "../content";

// Async free-audit door: send a product URL + get a written teardown back. NO Calendly.
// Submits to audit.form.endpoint if set; otherwise falls back to a prefilled mailto to site.email.
// `compact` = stacked single-column layout for the industry-page card. `source` tags the lead.
export default function AuditForm({ compact = false, source }: { compact?: boolean; source?: string }) {
  const f = audit.form;
  const [url, setUrl] = useState("");
  const [note, setNote] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  function mailtoFallback() {
    const body = encodeURIComponent(
      `Product / site: ${url}\n\nWhat feels broken: ${note || "(not specified)"}\n\nReply to: ${email}${source ? `\n\nSource: ${source}` : ""}`
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Free UX teardown request")}&body=${body}`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    let ok = false;
    if (f.endpoint) {
      try {
        const res = await fetch(f.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url, note, email, source }),
        });
        ok = res.ok;
      } catch {
        ok = false;
      }
    }
    // Endpoint not wired / delivery failed → don't lose the lead, hand off to email.
    if (!ok) {
      setFailed(true);
      mailtoFallback();
    }
    setBusy(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-8 rounded-card border border-orange/30 bg-surface p-6 text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white">✓</div>
        <p className="mt-4 text-[16px] font-medium text-ink">
          {failed
            ? "Almost there — your email app should have opened with the request ready to send. If it didn't, email me directly:"
            : f.success}
        </p>
        {failed && (
          <a href={`mailto:${site.email}`} className="mt-1 inline-block text-[15px] font-medium text-orange hover:underline">
            {site.email}
          </a>
        )}
      </div>
    );
  }

  const field = "w-full rounded-xl border border-line2 bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-sub/70 focus:border-orange focus:outline-none";

  return (
    <form onSubmit={onSubmit} className={compact ? "flex flex-col gap-3" : "mt-8 flex flex-col gap-4"}>
      <div className={compact ? "flex flex-col gap-3" : "grid gap-4 sm:grid-cols-2"}>
        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-medium text-ink">{f.urlLabel}</span>
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={f.urlPlaceholder}
            className={field}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-medium text-ink">{f.emailLabel}</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={f.emailPlaceholder}
            className={field}
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-medium text-ink">{f.noteLabel}</span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={f.notePlaceholder}
          rows={2}
          className={`${field} resize-none`}
        />
      </label>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-orange-ink disabled:opacity-60"
        >
          {busy ? "Sending…" : f.submit} →
        </button>
        <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="text-[14px] text-sub hover:text-orange">
          {audit.altCta}
        </a>
      </div>
    </form>
  );
}
