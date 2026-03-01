import { Chrome } from "lucide-react";

export default function CTA() {
  return (
    <section className="border-t border-border/50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Ready to debug smarter?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Join developers who use StorageKit to save time debugging web
          storage. Free, private, and open source.
        </p>
        <div className="mt-8">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-6 text-base font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-accent/30"
          >
            <Chrome size={18} />
            Add to Chrome — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
