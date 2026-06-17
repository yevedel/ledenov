import { advantages } from "../content";
import Reveal from "./Reveal";
import LetsTalk from "./LetsTalk";

export default function Advantages() {
  return (
    <section id="advantages" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">Why me</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
            {advantages.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] text-sub">{advantages.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {advantages.blocks.map((b, i) => (
            <Reveal key={b.vs} delay={i * 70} className="bg-surface p-7">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-orange-ink">{b.vs}</p>
              <p className="mt-4 text-[14px] text-sub">
                <span className="font-medium text-ink">What you got: </span>
                {b.got}
              </p>
              <p className="mt-2 text-[15px] text-ink">
                <span className="font-medium">What you get here: </span>
                {b.get}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg font-medium text-ink">{advantages.close}</p>
          <LetsTalk variant="primary" label="Book a call" />
        </Reveal>
      </div>
    </section>
  );
}
