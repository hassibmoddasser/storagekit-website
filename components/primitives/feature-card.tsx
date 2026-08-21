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
  /** Well aspect ratio. Match the source image so the crop never lands
   *  halfway through a row of the UI. */
  aspect?: string;
  /** Crop anchor, for the one capture whose well is deliberately wider than
   *  the source so the bottom rows fall away. */
  imagePosition?: string;
}

export default function FeatureCard({
  className,
  imageSrc,
  imageAlt,
  badge,
  title,
  description,
  priority = false,
  sizes = "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw",
  aspect = "aspect-3/2",
  imagePosition = "object-center",
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
      <div className="bg-muted/60 relative overflow-hidden p-2.5 sm:p-3">
        <div
          className={cn(
            "ring-border/70 relative w-full overflow-hidden rounded-lg bg-zinc-950 ring-1",
            aspect,
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", imagePosition)}
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
