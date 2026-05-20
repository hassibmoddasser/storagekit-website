"use client";

import { cn } from "@/utils/cn";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import SectionTag from "./primitives/section-tag";

import placeholderImg from "@/assets/screenshots/placeholder.svg";

interface FeatureCardProps {
  className?: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
}

function FeatureCard({
  className,
  imageSrc,
  imageAlt,
  badge,
  title,
  description,
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "spotlight group border-border bg-muted/30 relative flex flex-col overflow-hidden rounded-2xl border transition-colors hover:bg-muted/50",
        className,
      )}
    >
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="border-border/60 border-t p-5">
        <span className="text-accent font-mono text-[10px] tracking-wider uppercase">
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

export default function Showcase() {
  return (
    <section id="features" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTag
          kind="features"
          label="what-you-get"
          heading="Everything you need to debug storage"
          description="A complete toolkit — not just a re-skin of the Application panel."
        />

        <div className="mt-14 grid auto-rows-[16rem] gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-[16rem_16rem_16rem]">
          {/* Suggested filename: feature-inspector.png */}
          <FeatureCard
            badge="inspector"
            title="Live Storage Inspector"
            description="Browse all your storage in one organized panel. Create, edit, and explore nested JSON without leaving DevTools."
            imageSrc={placeholderImg}
            imageAlt="Live storage inspector"
            className="lg:col-span-4 lg:row-span-2"
          />

          {/* Suggested filename: feature-snapshots.png */}
          <FeatureCard
            badge="snapshots"
            title="Save & restore states"
            description="One click captures every value. Restore later or share with a teammate."
            imageSrc={placeholderImg}
            imageAlt="Snapshots panel showing saved storage states"
            className="lg:col-span-2"
          />

          {/* Suggested filename: feature-decode.png */}
          <FeatureCard
            badge="decoding"
            title="Automatic value decoding"
            description="JWT tokens, JSON trees, numbers, booleans — all detected and rendered properly."
            imageSrc={placeholderImg}
            imageAlt="Decoded JWT and JSON tree view"
            className="lg:col-span-2"
          />

          {/* Suggested filename: feature-overview.png */}
          <FeatureCard
            badge="overview"
            title="Storage at a glance"
            description="Item counts and bytes used per storage type — see usage before you debug."
            imageSrc={placeholderImg}
            imageAlt="Storage overview chart"
            className="lg:col-span-2"
          />

          {/* Suggested filename: feature-search.png */}
          <FeatureCard
            badge="search"
            title="Search keys & values"
            description="Find that one flag instantly — fuzzy match across keys, values, and cookies."
            imageSrc={placeholderImg}
            imageAlt="Search results filtering storage entries"
            className="lg:col-span-2"
          />

          {/* Suggested filename: feature-privacy.png */}
          <FeatureCard
            badge="privacy"
            title="100% local. Forever."
            description="Zero network calls, zero analytics. Your data never leaves your machine."
            imageSrc={placeholderImg}
            imageAlt="Privacy guarantee illustration"
            className="lg:col-span-2"
          />

          {/* Suggested filename: feature-export-import.png */}
          <FeatureCard
            badge="portability"
            title="Export & import as JSON"
            description="Backup, share with teammates via GitHub or Slack, or restore your snapshots across machines — it's just a JSON file."
            imageSrc={placeholderImg}
            imageAlt="Exported snapshot JSON file"
            className="sm:col-span-2 lg:col-span-6"
          />
        </div>

        {/* Subtle footer line of additional features */}
        <div className="text-syntax-comment font-mono mt-10 grid grid-cols-2 gap-x-6 gap-y-2 text-center text-xs sm:flex sm:flex-wrap sm:justify-center">
          {[
            "inline editing",
            "dark & light themes",
            "domain filtering",
            "duplicate key detection",
            "cookie attribute editor",
            "quota error handling",
            "compact + dashboard layouts",
          ].map((line) => (
            <span key={line} className="flex items-center justify-center gap-2">
              <span className="bg-accent/40 inline-block h-1 w-1 rounded-full" />
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
