"use client";
import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.scss";
import "./style.scss";
import "./null.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { PullState } from "./components/PullState/PullState";
import { Dictionary } from "./components/PullState/Dictionary";

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

// export const metadata: Metadata = {
//   title: "SIFOX Technologies",
//   description: "SIFOX Technologies",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = PullState.useState((state: any) => state.lang);
  return (
    <html lang="en">
      <title>SIFOX Technologies</title>
      <meta
        name="description"
        content={Dictionary[lang]["description"]}
      />
      <body className={`${inter.variable} ${bebas_neue.variable}`}>
        <div className="wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
