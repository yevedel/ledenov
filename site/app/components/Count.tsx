"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `num` when scrolled into view (re-runs on re-entry). */
export default function Count({
  pre = "",
  num,
  suf = "",
  className = "",
}: {
  pre?: string;
  num: number;
  suf?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(num);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.disconnect(); // run once — no re-zero/flicker when scrolled past and back
            const t0 = performance.now();
            const step = (t: number) => {
              const k = Math.min(1, (t - t0) / 1100);
              const e2 = 1 - Math.pow(1 - k, 3);
              setV(num % 1 === 0 ? Math.round(num * e2) : Math.round(num * e2 * 10) / 10);
              if (k < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [num]);

  return (
    <span ref={ref} className={className}>
      {pre}
      {v}
      {suf}
    </span>
  );
}
