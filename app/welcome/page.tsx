import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Sparkles } from "lucide-react";

import SectionTag from "@/components/primitives/section-tag";
import Showcase from "@/components/showcase";

export const metadata: Metadata = {
  title: "Welcome to StorageKit",
  description:
    "You just installed StorageKit — here's what you can do with it.",
};

export default function WelcomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
          <div className="animate-orb-1 bg-accent/10 absolute -top-32 left-1/4 h-80 w-80 rounded-full blur-3xl" />
          <div className="animate-orb-2 bg-accent/5 absolute -top-20 right-1/4 h-64 w-64 rounded-full blur-3xl" />
          <div className="animate-orb-3 bg-accent/10 absolute top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <span className="bg-accent/10 text-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
            <Sparkles size={12} />
            Thanks for installing
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-5xl md:leading-[1.1]">
            Welcome to <span className="text-accent">StorageKit</span>
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg">
            The missing DevTools panel for browser storage. Open DevTools and
            look for the{" "}
            <code className="text-foreground font-mono">StorageKit</code> tab —
            you&apos;re ready to go.
          </p>
        </div>
      </section>

      <Showcase />

      {/* Next steps */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionTag
            kind="next"
            label="ready-to-explore"
            heading="What's next?"
          />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="btn-shine border-border text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              Explore StorageKit
            </Link>
            <Link
              href="/changelog"
              className="text-accent hover:text-accent/80 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            >
              View Changelog
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
