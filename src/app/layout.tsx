import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxury Clothing & Fashion | Esthilo Clothing",
  description:
    "Discover premium clothing, timeless styles, and the latest fashion trends. Shop quality outfits for men, women, and kids at Esthilo Clothing.",
  keywords:
    "clothing, fashion, apparel, outfits, luxury clothing, trendy wear, men fashion, women fashion, kids clothing, Esthilo Clothing",
  openGraph: {
    title: "Luxury Clothing & Fashion | Esthilo Clothing",
    description:
      "Upgrade your wardrobe with premium fashion from Esthilo Clothing. Explore collections for men, women, and kids.",
    url: "https://yourdomain.com",
    siteName: "Esthilo Clothing",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Esthilo Clothing - Clothing & Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Clothing & Fashion | Esthilo Clothing",
    description:
      "Discover stylish outfits and the latest fashion collections at Esthilo Clothing.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
