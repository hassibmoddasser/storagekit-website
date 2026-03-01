import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Link
              href="/"
              className="flex items-center gap-1 text-lg font-bold tracking-tight"
            >
              <span>Storage</span>
              <span className="text-accent">Kit</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              The DevTools panel your browser storage deserves.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Chrome Web Store
            </a>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            Built by{" "}
            <a
              href="https://www.hassib.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-accent"
            >
              Hassib Moddasser
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
