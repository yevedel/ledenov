// Minimal line glyphs (currentColor, 1.5 stroke) matching IndustryIcon's restrained lane.
// Used for outcome/service cards. Functional marks, not decorative illustration.

const paths: Record<string, React.ReactNode> = {
  // outcomes
  ship: (
    <>
      <path d="M12 3l7 4v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="M7 15l3-4 3 2 4-6" />
    </>
  ),
  partner: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20a6.5 6.5 0 0113 0" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </>
  ),
  // services
  window: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6" cy="6.5" r="0.6" />
      <path d="M8 14l2.5 2.5L8 19" />
    </>
  ),
  browser: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M6 7h0M8 7h0" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
      <path d="M19 14l.7 1.8L21.5 16.5l-1.8.7L19 19l-.7-1.8L16.5 16.5l1.8-.7L19 14z" />
    </>
  ),
  code: (
    <>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14" />
    </>
  ),
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const glyph = paths[name];
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
