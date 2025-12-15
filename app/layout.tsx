import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Booklinq — Your booking link. Your guests. Your terms.",
  description:
    "A direct booking page for independent hotels and short-stay hosts — without commissions or lock‑in.",
  metadataBase: new URL("https://mybooklinq.com"),
  icons: {
    icon: [{ url: "/brand/booklinq-mark.png", type: "image/png" }],
    apple: [{ url: "/brand/booklinq-mark.png", type: "image/png" }],
  },
  openGraph: {
    title: "Booklinq",
    description:
      "Your booking link. Your guests. Your terms.",
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
    title: "Booklinq — Your booking link. Your guests. Your terms.",
    description:
      "A direct booking page for independent hotels and short-stay hosts — without commissions or lock‑in.",
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


