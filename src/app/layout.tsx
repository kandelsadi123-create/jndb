import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { siteGraph } from "@/lib/schema";

const title = "Barista Course in Hetauda, Nepal | J & B Barista Academy";
const description =
  "Enrol in barista training in Hetauda, Nepal. Four to eight week courses in espresso, latte art and cafe management, capped at eight students on a working bar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: {
    default: title,
    template: "%s | J & B Barista Academy",
  },
  description,
  keywords: [
    "barista course Nepal",
    "barista training Hetauda",
    "latte art course Nepal",
    "barista school Nepal",
    "cafe management course Nepal",
    "coffee training Hetauda",
    "learn barista skills Nepal",
  ],
  alternates: {
    canonical: "/",
  },
  category: "education",
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE.name,
    title,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "J and B Barista Academy, barista training in Hetauda, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: "J & B Barista",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "geo.region": "NP-BA",
    "geo.placename": "Hetauda",
  },
};

export const viewport: Viewport = {
  themeColor: "#6f4726",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-surface text-ink antialiased">
        <JsonLd data={siteGraph()} />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
