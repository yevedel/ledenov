import { faq, site } from "../content";

const base = `https://${site.domain}`;

/** Renders a JSON-LD <script>. Server component — output is in the static HTML. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

/** FAQPage — the canonical FAQ, used on home / pricing / industry pages. */
export function FaqJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      }}
    />
  );
}

/** BreadcrumbList from crumb items (label + optional href). */
export function BreadcrumbJsonLd({ items }: { items: { label: string; href?: string }[] }) {
  const list = [{ label: "Home", href: "/" }, ...items];
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: list.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.label,
          ...(it.href ? { item: `${base}${it.href === "/" ? "" : it.href}` } : {}),
        })),
      }}
    />
  );
}
