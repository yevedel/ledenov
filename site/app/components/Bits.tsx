import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  sub,
  glow = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  glow?: boolean;
}) {
  return (
    <section className="relative overflow-hidden">
      {glow && (
        <div
          aria-hidden
          className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] rounded-full opacity-70"
        />
      )}
      <div className="relative mx-auto max-w-3xl px-6 pb-12 pt-20 sm:pt-24">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">{eyebrow}</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          {title}
        </h1>
        {sub && <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-sub">{sub}</p>}
      </div>
    </section>
  );
}

export function Crumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="mx-auto max-w-3xl px-6 pt-10 text-[13px] text-sub" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-1.5 text-line2">/</span>}
          {it.href ? (
            <Link href={it.href} className="hover:text-ink">{it.label}</Link>
          ) : (
            <span className="text-ink">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
