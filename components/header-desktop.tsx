"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "./header";
import Logo from "./logo";
import ButtonLink from "./primitives/button";
import ThemeToggle from "./theme-toggle";

export default function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("/#") || window.location.pathname !== "/") return;

      const target = document.querySelector(href.slice(1));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [],
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 hidden w-full border-b transition-all duration-300 lg:block",
        scrolled
          ? "border-border/50 bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Logo />

          <nav className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isHash = link.href.startsWith("/#");
              const Cmp = isHash ? "a" : Link;
              return (
                <Cmp
                  key={link.href}
                  href={link.href}
                  {...(isHash
                    ? {
                        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
                          handleSectionLinkClick(e, link.href),
                      }
                    : {})}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Cmp>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink
            href={siteConfig.links.chromeWebStore}
            external
            size="sm"
            className="font-medium shadow-none"
          >
            Add to Chrome
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
