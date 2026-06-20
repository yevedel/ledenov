import { ticker } from "../content";

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {ticker.map((t, i) => (
        <li key={i} className="flex items-center gap-8 text-[13px] uppercase tracking-[0.12em] text-sub">
          <span className="inline-block h-1 w-1 rounded-full bg-orange" aria-hidden />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="marquee overflow-hidden border-y border-line bg-surface py-3">
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {/* First group is read by screen readers; the duplicate (for seamless loop) is hidden. */}
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
