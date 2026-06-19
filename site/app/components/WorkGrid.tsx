import Link from "next/link";
import Reveal from "./Reveal";
import type { WorkItem } from "../content";

// Soft, on-brand placeholder gradients (used until real screenshots are dropped in /public/work).
const grads = [
  "from-tint to-[#ffd2c0]",
  "from-[#f4f4f5] to-[#e7e7ea]",
  "from-[#fbe9e2] to-[#eef0f2]",
  "from-[#ededed] to-[#fbfbfb]",
  "from-[#fff0e9] to-[#f1f1f1]",
  "from-[#eef0f2] to-[#e2e4e7]",
];
// Varied tile shapes for the masonry rhythm (godly-style).
const aspects = ["aspect-[4/3]", "aspect-[16/11]", "aspect-[3/4]", "aspect-[16/10]", "aspect-[1/1]", "aspect-[16/12]"];

function Tile({ item, i, masonry }: { item: WorkItem; i: number; masonry: boolean }) {
  const aspect = masonry ? aspects[i % aspects.length] : "aspect-[16/10]";
  const inner = (
    <div className={`group block overflow-hidden rounded-card border border-line bg-surface ${masonry ? "mb-4 break-inside-avoid" : ""}`}>
      {/* window chrome (product-mockup feel) */}
      <div className="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-line2" />
          <span className="h-2 w-2 rounded-full bg-line2" />
          <span className="h-2 w-2 rounded-full bg-line2" />
        </span>
        <span className="ml-auto text-[11px] font-medium text-sub">{item.tag}</span>
      </div>

      {/* screen */}
      <div className="relative overflow-hidden">
        <div className={`${aspect} w-full bg-gradient-to-br ${grads[i % grads.length]} transition-transform duration-500 group-hover:scale-[1.04]`}>
          {item.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.img} alt={item.title} className="h-full w-full object-cover object-top" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-2xl font-semibold tracking-[-0.02em] text-ink/20">{item.title}</span>
            </div>
          )}
        </div>

        {/* top-right action dot */}
        <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-surface/90 text-orange backdrop-blur">
          {item.slug ? "→" : "•"}
        </span>

        {/* title overlay on hover */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/55 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-[15px] font-medium text-white">{item.title}</span>
          <span className="text-[12px] text-white/80">{item.slug ? "Case study" : "Preview"}</span>
        </div>
      </div>
    </div>
  );

  return (
    <Reveal delay={(i % 3) * 50} className={masonry ? "" : "h-full"}>
      {item.slug ? <Link href={`/work/${item.slug}`}>{inner}</Link> : inner}
    </Reveal>
  );
}

export default function WorkGrid({ items, masonry = false }: { items: WorkItem[]; masonry?: boolean }) {
  if (masonry) {
    return (
      <div className="gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <Tile key={item.title} item={item} i={i} masonry />
        ))}
      </div>
    );
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Tile key={item.title} item={item} i={i} masonry={false} />
      ))}
    </div>
  );
}
