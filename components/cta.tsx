import { siteConfig } from "@/config/site";
import { Chrome } from "lucide-react";
import Image from "next/image";

import ctaImg from "@/assets/screenshots/hero.jpg";

export default function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-border bg-muted/30 relative isolate overflow-hidden rounded-3xl border px-6 py-16 sm:py-20 lg:px-12">
          {/* Decorative grid */}
          <div className="bg-grid mask-radial absolute inset-0 opacity-40" />

          <div className="relative grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Keep your storage{" "}
                <span className="text-foreground/95 bg-muted/60 rounded-md px-2 font-mono text-[0.92em] tracking-tight">
                  open
                </span>
                .
                <br className="hidden sm:block" /> Install StorageKit.
              </h2>

              <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-base leading-relaxed text-pretty md:mx-0 md:text-lg">
                Free, fully local, and no signup. Built by a developer who got
                tired of digging through the Application panel.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start md:justify-start">
                <a
                  href={siteConfig.links.chromeWebStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine text-accent-foreground bg-accent-fill inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-lg shadow-teal-600/20 transition-transform hover:-translate-y-px dark:shadow-teal-500/20"
                >
                  <Chrome size={18} aria-hidden />
                  Add to Chrome — It&apos;s Free
                </a>
                <a
                  href="/changelog"
                  className="border-border text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  What&apos;s new in {siteConfig.version}
                </a>
              </div>

              <p className="text-syntax-comment mt-4 font-mono text-[11px]">
                No signup · No config · Works on any site you can open
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md md:mx-0">
              <div className="bg-accent/20 absolute -inset-4 -z-10 rounded-3xl blur-2xl" />
              <div className="border-border relative aspect-4/3 rotate-1 overflow-hidden rounded-xl border bg-zinc-950 shadow-2xl shadow-black/20 transition-transform hover:rotate-0">
                <Image
                  src={ctaImg}
                  alt="The StorageKit panel with a storage key selected and its JSON value formatted"
                  fill
                  sizes="(min-width: 768px) 28rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Big colored radial behind everything */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-20 size-[64rem] -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r="512"
              cx="512"
              cy="512"
              fill="url(#cta-gradient)"
              fillOpacity="0.18"
            />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#14b8a6" />
                <stop offset="1" stopColor="#0d9488" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
