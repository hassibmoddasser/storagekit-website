import { geistSans, spaceGrotesk } from "@/config/fonts";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export const metadata: Metadata = {
  title: {
    default: "StorageKit — The Missing DevTools Panel for Browser Storage",
    template: "%s — StorageKit",
  },
  description:
    "Inspect, edit, and manage Local storage, Session storage, and Cookies in one clean, powerful Chrome DevTools panel.",
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
  ],
  authors: [{ name: "Hassib Moddasser" }],
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
        <Header />
        {children}

        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
