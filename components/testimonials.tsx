"use client";

import { cn } from "@/utils/cn";
import type { StoreRating } from "@/utils/store-rating";
import { Pause, Play, Star } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./primitives/section-heading";

const testimonials = [
  {
    name: "Shafiq Farokhi",
    quote:
      "Clean UI, good performance, and very practical features. It improved my workflow a lot.",
  },
  {
    name: "Mohammad Emad Rasooli",
    quote:
      "Nice extensions for All developers, I use it and it look amazing and useful. Thanks to developer.",
  },
  {
    name: "Ab.Raziq Quraishi",
    quote:
      "Really handy tool for day-to-day debugging. Saving and restoring snapshots is a huge time-saver.",
  },
  {
    name: "Monira Karimi",
    quote: "Much easier to manage browser storage than using DevTools.",
  },
  {
    name: "Mujtaba Sadat",
    quote: "Very efficient tool.",
  },
  {
    name: "Mohammad Hojjat Mahdave",
    quote:
      "I was tired of going through DevTools just to change a single value. A handy tool for inspecting browser storage.",
  },
  {
    name: "Zalmai Yaghoobi",
    quote:
      "It has made debugging much easier. With this extension, everything is in one place and clearly organized.",
  },
  {
    name: "Omid Ibrahimy",
    quote: "I love how the storage inspection and snapshot come in one place.",
  },
  {
    name: "Sohrab Rokhshan",
    quote:
      "Very useful extension for developers. Clean interface and simple to use. Great work by the developer!",
  },
  {
    name: "Mohsen Amani",
    quote: "Great, handy tool.",
  },
];

const rows = [testimonials.slice(0, 5), testimonials.slice(5)];

const palette = [
  "from-teal-500/30 to-sky-500/30",
  "from-violet-500/30 to-fuchsia-500/30",
  "from-amber-500/30 to-rose-500/30",
  "from-emerald-500/30 to-lime-500/30",
  "from-sky-500/30 to-indigo-500/30",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function hashName(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h;
}

function ReviewCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  const grad = palette[hashName(testimonial.name) % palette.length];
  return (
    <li className="border-border bg-muted/30 mr-4 flex h-36 w-72 shrink-0 flex-col justify-between rounded-xl border p-4 sm:w-76">
      <div>
        <span className="sr-only">Rated 5 out of 5.</span>
        <div className="flex gap-0.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <blockquote className="text-foreground/85 mt-2.5 line-clamp-3 text-sm leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      <div className="flex items-center gap-2.5">
        <span
          aria-hidden
          className={cn(
            "border-border/60 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-gradient-to-br text-[10px] font-semibold tracking-wider",
            grad,
          )}
        >
          {initials(testimonial.name)}
        </span>
        <p className="text-foreground truncate text-xs font-medium">
          {testimonial.name}
        </p>
      </div>
    </li>
  );
}

/* Each card carries its own right margin rather than the track using `gap`,
   so one copy of the list is exactly half the track and translating by -50%
   loops without a seam. */
function MarqueeRow({
  items,
  reverse = false,
  paused,
}: {
  items: typeof testimonials;
  reverse?: boolean;
  paused: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "flex w-max motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          paused && "[animation-play-state:paused]",
        )}
      >
        <ul className="flex">
          {items.map((t) => (
            <ReviewCard key={t.name} testimonial={t} />
          ))}
        </ul>
        <ul className="flex" aria-hidden>
          {items.map((t) => (
            <ReviewCard key={t.name} testimonial={t} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Testimonials({ rating }: { rating: StoreRating }) {
  const [paused, setPaused] = useState(false);

  return (
    <section id="testimonials" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="From the Web Store"
          heading="Loved by developers"
          description={`${rating.value} from all ${rating.count} ratings on the Chrome Web Store.`}
        />
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6">
        <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          {rows.map((items, i) => (
            <MarqueeRow
              key={i}
              items={items}
              reverse={i === 1}
              paused={paused}
            />
          ))}
        </div>

        {/* WCAG 2.2.2: motion that runs longer than five seconds needs a
            control that does not depend on hovering. */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="text-muted-foreground hover:text-foreground border-border/70 hover:bg-muted inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors"
          >
            {paused ? (
              <Play size={12} aria-hidden />
            ) : (
              <Pause size={12} aria-hidden />
            )}
            {paused ? "Resume reviews" : "Pause reviews"}
          </button>
        </div>
      </div>
    </section>
  );
}
