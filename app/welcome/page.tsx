import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Sparkles } from "lucide-react";

import SectionHeading from "@/components/primitives/section-heading";
import Showcase from "@/components/showcase";

export const metadata: Metadata = {
  title: { absolute: "Welcome to StorageKit" },
  description:
    "You just installed StorageKit — here's how to open it and what you can do with it.",
  // Post-install landing page: useful to visitors arriving from the
  // extension, meaningless as a search result.
  robots: { index: false, follow: true },
};

const firstRun = [
  {
    title: "Pin the extension",
    body: "Chrome hides new extensions behind the puzzle-piece icon in the toolbar. Click it, then pin StorageKit so it's always one click away.",
  },
  {
    title: "Open the panel",
    body: "Click the StorageKit icon for a quick look, or choose “Open in side panel” to dock it beside your page while you work.",
  },
  {
    title: "Refresh open tabs",
    body: "Tabs you had open before installing need one refresh before StorageKit can read their storage. New tabs work right away.",
  },
];

export default function WelcomePage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="relative py-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
          <div className="animate-orb-1 bg-accent/10 absolute -top-32 left-1/4 h-80 w-80 rounded-full blur-3xl" />
          <div className="animate-orb-2 bg-accent/5 absolute -top-20 right-1/4 h-64 w-64 rounded-full blur-3xl" />
          <div className="animate-orb-3 bg-accent/10 absolute top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <span className="bg-accent/10 text-accent-text inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
            <Sparkles size={12} aria-hidden />
            Thanks for installing
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-5xl md:leading-[1.1]">
            Welcome to <span className="text-accent-text-lg">StorageKit</span>
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg">
            Three quick things and it&apos;s docked beside your page.
          </p>

          <ol className="mx-auto mt-14 grid max-w-4xl gap-10 text-left sm:grid-cols-3 sm:gap-8">
            {firstRun.map((step, i) => (
              <li key={step.title} className="border-border/70 border-t pt-6">
                <span
                  aria-hidden
                  className="font-heading text-accent-text-lg block text-5xl leading-none font-bold tracking-tighter tabular-nums"
                >
                  0{i + 1}
                </span>
                <h2 className="mt-5 text-base font-semibold tracking-tight">
                  {step.title}
                </h2>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Showcase />

      {/* Next steps */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionHeading label="Ready to explore" heading="What's next?" />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="btn-shine border-border text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              Explore StorageKit
            </Link>
            <Link
              href="/changelog"
              className="text-accent-text hover:text-accent-text/80 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            >
              View Changelog
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
