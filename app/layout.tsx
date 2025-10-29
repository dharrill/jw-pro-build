import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Commercial Apartment Repairs | Multi-Family Property Inspection Contractor",
  description: "Licensed commercial apartment repair contractor. Bank-mandated inspection repairs for apartment complexes, senior living, and multi-family properties. Emergency service available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <div className="pt-[120px]">{children}</div>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}

