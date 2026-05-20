import { siteConfig } from "@/config/site";
import { ArrowRight, Chrome, Github, Star } from "lucide-react";
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
          className="shimmer-pill bg-background group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
        >
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </span>
          <span className="text-foreground font-medium">5.0</span>
          <span className="bg-border h-3 w-px" />
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
            On the Chrome Web Store
          </span>
          <ArrowRight
            size={12}
            className="text-muted-foreground -ml-0.5 transition-transform group-hover:translate-x-0.5"
          />
        </a>

        {/* "Comment" line above headline — pure DevTools flair */}
        <p className="text-syntax-comment font-mono mt-8 text-xs">
          <span className="text-syntax-punct">{"//"}</span> Built for developers
          who spend their day inside DevTools
        </p>

        <h1 className="mx-auto mt-3 max-w-3xl text-4xl leading-[1.1] font-bold tracking-tight md:text-6xl md:leading-[1.05]">
          The missing{" "}
          <span className="font-mono text-foreground/95 inline-flex items-baseline rounded-md bg-muted/60 px-2 text-[0.9em] tracking-tight">
            DevTools
          </span>{" "}
          panel for{" "}
          <span className="relative inline-block">
            <span className="text-accent">browser storage</span>
            <svg
              aria-hidden
              viewBox="0 0 240 12"
              preserveAspectRatio="none"
              className="text-accent absolute -bottom-1 left-0 h-2 w-full opacity-70"
            >
              <path
                d="M2 7 C 60 3, 120 11, 238 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="text-muted-foreground mx-auto mt-7 max-w-xl text-base leading-relaxed md:text-lg">
          Inspect, edit, and snapshot{" "}
          <code className="text-foreground font-mono text-[0.92em]">
            localStorage
          </code>
          ,{" "}
          <code className="text-foreground font-mono text-[0.92em]">
            sessionStorage
          </code>
          , and cookies in one clean, powerful panel — built right into Chrome
          DevTools.
        </p>

        {/* CTA cluster */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.links.chromeWebStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine text-accent-foreground inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold shadow-lg shadow-teal-600/20 transition-transform hover:-translate-y-px dark:bg-teal-500 dark:shadow-teal-500/20"
          >
            <Chrome size={16} />
            Add to Chrome — It&apos;s Free
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine border-border bg-background/40 text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold backdrop-blur-sm transition-colors"
          >
            <Github size={16} />
            Star on GitHub
          </a>
        </div>

        <p className="text-syntax-comment font-mono mt-4 text-[11px]">
          <span className="text-syntax-punct">&gt;</span> Installs in 10 seconds
          · No signup · 100% local
        </p>

        {/* Product showcase */}
        <div className="relative mt-16 md:mt-20">
          {/* Glow under the frame */}
          <div className="bg-accent/20 absolute -inset-x-20 top-1/4 -z-10 h-2/3 blur-3xl" />

          <BrowserFrame
            url="example.com — DevTools · StorageKit"
            showDevTools
            className="mx-auto max-w-5xl"
          >
            <Image
              src={heroImage}
              alt="StorageKit Chrome DevTools panel"
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
