"use client";

import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Logo from "./logo";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "mailto:info@hassib.co" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("/#")) {
        return;
      }

      if (window.location.pathname !== "/") {
        return;
      }

      const selector = href.slice(1);
      const target = document.querySelector(selector);

      if (!target) {
        return;
      }

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [],
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] transition-all duration-300",
        scrolled
          ? "border-border/50 bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSectionLinkClick(e, link.href)}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://chromewebstore.google.com/detail/lnfhnhfnlkjemkgdcppdlijpdjdmnnjd?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine text-accent-foreground inline-flex h-9 items-center rounded-lg bg-teal-600 px-4 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Add to Chrome
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-border bg-background border-t px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMobileOpen(false);
                  handleSectionLinkClick(e, link.href);
                }}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://chromewebstore.google.com/detail/lnfhnhfnlkjemkgdcppdlijpdjdmnnjd?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine bg-accent text-accent-foreground inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90"
            >
              Add to Chrome
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
