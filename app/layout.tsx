import type { Metadata } from "next";
import Script from "next/script";
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

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const WC_PROFILE_ID = process.env.NEXT_PUBLIC_WHATCONVERTS_PROFILE_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script id="datalayer-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
        {WC_PROFILE_ID && (
          <Script
            id="whatconverts"
            strategy="beforeInteractive"
            src={`https://app.whatconverts.com/w.js?auth=${WC_PROFILE_ID}`}
          />
        )}
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body className={inter.className}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Header />
        <div className="pt-[120px]">{children}</div>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}

