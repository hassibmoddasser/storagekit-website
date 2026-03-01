import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Storage Kit — Debug Faster with Storage Snapshots",
  description:
    "A Chrome extension for debugging web storage. Save, restore, and inspect Local storage, Session storage, and Cookies with ease.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
