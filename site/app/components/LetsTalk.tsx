"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "../content";

type Variant = "primary" | "ghost" | "nav";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-[15px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/50";
const styles: Record<Variant, string> = {
  primary: "bg-orange text-white px-5 py-2.5 hover:bg-orange-ink",
  ghost: "border border-line2 text-ink px-5 py-2.5 hover:border-ink",
  nav: "bg-orange text-white px-4 py-2 hover:bg-orange-ink",
};

/** "Let's talk" trigger that opens a dropdown panel: Book a call (primary) / message. */
export default function LetsTalk({
  variant = "primary",
  label = "Let's talk",
}: {
  variant?: Variant;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={wrap}>
      <button
        type="button"
        className={`${base} ${styles[variant]}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Get in touch"
          className="absolute right-0 z-50 mt-2 w-[300px] rounded-2xl border border-line bg-surface p-2 shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
        >
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-orange p-4 text-white transition-colors hover:bg-orange-ink"
          >
            <div className="text-[15px] font-semibold">Book a call</div>
            <div className="text-[13px] text-white/80">30 min. Tell me the problem, I'll tell you straight.</div>
          </a>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-line p-3 text-center text-[14px] text-ink transition-colors hover:border-ink"
            >
              Telegram
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-line p-3 text-center text-[14px] text-ink transition-colors hover:border-ink"
            >
              WhatsApp
            </a>
          </div>
          <p className="px-1 py-2 text-center text-[12px] text-sub">I reply within hours.</p>
        </div>
      )}
    </div>
  );
}
