import { siteConfig } from "@/config/site";
import Link from "next/link";
import Logo from "./logo";

const sections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Compare", href: "/#compare" },
      { label: "Use cases", href: "/#use-cases" },
      { label: "Changelog", href: "/changelog" },
      {
        label: "Chrome Web Store",
        href: siteConfig.links.chromeWebStore,
        external: true,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: siteConfig.links.contact },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-border/40 relative border-t pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              The storage panel your browser never shipped. Free, fully local,
              docked beside your page.
            </p>

            <div className="text-syntax-comment mt-5 flex items-center gap-2 font-mono text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>status: stable</span>
              <span className="text-syntax-punct">·</span>
              <span>v{siteConfig.version}</span>
            </div>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h3 className="text-syntax-comment font-mono text-[11px] tracking-wider uppercase">
                {sec.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {sec.links.map((link) => {
                  if (link.external) {
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  }
                  if (link.href.startsWith("mailto:")) {
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border/40 text-muted-foreground mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 font-mono text-xs sm:flex-row">
          <p>
            Built by{" "}
            <a
              href={siteConfig.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent-text font-medium transition-colors"
            >
              {siteConfig.author.name}
            </a>{" "}
            · © {new Date().getFullYear()}
          </p>
          <p className="text-syntax-comment">Made with love far from home.</p>
        </div>
      </div>
    </footer>
  );
}
