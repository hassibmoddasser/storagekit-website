"use client";

import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    name: "Alex Chen",
    quote: "Switching between user states used to mean logging out and back in. Now I just restore a snapshot.",
  },
  {
    name: "Sarah Miller",
    quote: "The JWT decoding alone is worth installing. No more jumping to external tools.",
  },
  {
    name: "James Park",
    quote: "I export storage snapshots for bug reports. The dev team can reproduce issues instantly.",
  },
  {
    name: "Priya Sharma",
    quote: "Finally, a storage panel that doesn't feel like an afterthought. Clean, fast, and reliable.",
  },
  {
    name: "Marcus Lee",
    quote: "We onboard new developers with shared snapshots. Saves hours of environment setup.",
  },
  {
    name: "Elena Torres",
    quote: "The live inspector is incredibly smooth. I can edit storage values and see results in real time.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="mx-3 w-[300px] shrink-0 rounded-xl border border-border bg-muted/30 p-5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="fill-accent text-accent" />
        ))}
      </div>

      <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="Testimonials" heading="Loved by developers" />
      </div>

      <div className="mt-16">
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
      </div>
    </section>
  );
}
