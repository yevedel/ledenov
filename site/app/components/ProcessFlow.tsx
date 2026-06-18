"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { process as proc } from "../content";

export default function ProcessFlow() {
  const [active, setActive] = useState(0);
  const a = proc.steps[active];

  return (
    <section id="process" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sub">Process</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-orange sm:text-5xl">{proc.heading}</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-sub">{proc.sub}</p>
        </Reveal>

        {/* phase headers (desktop) */}
        <div className="mt-12 hidden grid-cols-4 border-b border-line pb-3 sm:grid">
          {proc.phases.map((ph, i) => (
            <div key={ph} className={`text-[14px] font-medium text-ink ${i > 0 ? "border-l border-line pl-4" : ""}`}>
              {ph}
            </div>
          ))}
        </div>

        {/* staircase (desktop) */}
        <div className="mt-6 hidden sm:block">
          {proc.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 50}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{ marginLeft: `min(${i * 5.2}%, 57%)` }}
                className={`mb-2 flex items-center gap-3 rounded-full py-2.5 pl-2.5 pr-6 text-left transition-colors ${
                  active === i ? "bg-orange text-white" : "bg-ink text-white hover:bg-orange-ink"
                }`}
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-semibold ${active === i ? "bg-white/25" : "bg-white/15"}`}>
                  {s.n}
                </span>
                <span className="whitespace-nowrap text-[15px] font-medium">{s.label}</span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* mobile: grouped by phase */}
        <div className="mt-8 space-y-6 sm:hidden">
          {proc.phases.map((ph, pi) => (
            <div key={ph}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-sub">{ph}</p>
              <div className="mt-2 space-y-2">
                {proc.steps.map((s, idx) => s.phase === pi ? (
                  <button
                    key={s.n}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={`flex w-full items-center gap-3 rounded-full py-2.5 pl-2.5 pr-5 text-left ${active === idx ? "bg-orange text-white" : "bg-ink text-white"}`}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[13px] font-semibold">{s.n}</span>
                    <span className="text-[15px] font-medium">{s.label}</span>
                  </button>
                ) : null)}
              </div>
            </div>
          ))}
        </div>

        {/* detail panel */}
        <div className="mt-8 rounded-card border border-line bg-surface p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tint text-[13px] font-semibold text-orange-ink">{a.n}</span>
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-sub">{proc.phases[a.phase]}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-ink">{a.label}</h3>
          <p className="mt-2 text-[16px] leading-relaxed text-sub">{a.desc}</p>
        </div>
      </div>
    </section>
  );
}
