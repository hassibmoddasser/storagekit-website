"use client";

import { cn } from "@/utils/cn";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

interface FeatureCardProps {
  className?: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
  priority?: boolean;
  sizes?: string;
}

export default function FeatureCard({
  className,
  imageSrc,
  imageAlt,
  badge,
  title,
  description,
  priority = false,
  sizes = "(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw",
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);

  // Rect is read once per hover instead of on every mousemove — a
  // getBoundingClientRect() per event forces layout on each frame.
  const cacheRect = () => {
    rect.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    const r = rect.current;
    if (!el || !r) return;
    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={cacheRect}
      onMouseMove={onMove}
      className={cn(
        "spotlight group border-border bg-muted/30 hover:bg-muted/50 relative flex flex-col overflow-hidden rounded-2xl border transition-colors",
        className,
      )}
    >
      {/* The captures are of the panel's dark theme, so they sit in an inset
          well with its own frame — otherwise they read as holes in a light card. */}
      <div className="bg-muted/60 relative flex-1 overflow-hidden p-2.5 sm:p-3">
        <div className="ring-border/70 relative h-full w-full overflow-hidden rounded-lg bg-zinc-950 ring-1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-left-top"
          />
        </div>
      </div>
      <div className="border-border/60 border-t p-5">
        <span className="text-accent-text font-mono text-[10px] font-medium tracking-wider uppercase">
          {badge}
        </span>
        <h3 className="mt-1 text-base font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
