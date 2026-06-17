"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "../content";
import LetsTalk from "./LetsTalk";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-bg/0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="text-xl font-semibold tracking-tight text-ink">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} className="text-[15px] text-sub transition-colors hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LetsTalk variant="nav" />
          </div>
          <button
            type="button"
            className="md:hidden text-ink"
            aria-label="Menu"
            aria-expanded={menu}
            onClick={() => setMenu((v) => !v)}
          >
            <span className="text-2xl leading-none">{menu ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {menu && (
        <div className="border-t border-line bg-bg px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                className="text-[15px] text-ink"
                onClick={() => setMenu(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-2">
              <LetsTalk variant="primary" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
