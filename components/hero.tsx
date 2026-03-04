import Image from "next/image";
import Link from "next/link";

import { Chrome, Star } from "lucide-react";

import heroImage from "@/assets/screenshots/hero.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="animate-orb-1 bg-accent/5 absolute -top-32 left-1/4 h-80 w-80 rounded-full blur-3xl" />
        <div className="animate-orb-2 bg-accent/5 absolute -top-20 right-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="animate-orb-3 bg-accent/5 absolute top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <a
          href="https://chrome.google.com/webstore"
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-pill bg-background group inline-flex flex-col items-center gap-1 rounded-full px-8 py-2.5 text-sm"
        >
          <span className="flex items-center gap-1.5">
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </span>
            <span className="font-medium text-white">5.0</span>
          </span>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">On the Chrome Web Store</span>
        </a>

        <h1 className="mx-auto mt-8 max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-5xl md:leading-[1.15]">
          The Missing DevTools Panel for{" "}
          <span className="text-accent">Browser Storage</span>
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg">
          Inspect, edit, and manage Local storage, Session storage, and Cookies
          in one clean, powerful interface.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-accent-foreground hover:shadow-accent/25 inline-flex h-11 items-center gap-2 rounded-xl px-6 text-sm font-medium transition-shadow hover:shadow-lg"
          >
            <Chrome size={16} />
            Add to Chrome — It&apos;s Free
          </a>
          <Link
            href="/#features"
            className="border-border text-foreground hover:bg-muted inline-flex h-11 items-center rounded-xl border px-6 text-sm font-medium transition-colors"
          >
            See Features
          </Link>
        </div>

        <div className="mt-16">
          <div className="border-border bg-muted/50 mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-2xl">
            <Image
              src={heroImage}
              alt="StorageKit Chrome DevTools panel"
              width={1560}
              height={1160}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
