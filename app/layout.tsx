import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JW ProBuild | Bank-Mandated Inspection Repairs for Multi-Family Properties",
  description: "Licensed contractors specializing in bank-mandated inspection repairs for apartment complexes and multi-family properties. Prevent foreclosure. Get compliant. On time.",
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
      </body>
    </html>
  );
}

