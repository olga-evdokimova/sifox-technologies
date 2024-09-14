// app/layout.tsx
"use client";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.scss";
import "./style.scss";
import "./null.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { PullState } from "./components/PullState/PullState";
import { Dictionary } from "./components/PullState/Dictionary";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const bebas_neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = PullState.useState((state: any) => state.lang);
  return (
    <html lang="en">
      <title>SIFOX Technologies</title>
      <meta name="description" content={Dictionary[lang]["description"]} />
      <body className={`${inter.variable} ${bebas_neue.variable}`}>
        <div className="wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11277040941`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11277040941');
          `}
        </Script>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
