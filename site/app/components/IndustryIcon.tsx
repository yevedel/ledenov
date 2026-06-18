// Minimal line glyphs for industry wayfinding. Monochrome (currentColor),
// 1.5 stroke, geometric to match the restrained product-minimalist lane.
// Functional marks, not decorative illustration.

const paths: Record<string, React.ReactNode> = {
  ai: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    </>
  ),
  web3: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 3v9M12 12l8-4.5M12 12l-8-4.5" />
    </>
  ),
  fintech: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 14h4" />
    </>
  ),
  healthcare: (
    <>
      <path d="M3 12h4l2-5 3 10 2-5h7" />
    </>
  ),
  edtech: (
    <>
      <path d="M12 4l9 4-9 4-9-4 9-4z" />
      <path d="M6 10v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
    </>
  ),
  ecommerce: (
    <>
      <path d="M6 8h12l-1 11H7L6 8z" />
      <path d="M9 8a3 3 0 016 0" />
    </>
  ),
  "real-estate": (
    <>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v9h12v-9M10 19v-5h4v5" />
    </>
  ),
  gambling: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="9" cy="9" r="1.1" />
      <circle cx="15" cy="15" r="1.1" />
      <circle cx="15" cy="9" r="1.1" />
      <circle cx="9" cy="15" r="1.1" />
    </>
  ),
  b2b: (
    <>
      <rect x="3" y="9" width="8" height="11" rx="1.5" />
      <rect x="13" y="4" width="8" height="16" rx="1.5" />
      <path d="M6 13h2M6 16h2M16 8h2M16 11h2M16 14h2" />
    </>
  ),
};

export default function IndustryIcon({ slug, className }: { slug: string; className?: string }) {
  const glyph = paths[slug];
  if (!glyph) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {glyph}
    </svg>
  );
}
