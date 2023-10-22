import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.scss";
import "./style.scss";
import "./null.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const bebas_neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sifox Technologies",
  description: "Sifox Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas_neue.variable}`}>
        <Header />
        <div className="wrapper">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
