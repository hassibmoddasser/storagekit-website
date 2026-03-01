import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/config/fonts";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: {
    default: "Storage Kit — The Missing DevTools Panel for Browser Storage",
    template: "%s — Storage Kit"
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
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
