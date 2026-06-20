import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "./content";
import ScarcityBar from "./components/ScarcityBar";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

// Passenger Sans (licensed web kit — Regular/Medium/Semibold). Body 400, UI 500, headings 600.
const app = localFont({
  variable: "--font-app",
  display: "swap",
  src: [
    { path: "./fonts/PassengerSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PassengerSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/PassengerSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: "Yev Ledenov — Senior product design for founders",
  description:
    "One senior product-design partner for product, site, and brand, at founder speed. ~$2M delivered across 950+ projects. Book a call.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Yev Ledenov — Senior product design for founders",
    description:
      "One senior product-design partner for product, site, and brand, at founder speed.",
    url: `https://${site.domain}`,
    siteName: "Yev Ledenov",
    type: "website",
  },
};

const base = `https://${site.domain}`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${base}/#person`,
      name: "Yevhen Ledenov",
      alternateName: "Yev Ledenov",
      jobTitle: "Senior Product Designer",
      url: base,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Zagreb", addressCountry: "HR" },
      worksFor: { "@id": `${base}/#org` },
      sameAs: site.socials.map((s) => s.href),
    },
    {
      "@type": "Organization",
      "@id": `${base}/#org`,
      name: "Ledo.digital OÜ",
      legalName: "Ledo.digital OÜ",
      url: base,
      founder: { "@id": `${base}/#person` },
      foundingDate: "2023-07",
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Zagreb", addressCountry: "HR" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={app.variable}>
      <head>
        {/* Mark JS as available before paint so scroll-reveal only hides content when it can reveal it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScarcityBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
