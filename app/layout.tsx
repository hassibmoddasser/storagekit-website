import { geistSans, spaceGrotesk } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import Header from "@/components/header";

import ThemeProvider from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s — StorageKit",
  },
  description: siteConfig.description,
  keywords: [
    "chrome extension",
    "web storage",
    "localStorage",
    "sessionStorage",
    "cookies",
    "debugging",
    "developer tools",
    "devtools",
    "snapshots",
    "browser storage",
    "chrome devtools",
    "storage manager",
    "cookie editor",
    "web development",
  ],
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(geistSans.variable, spaceGrotesk.variable, "antialiased")}
      >
        {process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID} />
        )}

        <ThemeProvider>
          <Header />
          {children}

          <BackToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
