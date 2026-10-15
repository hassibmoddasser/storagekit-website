"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "./header";
import Logo from "./logo";
import ButtonLink from "./primitives/button";
import ThemeToggle from "./theme-toggle";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

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
    <>
      <header className="bg-background/80 border-border/60 sticky top-0 z-50 w-full border-b backdrop-blur-xl lg:hidden">
        <div className="flex h-14 items-center justify-between px-5">
          <Logo />
          <button
            onClick={() => setOpen(!open)}
            className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded-md p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-down panel */}
      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "bg-background border-border/60 fixed top-14 right-0 left-0 z-40 border-b transition-all duration-300 lg:hidden",
          open
            ? "translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => {
            const isHash = link.href.startsWith("/#");
            const Cmp = isHash ? "a" : Link;
            return (
              <Cmp
                key={link.href}
                href={link.href}
                {...(isHash
                  ? {
                      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                        setOpen(false);
                        handleSectionLinkClick(e, link.href);
                      },
                    }
                  : { onClick: () => setOpen(false) })}
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 -mx-2 rounded-md px-2 py-2 text-base transition-colors"
              >
                {link.label}
              </Cmp>
            );
          })}

          <div className="border-border/60 mt-3 flex items-center border-t pt-4">
            <ThemeToggle />
          </div>

          <div className="mt-3 flex gap-2">
            <ButtonLink
              href="/#support"
              onClick={(e) => {
                setOpen(false);
                handleSectionLinkClick(e, "/#support");
              }}
              variant="secondary"
              className="h-10 flex-1"
            >
              <Heart size={16} aria-hidden className="text-pink-500" />
              Sponsor
            </ButtonLink>
            <ButtonLink
              href={siteConfig.links.chromeWebStore}
              external
              className="h-10 flex-1 shadow-none"
            >
              Add to Chrome
            </ButtonLink>
          </div>
        </nav>
      </div>
    </>
  );
}
