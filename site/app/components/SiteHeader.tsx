"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "../content";
import LetsTalk from "./LetsTalk";

export default function SiteHeader() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
        {/* logo, left */}
        <Link
          href="/"
          className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-semibold tracking-tight text-ink"
        >
          {site.name}
        </Link>

        {/* centered floating pill */}
        <nav className="flex items-center gap-1 rounded-full border border-line bg-surface/85 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menu}
            onClick={() => setMenu((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-bg"
          >
            <span className="text-lg leading-none">{menu ? "×" : "≡"}</span>
          </button>

          <div className="hidden items-center gap-0.5 md:flex">
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                className="rounded-full px-3.5 py-2 text-[14px] text-sub transition-colors hover:bg-bg hover:text-ink"
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div className="ml-1">
            <LetsTalk variant="nav" />
          </div>
        </nav>
      </div>

      {/* menu overlay (mobile + the ≡ affordance) */}
      {menu && (
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-line bg-surface p-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <div className="grid gap-1 sm:grid-cols-2">
              {nav.map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  className="rounded-xl px-4 py-3 text-[15px] text-ink hover:bg-bg"
                  onClick={() => setMenu(false)}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
