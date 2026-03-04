import { Chrome } from "lucide-react";

export default function CTA() {
  return (
    <section className="border-border/50 border-t py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Ready to debug smarter?
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
          Join developers who use StorageKit to save time debugging web storage.
          Free, private, and open source.
        </p>
        <div className="mt-8">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine bg-teal-600 text-accent-foreground inline-flex h-12 items-center gap-2 rounded-xl px-6 text-base font-medium transition-all"
          >
            <Chrome size={18} />
            Add to Chrome — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
