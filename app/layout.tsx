import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Booklinq — Your booking link, anywhere",
  description:
    "Stop losing 15–20% to aggregators. Booklinq lets you own bookings, guest data, and brand — hospitality (Nov 2025) and ticketing (Dec 2025).",
  metadataBase: new URL("https://mybooklinq.com"),
  openGraph: {
    title: "Booklinq",
    description:
      "Your booking link, anywhere. Keep your money, own your guests, convert directly.",
    url: "https://mybooklinq.com",
    siteName: "Booklinq",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Booklinq landing hero",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Booklinq — Your booking link, anywhere",
    description:
      "Keep your money. Own your guests. Convert directly. Hospitality (Nov 2025) and Ticketing (Dec 2025).",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}


