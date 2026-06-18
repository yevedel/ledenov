import Link from "next/link";
import {
  logos,
  about,
  industries,
  services,
  process as proc,
  testimonials,
  projects,
  booking,
  site,
  allWork,
} from "../content";
import Reveal from "./Reveal";
import LetsTalk from "./LetsTalk";
import WorkGrid from "./WorkGrid";

export function Logos() {
  return (
    <section className="border-t border-line py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[13px] text-sub">{logos.label}</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.items.map((l) => (
            <li key={l} className="text-lg font-semibold text-ink/35">
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{about.heading}</h2>
          <p className="mt-5 text-[18px] leading-relaxed text-sub">{about.body}</p>
          <Link href={about.link.href} className="mt-6 inline-block text-[15px] font-medium text-orange hover:underline">
            {about.link.label} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">Industries</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{industries.heading}</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-sub">{industries.sub}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {industries.items.map((it, i) => (
            <Reveal key={it.slug} delay={i * 40}>
              <Link
                href={`/solutions/${it.slug}`}
                className="group flex items-center justify-between rounded-card border border-line bg-surface px-5 py-5 transition-colors hover:border-orange"
              >
                <span className="text-[16px] font-medium text-ink">{it.label}</span>
                <span className="text-sub transition-transform group-hover:translate-x-0.5 group-hover:text-orange">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">What I do</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{services.heading}</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-sub">{services.sub}</p>
        </Reveal>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {services.items.map((s, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="grid gap-2 py-7 sm:grid-cols-[1fr_1.4fr] sm:gap-10">
                <p className="text-[19px] font-medium tracking-[-0.01em] text-ink">“{s.problem}”</p>
                <p className="text-[16px] leading-relaxed text-sub">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <LetsTalk variant="ghost" label="Not sure which is you? Book a call" />
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sub">Process</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-orange sm:text-5xl">{proc.heading}</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-sub">{proc.sub}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proc.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60} className="rounded-card border border-line bg-surface p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-tint text-[13px] font-semibold text-orange-ink">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-sub">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{testimonials.heading}</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-sub">{testimonials.sub}</p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {testimonials.repeat.map((r) => (
            <span key={r} className="rounded-full bg-tint px-3 py-1 text-[13px] font-medium text-orange-ink">
              {r}
            </span>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.quotes.map((q, i) => (
            <Reveal key={i} delay={(i % 3) * 60} className="flex flex-col rounded-card border border-line bg-surface p-6">
              <p className="text-[15px] leading-relaxed text-ink">“{q.quote}”</p>
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-[14px] font-semibold text-ink">{q.name}</p>
                <p className="text-[13px] text-sub">{q.role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Link href={testimonials.link.href} className="text-[15px] font-medium text-orange hover:underline">
            {testimonials.link.label} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="work" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{projects.heading}</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-sub">{projects.sub}</p>
        </Reveal>
        <div className="mt-10">
          <WorkGrid items={allWork.slice(0, 6)} />
        </div>
        <Reveal className="mt-10">
          <Link href={projects.link.href} className="text-[15px] font-medium text-orange hover:underline">
            {projects.link.label} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function BookCall() {
  return (
    <section id="book" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">{booking.heading}</h2>
          <p className="mx-auto mt-5 max-w-xl text-[18px] leading-relaxed text-sub">{booking.sub}</p>
          <div className="mt-8 flex justify-center">
            <LetsTalk variant="primary" label="Book a call" />
          </div>
          <p className="mt-6 text-[14px] text-sub">
            Prefer to message?{" "}
            <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Telegram</a>. I reply fast.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
