import { siteConfig } from "@/config/site";
import { Github } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

const sections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
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
      {
        label: "GitHub",
        href: siteConfig.links.github,
        external: true,
      },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "mailto:info@hassib.co" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-border/40 relative border-t pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(2,1fr)_auto]">
          <div className="max-w-sm">
            <Logo />
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              The DevTools panel your browser storage deserves. Free, open
              source, fully local.
            </p>

            <div className="text-syntax-comment font-mono mt-5 flex items-center gap-2 text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>status: stable</span>
              <span className="text-syntax-punct">·</span>
              <span>v2.4.0</span>
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

          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="border-border/70 text-muted-foreground hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <div className="border-border/40 text-muted-foreground font-mono mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs sm:flex-row">
          <p>
            <span className="text-syntax-comment">{"//"}</span> Built by{" "}
            <a
              href={siteConfig.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent font-medium transition-colors"
            >
              {siteConfig.author.name}
            </a>{" "}
            · © {new Date().getFullYear()}
          </p>
          <p className="text-syntax-comment">
            Made with too much coffee in Kabul.
          </p>
        </div>
      </div>
    </footer>
  );
}
