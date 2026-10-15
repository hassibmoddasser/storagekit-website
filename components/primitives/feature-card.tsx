"use client";

import { cn } from "@/utils/cn";
import { useRef } from "react";
import ThemedScreenshot, { type ThemedSrc } from "./themed-screenshot";

type FeatureCardProps = {
  className?: string;
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
} & ({ imageSrc: ThemedSrc; imageAlt: string } | { visual: React.ReactNode });

export default function FeatureCard(props: FeatureCardProps) {
  const {
    className,
    badge,
    title,
    description,
    priority = false,
    sizes = "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw",
    aspect = "aspect-3/2",
    imagePosition = "object-center",
  } = props;
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
      <div className="px-4 pt-4 sm:px-5 sm:pt-5">
        <div
          className={cn(
            "ring-border/70 bg-surface relative w-full overflow-hidden rounded-xl shadow-sm ring-1",
            aspect,
          )}
        >
          {"visual" in props ? (
            props.visual
          ) : (
            <ThemedScreenshot
              src={props.imageSrc}
              alt={props.imageAlt}
              sizes={sizes}
              priority={priority}
              className={imagePosition}
            />
          )}
        </div>
      </div>
      <div className="p-4 sm:p-5">
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
