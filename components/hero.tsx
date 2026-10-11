import { siteConfig } from "@/config/site";
import { ArrowRight, Chrome, PanelRight, Star } from "lucide-react";
import Image from "next/image";

import heroImage from "@/assets/screenshots/hero.jpg";
import HeroBackdrop from "./hero-backdrop";
import BrowserFrame from "./primitives/browser-frame";
import ButtonLink from "./primitives/button";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <HeroBackdrop />
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
          <span className="text-foreground font-medium">
            {siteConfig.rating}
          </span>
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

        <h1 className="mx-auto mt-8 max-w-3xl text-4xl leading-[1.1] font-bold tracking-tight md:text-6xl md:leading-[1.05]">
          <span className="text-accent-text-lg">Browser storage</span>, without
          opening DevTools
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg">
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
          <ButtonLink href={siteConfig.links.chromeWebStore} external>
            <Chrome size={16} aria-hidden />
            Add to Chrome — It&apos;s Free
          </ButtonLink>
          <ButtonLink href="#features" variant="secondary">
            <PanelRight size={16} aria-hidden />
            See what it does
          </ButtonLink>
        </div>

        <p className="text-muted-foreground mt-4 text-xs">
          Free forever · No signup · Nothing leaves your machine
        </p>

        {/* Product showcase */}
        <div className="relative mt-16 md:mt-20">
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
