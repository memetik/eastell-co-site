import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import LoadSequence from "@/components/LoadSequence";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eastell & Co | Sunshine Coast Prestige Real Estate",
  description:
    "Redefining coastal real estate on the Sunshine Coast. 337% growth. Unmatched results. A new standard in prestige property.",
  metadataBase: new URL("https://eastellandco.com"),
  openGraph: {
    title: "Eastell & Co | Sunshine Coast Prestige Real Estate",
    description:
      "Redefining coastal real estate on the Sunshine Coast. 337% growth. Unmatched results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} grain antialiased`}
      >
        <SmoothScroll />
        <CustomCursor />
        <LoadSequence>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LoadSequence>
      </body>
    </html>
  );
}
