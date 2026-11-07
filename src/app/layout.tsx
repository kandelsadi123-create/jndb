import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "J and B Barista Academy | Barista Training in Hetauda, Nepal",
  description:
    "Learn specialty coffee from bean to cup at J and B Barista Academy in Hetauda, Nepal. Barista foundation, latte art, and coffee shop management programs.",
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
