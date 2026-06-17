import Link from "next/link";
import { hero } from "../content";
import LetsTalk from "./LetsTalk";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Delphi-style radial glow */}
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute left-1/2 top-[42%] h-[680px] w-[680px] rounded-full"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-24 text-center sm:pt-28">
        <span className="mb-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
          {hero.eyebrow}
        </span>

        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
          {hero.headline[0]}
          <br />
          {hero.headline[1]}
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-sub sm:text-lg">
          {hero.sub}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LetsTalk variant="primary" label="Book a call" />
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full border border-line2 px-5 py-2.5 text-[15px] font-medium text-ink transition-colors hover:border-ink"
          >
            See the work
          </Link>
        </div>

        {/* inline proof */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex -space-x-2" aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-8 w-8 rounded-full border-2 border-bg bg-gradient-to-br from-tint to-line2"
              />
            ))}
          </div>
          <p className="text-[13px] text-sub">Trusted by founders across the US, EU and Australia</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] font-medium text-ink">
            {hero.proof.map((p, i) => (
              <li key={p} className="flex items-center gap-3">
                {i > 0 && <span className="text-line2" aria-hidden>·</span>}
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
