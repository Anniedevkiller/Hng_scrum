import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./widgets/header";
import Footer from "./widgets/footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});




export const metadata: Metadata = {
  title: "Monikaverein",
  description: "Monikaverein",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const font = `${roboto.className} font-sans;`;

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
      <GoogleAnalytics gaId="G-YFY8K74L27" />
    </html>
  );
}
