import { Chrome } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="animate-orb-1 absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="animate-orb-2 absolute -top-20 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="animate-orb-3 absolute top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Now available for Chrome
        </div>

        <h1 className="animate-fade-in-up-delay-1 mx-auto mt-8 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-[1.15]">
          The Missing DevTools Panel for{" "}
          <span className="text-accent">Browser Storage</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Inspect, edit, and manage Local storage, Session storage, and
          Cookies in one clean, powerful interface.
        </p>

        <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-6 text-sm font-medium text-accent-foreground transition-shadow hover:shadow-lg hover:shadow-accent/25"
          >
            <Chrome size={16} />
            Add to Chrome, It&apos;s Free
          </a>
          <a
            href="#features"
            className="inline-flex h-11 items-center rounded-xl border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            See Features
          </a>
        </div>

        <div className="mt-16 animate-fade-in-up-delay-3">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-muted/50 shadow-2xl">
            {/* Placeholder for extension screenshot */}
            <div className="flex aspect-video items-center justify-center bg-linear-to-br from-muted to-muted/80 text-muted-foreground">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <Chrome size={32} className="text-accent" />
                </div>
                <p className="text-sm font-medium">Extension Screenshot</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Replace with actual screenshot
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
