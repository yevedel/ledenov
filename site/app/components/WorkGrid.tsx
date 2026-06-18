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

function Card({ item, i }: { item: WorkItem; i: number }) {
  const inner = (
    <>
      <div className="relative overflow-hidden rounded-card border border-line">
        <div
          className={`aspect-[16/10] w-full bg-gradient-to-br ${grads[i % grads.length]} transition-transform duration-500 group-hover:scale-[1.04]`}
        >
          {item.img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.img} alt={item.title} className="h-full w-full object-cover object-top" />
          )}
          {!item.img && (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-2xl font-semibold tracking-[-0.02em] text-ink/25">{item.title}</span>
            </div>
          )}
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur">
          {item.tag}
        </span>
        {item.slug && (
          <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-surface/90 text-orange opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            →
          </span>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <span className="text-[15px] font-medium text-ink">{item.title}</span>
        <span className="text-[13px] text-sub">{item.slug ? "Case study" : "Preview"}</span>
      </div>
    </>
  );

  return (
    <Reveal delay={(i % 3) * 60} className="group">
      {item.slug ? (
        <Link href={`/work/${item.slug}`} className="block">{inner}</Link>
      ) : (
        <div className="cursor-default">{inner}</div>
      )}
    </Reveal>
  );
}

export default function WorkGrid({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Card key={item.title} item={item} i={i} />
      ))}
    </div>
  );
}
