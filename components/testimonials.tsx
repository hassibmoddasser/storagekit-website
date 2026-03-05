"use client";

import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import SectionLabel from "./section-label";

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
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="border-border bg-muted/30 mx-3 w-80 shrink-0 rounded-xl border p-5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="fill-accent text-accent" />
        ))}
      </div>

      <blockquote className="text-muted-foreground mt-3 text-sm leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <p className="mt-3 text-xs font-medium">{testimonial.name}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-14 md:py-20"
      style={{ overflowAnchor: "none" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="Testimonials" heading="Loved by developers" />
      </div>

      <div className="mt-16 space-y-6">
        <Marquee
          speed={40}
          pauseOnHover
          gradient
          gradientColor="var(--background)"
          gradientWidth={80}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </Marquee>

        <Marquee
          speed={40}
          pauseOnHover
          direction="right"
          gradient
          gradientColor="var(--background)"
          gradientWidth={80}
        >
          {[...testimonials].reverse().map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
