import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import type { Metadata } from "next";
import { Oswald, Roboto, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./widgets/header";
import Footer from "./widgets/footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-oswald",
});

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

const montserrat_init = Montserrat({
  subsets:["latin"],
  weight: ["400", "600", "700"]
}) 

export const montserrat = montserrat_init.className;
export const roboto = roboto_init.className;

export const metadata: Metadata = {
  title: "Monikaverein",
  description: "Monikaverein",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const font = `${oswald.variable} font-sans;`;

  return (
    <html lang="en" data-theme="light">
      <head>
        <title>Monika Verein</title>
      </head>
      <body className={`${font} bg-white-f9`}>
        <Header />

        {children}

        <Footer />

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
