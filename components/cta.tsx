import { Chrome } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Ready to debug smarter?
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty">
              Join developers who use StorageKit to save time debugging web
              storage. Free, private, and open source.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine bg-teal-600 text-accent-foreground inline-flex py-2.5 items-center gap-2 rounded-lg px-4 text-sm font-semibold"
              >
                <Chrome size={18} />
                Add to Chrome — It&apos;s Free
              </a>
            </div>
          </div>

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r="512"
              cx="512"
              cy="512"
              fill="url(#cta-gradient)"
              fillOpacity="0.15"
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
