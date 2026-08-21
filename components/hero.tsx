import { siteConfig } from "@/config/site";
import { ArrowRight, Chrome, PanelRight, Star } from "lucide-react";
import Image from "next/image";

import heroImage from "@/assets/screenshots/hero.jpg";
import BrowserFrame from "./primitives/browser-frame";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24">
      {/* Background — animated orbs + dotted grid */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
        <div className="animate-orb-1 bg-accent/10 absolute -top-32 left-1/4 h-80 w-80 rounded-full blur-3xl" />
        <div className="animate-orb-2 bg-accent/5 absolute -top-20 right-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="animate-orb-3 bg-accent/10 absolute top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Rating pill */}
        <a
          href={siteConfig.links.chromeWebStore}
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-pill bg-background group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs"
        >
          <span className="flex items-center gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </span>
          <span className="text-foreground font-medium">5.0</span>
          <span className="bg-border h-3 w-px" aria-hidden />
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
            from {siteConfig.reviewCount} reviews
            <span className="hidden sm:inline"> on the Chrome Web Store</span>
          </span>
          <ArrowRight
            size={12}
            aria-hidden
            className="text-muted-foreground -ml-0.5 transition-transform group-hover:translate-x-0.5"
          />
        </a>

        <h1 className="mx-auto mt-3 max-w-3xl text-4xl leading-[1.1] font-bold tracking-tight md:text-6xl md:leading-[1.05]">
          <span className="relative inline-block">
            <span className="text-accent-text-lg">Browser storage</span>
          </span>
          , without opening DevTools
        </h1>

        <p className="text-muted-foreground mx-auto mt-7 max-w-xl text-base leading-relaxed md:text-lg">
          A free Chrome extension to inspect, edit, and snapshot{" "}
          <code className="text-foreground font-mono text-[0.92em]">
            localStorage
          </code>
          ,{" "}
          <code className="text-foreground font-mono text-[0.92em]">
            sessionStorage
          </code>
          , and cookies — in a panel that docks right beside your page.
        </p>

        {/* CTA cluster */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.links.chromeWebStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine text-accent-foreground bg-accent-fill inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-lg shadow-teal-600/20 transition-transform hover:-translate-y-px dark:shadow-teal-500/20"
          >
            <Chrome size={16} aria-hidden />
            Add to Chrome — It&apos;s Free
          </a>
          <a
            href="#features"
            className="btn-shine border-border bg-background/40 text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold backdrop-blur-sm transition-colors"
          >
            <PanelRight size={16} aria-hidden />
            See what it does
          </a>
        </div>

        <p className="text-syntax-comment mt-4 font-mono text-[11px]">
          <span className="text-syntax-punct" aria-hidden>
            &gt;
          </span>{" "}
          Installs in 10 seconds · No signup · 100% local
        </p>

        {/* Product showcase */}
        <div className="relative mt-16 md:mt-20">
          {/* Glow under the frame */}
          <div className="bg-accent/20 absolute -inset-x-20 top-1/4 -z-10 h-2/3 blur-3xl" />

          <BrowserFrame
            url="storagekit.dev"
            label="side panel"
            className="mx-auto max-w-5xl"
          >
            <Image
              src={heroImage}
              alt="The StorageKit panel showing the storage tree beside a decoded JWT value"
              width={1560}
              height={1160}
              priority
              className="h-auto w-full"
            />
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
