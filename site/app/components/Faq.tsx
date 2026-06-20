"use client";

import { useState } from "react";
import { faq } from "../content";
import { FaqJsonLd } from "./JsonLd";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line py-20 sm:py-28">
      <FaqJsonLd />
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{faq.heading}</h2>

        <dl className="mt-10 divide-y divide-line border-y border-line">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <dt>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-[17px] font-medium text-ink">{item.q}</span>
                    <span
                      className={`shrink-0 text-xl text-orange transition-transform ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  hidden={!isOpen}
                  className={`grid overflow-hidden text-[16px] text-sub transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <span className="min-h-0">{item.a}</span>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
