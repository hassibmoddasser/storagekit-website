"use client";

import { cn } from "@/utils/cn";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "border-border/60 bg-background/80 text-muted-foreground hover:text-foreground hover:border-border fixed right-6 bottom-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all duration-300",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp size={16} />
    </button>
  );
}
