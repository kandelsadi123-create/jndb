import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jandbbaristaacademy.edu.np"),
  applicationName: "J and B Barista Academy",
  title: {
    default: "J and B Barista Academy | Barista Training in Hetauda, Nepal",
    template: "%s | J and B Barista Academy",
  },
  description:
    "Learn specialty coffee from bean to cup at J and B Barista Academy in Hetauda, Nepal. Barista foundation, latte art, and coffee shop management programs.",
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    capable: true,
    title: "J & B Barista",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
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
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
