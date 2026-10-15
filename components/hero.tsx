import { siteConfig } from "@/config/site";
import type { StoreRating } from "@/utils/store-rating";
import { ArrowRight, PanelRight, Star } from "lucide-react";

import heroDark from "@/assets/screenshots/hero-dark.jpg";
import heroLight from "@/assets/screenshots/hero-light.jpg";
import AddToBrowser, { UnsupportedNote } from "./add-to-browser";
import HeroBackdrop from "./hero-backdrop";
import BrowserFrame from "./primitives/browser-frame";
import ButtonLink from "./primitives/button";
import ThemedScreenshot from "./primitives/themed-screenshot";
import WorksIn from "./works-in";

export default function Hero({ rating }: { rating: StoreRating }) {
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
          <span className="text-foreground font-medium">{rating.value}</span>
          <span className="bg-border h-3 w-px" aria-hidden />
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
            from {rating.count} ratings
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
          , and cookies, in a panel that docks right beside your page.
        </p>

        {/* CTA cluster */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={siteConfig.links.chromeWebStore} external>
            <AddToBrowser iconSize={16} suffix=", it's free" />
          </ButtonLink>
          <ButtonLink href="#features" variant="secondary">
            <PanelRight size={16} aria-hidden />
            See what it does
          </ButtonLink>
        </div>

        <div className="mt-4 flex flex-col items-center gap-2.5">
          <UnsupportedNote />
          <WorksIn />
        </div>

        {/* Product showcase */}
        <div className="relative mt-16 md:mt-20">
          <BrowserFrame
            url="app.northwind.dev/dashboard"
            label="side panel"
            className="mx-auto max-w-5xl"
          >
            <div className="relative aspect-[7/5]">
              <ThemedScreenshot
                src={{ light: heroLight, dark: heroDark }}
                alt="A web app with the StorageKit side panel docked beside it, listing local storage with type icons, a JWT expiry, feature-flag toggles, and the snapshot bar"
                sizes="(min-width: 1024px) 1024px, 100vw"
                priority
              />
            </div>
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
