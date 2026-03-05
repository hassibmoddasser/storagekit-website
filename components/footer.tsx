import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="border-border/50 border-t py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Logo />
            <p className="text-muted-foreground mt-1 text-sm">
              The DevTools panel your browser storage deserves.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="https://chromewebstore.google.com/detail/lnfhnhfnlkjemkgdcppdlijpdjdmnnjd?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Chrome Web Store
            </a>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:info@hassib.co"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="border-border/50 text-muted-foreground mt-8 border-t pt-6 text-center text-sm">
          <p>
            Built by{" "}
            <a
              href="https://www.hassib.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent font-medium transition-colors"
            >
              Hassib Moddasser
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
