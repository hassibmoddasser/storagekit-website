import { geistSans, jetbrainsMono, spaceGrotesk } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import Header from "@/components/header";

import ThemeProvider from "@/components/providers/theme-provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

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
    "side panel",
    "snapshots",
    "localStorage editor",
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
    // No title/description/url here — Next then falls back to each page's own
    // resolved metadata instead of stamping the homepage onto every route.
    type: "website",
    locale: "en_US",
    // Relative, so each route reports its own og:url.
    url: "./",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    // Relative canonical resolves per route against metadataBase, so each
    // page self-references instead of pointing at the homepage.
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          spaceGrotesk.variable,
          jetbrainsMono.variable,
          "antialiased",
        )}
      >
        {process.env.NODE_ENV === "production" &&
          process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID && (
            <GoogleAnalytics
              gaId={process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}
            />
          )}

        <ThemeProvider>
          <a
            href="#main"
            className="focus-visible:bg-background focus-visible:text-foreground focus-visible:border-border sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[60] focus-visible:rounded-lg focus-visible:border focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-semibold"
          >
            Skip to content
          </a>

          <div className="bg-background overflow-x-hidden rounded-t-4xl md:rounded-t-none">
            <Header />
            {children}

            <BackToTop />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
