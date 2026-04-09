import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ephravilla.com"),

  title: {
    default: "Ephravilla Construction Limited | Building with Integrity",
    template: "%s | Ephravilla Construction",
  },

  description:
    "Ephravilla Construction Limited — professional residential and commercial construction in Nairobi, Kiambu and Murang'a. Structural design, renovation, survey works, steel fabrication and equipment leasing.",

  keywords: [
    "Ephravilla",
    "Ephravilla Construction",
    "Ephravilla Construction Limited",
    "construction company Kenya",
    "building contractor Nairobi",
    "construction Kiambu",
    "residential construction Kenya",
    "commercial construction Nairobi",
    "structural design Kenya",
    "renovation Nairobi",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/logo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://ephravilla.com",
    siteName: "Ephravilla Construction Limited",
    title: "Ephravilla Construction Limited | Building with Integrity",
    description:
      "Professional construction services across Nairobi, Kiambu and Murang'a. Est. 2024.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ephravilla Construction Limited — Building with Integrity",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ephravilla Construction Limited",
    description:
      "Building with Integrity — construction across Nairobi, Kiambu & Murang'a",
    images: ["/og-image.jpg"],
  },

  verification: {
    google: "0NI0FeTK84-ljiTpQGcx9Wyvehp6TUr0l",
  },

  alternates: {
    canonical: "https://ephravilla.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}