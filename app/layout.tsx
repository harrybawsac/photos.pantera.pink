import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, IBM_Plex_Mono } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Photos.pantera.pink",
    template: "%s | Pantera.pink",
  },
  description: "Get your photos here.",
  openGraph: {
    title: "Photos | Pantera.pink",
    description: "Get your photos here.",
    // images: "/api/og?title=Support",
    type: "website",
    siteName: "Photos.pantera.pink",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bawsacharry",
    creator: "@bawsacharry",
  },
  metadataBase: new URL("https://photos.pantera.pink"),
};

export const revalidate = process.env.REVALIDATION_TIME;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
