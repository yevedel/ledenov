import Link from "next/link";
import {
  logos,
  about,
  industries,
  services,
  testimonials,
  projects,
  booking,
  site,
  allWork,
  audit,
  outcomes,
  loyalty,
  riskReversal,
} from "../content";
import Reveal from "./Reveal";
import LetsTalk from "./LetsTalk";
import WorkGrid from "./WorkGrid";
import ProcessFlow from "./ProcessFlow";
import IndustryIcon from "./IndustryIcon";
import Icon from "./Icon";

const serviceIcons = ["window", "browser", "grid", "sparkles", "code"];
const outcomeIcons = ["ship", "chart", "partner", "bolt"];
import AuditForm from "./AuditForm";

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
                className="group flex h-full flex-col justify-between gap-8 rounded-card border border-line bg-surface p-5 transition-colors hover:border-orange"
              >
                <IndustryIcon slug={it.slug} className="h-6 w-6 text-ink/30 transition-colors group-hover:text-orange" />
                <span className="flex items-center justify-between">
                  <span className="text-[16px] font-medium text-ink">{it.label}</span>
                  <span className="text-sub transition-transform group-hover:translate-x-0.5 group-hover:text-orange">→</span>
                </span>
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
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tint text-orange-ink">
                    <Icon name={serviceIcons[i % serviceIcons.length]} className="h-5 w-5" />
                  </span>
                  <p className="text-[19px] font-medium tracking-[-0.01em] text-ink">“{s.problem}”</p>
                </div>
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
  return <ProcessFlow />;
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.quotes.map((q, i) => {
            const initials = q.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
            return (
              <Reveal key={i} delay={(i % 3) * 60} className="flex flex-col rounded-card border border-line bg-surface p-6">
                <p className="text-[15px] leading-relaxed text-ink">“{q.quote}”</p>
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-tint to-line2 text-[12px] font-semibold text-orange-ink"
                  >
                    {initials}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold text-ink">{q.name}</p>
                    <p className="truncate text-[13px] text-sub">{q.role}</p>
                  </div>
                  <span className="ml-auto shrink-0 text-[11px] font-medium uppercase tracking-[0.06em] text-sub">
                    {q.platform}
                  </span>
                </div>
              </Reveal>
            );
          })}
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

export function Outcomes() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">{outcomes.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{outcomes.heading}</h2>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {outcomes.items.map((o, i) => (
            <Reveal key={o.h} delay={(i % 2) * 60} className="bg-surface p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tint text-orange-ink">
                <Icon name={outcomeIcons[i % outcomeIcons.length]} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{o.h}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-sub">{o.p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Loyalty() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sub">{loyalty.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-orange sm:text-4xl">{loyalty.heading}</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {loyalty.facts.map((f, i) => (
            <Reveal key={i} delay={i * 60} className="rounded-card border border-line bg-surface p-7">
              <div className="text-5xl font-semibold tracking-[-0.03em] text-orange">{f.big}</div>
              <p className="mt-3 text-[15px] text-ink">{f.label}</p>
              <p className="mt-1 text-[13px] text-sub">— {f.who}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AuditOffer() {
  return (
    <section id="audit" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="relative overflow-hidden rounded-card border border-orange/30 bg-tint/40 p-8 sm:p-12">
          <div aria-hidden className="hero-glow pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full opacity-50" />
          <div className="relative">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">{audit.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{audit.heading}</h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-sub">{audit.body}</p>
            <ol className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6">
              {audit.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-2 text-[15px] text-ink">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange text-[12px] font-semibold text-white">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <AuditForm />
            <p className="mt-4 text-[13px] text-sub">Free · async · no call required · I reply within one business day</p>
          </div>
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
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">WhatsApp</a>. I reply fast.
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-sub">
            {riskReversal.map((r) => (
              <li key={r} className="flex items-center gap-1.5">
                <span className="text-orange" aria-hidden>✓</span>
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
