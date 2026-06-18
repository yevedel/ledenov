import Reveal from "./Reveal";
import Count from "./Count";
import { numbers } from "../content";

export default function Numbers() {
  return (
    <section id="numbers" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
            {numbers.heading}
          </h2>
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">{numbers.eyebrow}</span>
        </Reveal>

        <div className="mt-12 border-t border-line">
          {numbers.stats.map((s, i) => (
            <Reveal key={i} delay={i * 60} className="grid items-start gap-3 border-b border-line py-9 sm:grid-cols-12 sm:gap-8">
              <div className="sm:col-span-7">
                <p className="text-[14px] text-sub">{s.label}</p>
                <Count
                  pre={s.pre}
                  num={s.num}
                  suf={s.suf}
                  className="mt-1 block text-6xl font-semibold leading-none tracking-[-0.03em] text-orange sm:text-8xl"
                />
              </div>
              <p className="text-[15px] leading-relaxed text-sub sm:col-span-5 sm:pt-3">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] text-sub">
          <span>{numbers.note}</span>
          <a href={numbers.upworkHref} target="_blank" rel="noopener noreferrer" className="font-medium text-orange hover:underline">
            See my Upwork profile →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
