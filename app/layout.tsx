import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar        from "@/components/layout/Navbar";
import Footer        from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const inter = Inter({
  subsets:  ["latin"],
  variable: "--font-sans",
  display:  "swap",
  weight:   ["400", "500", "600", "700", "800", "900"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ephravilla.com";

export const viewport: Viewport = {
  themeColor:   "#f59e0b",
  width:        "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  "Building with Integrity | Ephravilla Construction Limited",
    template: "%s | Ephravilla Construction Limited",
  },
  description:
    "Ephravilla Construction Limited — residential and commercial construction in Nairobi, Kiambu and Murang'a. Structural design, renovations, survey, plumbing, electrical and equipment leasing.",
  keywords: [
    "construction company nairobi",
    "building contractor kiambu",
    "house builder kenya",
    "construction equipment hire nairobi",
    "renovation works nairobi",
    "structural design kenya",
    "survey works kenya",
  ],
  authors:   [{ name: "Ephravilla Construction Limited", url: SITE_URL }],
  creator:   "Ephravilla Construction Limited",
  publisher: "Ephravilla Construction Limited",
  category:  "Construction",
  openGraph: {
    type:     "website",
    siteName: "Ephravilla Construction Limited",
    locale:   "en_KE",
    url:      SITE_URL,
    images:   [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Ephravilla Construction — Building with Integrity" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Ephravilla Construction Limited",
    description: "Building with Integrity — construction across Nairobi, Kiambu and Murang'a.",
    images:      [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                 true,
      follow:                true,
      "max-video-preview":   -1,
      "max-image-preview":   "large",
      "max-snippet":         -1,
    },
  },
  icons: {
    icon:  [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-stone-900">
        {/* Skip link — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-amber-500 focus:text-stone-950 focus:px-5 focus:py-3 focus:rounded-xl focus:font-bold focus:text-sm focus:shadow-xl"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        {/* Global floating WhatsApp button */}
        <div data-floating>
          <WhatsAppButton
            variant="floating"
            label="Chat with us"
            message="Hello, I'd like to discuss a construction project with Ephravilla."
          />
        </div>
      </body>
    </html>
  );
}
