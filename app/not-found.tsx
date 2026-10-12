import { siteConfig } from "@/config/site";
import { ArrowRight, Chrome } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="relative">
      <section className="relative py-24 md:py-36">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <p className="text-syntax-comment font-mono text-xs" aria-hidden>
            <span className="text-syntax-punct">{"//"}</span> 404: no such key
          </p>

          <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            That page isn&apos;t in storage
          </h1>

          <p className="text-muted-foreground mt-5 text-base leading-relaxed md:text-lg">
            The link may be out of date, or the page may have moved. Everything
            StorageKit does is one click away from the homepage.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="btn-shine text-accent-foreground bg-accent-fill inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-px"
            >
              Back to the homepage
              <ArrowRight size={16} aria-hidden />
            </Link>
            <a
              href={siteConfig.links.chromeWebStore}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              <Chrome size={16} aria-hidden />
              Add to Chrome
            </a>
          </div>

          <p className="text-muted-foreground mt-10 text-sm">
            Looking for the{" "}
            <Link href="/changelog" className="text-accent-text underline">
              changelog
            </Link>{" "}
            or the{" "}
            <Link href="/privacy" className="text-accent-text underline">
              privacy policy
            </Link>
            ?
          </p>
        </div>
      </section>
    </main>
  );
}
