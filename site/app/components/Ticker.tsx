import { ticker } from "../content";

export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="marquee overflow-hidden border-y border-line bg-surface py-3">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap pr-8">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-[13px] uppercase tracking-[0.12em] text-sub">
            <span className="inline-block h-1 w-1 rounded-full bg-orange" aria-hidden />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
