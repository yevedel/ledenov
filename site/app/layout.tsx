import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "./content";
import ScarcityBar from "./components/ScarcityBar";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

// Fallback for Passenger Sans (commercial — swap once licensed).
const app = Inter({ subsets: ["latin"], variable: "--font-app", display: "swap" });

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
