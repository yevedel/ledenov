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
  openGraph: {
    title: "Yev Ledenov — Senior product design for founders",
    description:
      "One senior product-design partner for product, site, and brand, at founder speed.",
    url: `https://${site.domain}`,
    siteName: "Yev Ledenov",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yevhen Ledenov",
  alternateName: "Yev Ledenov",
  jobTitle: "Senior Product Designer",
  url: `https://${site.domain}`,
  address: { "@type": "PostalAddress", addressLocality: "Zagreb", addressCountry: "HR" },
  worksFor: { "@type": "Organization", name: "Ledo.digital OÜ" },
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={app.variable}>
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
