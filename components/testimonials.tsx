import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import { Quote, Star } from "lucide-react";
import SectionTag from "./primitives/section-tag";

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

const FEATURED = "Mohammad Hojjat Mahdave";

const supporting = testimonials.filter((t) => t.name !== FEATURED);

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

function Avatar({ name }: { name: string }) {
  const grad = palette[hashName(name) % palette.length];
  return (
    <div
      className={cn(
        "border-border/60 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-gradient-to-br text-[10px] font-semibold tracking-wider",
        grad,
      )}
    >
      {initials(name)}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="border-border bg-muted/30 hover:bg-muted/50 flex w-full flex-col justify-between gap-3 rounded-xl border p-5 transition-colors">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5" aria-label="Rated 5 out of 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                aria-hidden
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <Quote size={14} aria-hidden className="text-muted-foreground/50" />
        </div>
        <blockquote className="text-foreground/85 mt-3 text-sm leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      <div className="flex items-center gap-2.5">
        <Avatar name={testimonial.name} />
        <div className="min-w-0">
          <p className="text-foreground truncate text-xs font-medium">
            {testimonial.name}
          </p>
          <p className="text-syntax-comment truncate font-mono text-[10px]">
            via Chrome Web Store
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTag
          kind="reviews"
          label="from-the-web-store"
          heading="Loved by developers"
          description={`${siteConfig.rating} from all ${siteConfig.reviewCount} reviews on the Chrome Web Store.`}
        />

        {/* Featured pull-quote */}
        <figure className="border-border bg-muted/30 relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border p-8 md:p-10">
          <div className="bg-accent/10 absolute -top-6 -left-6 h-20 w-20 rounded-full blur-2xl" />
          <Quote
            size={36}
            aria-hidden
            className="text-accent/40 absolute top-6 right-6"
          />
          <blockquote className="font-heading text-foreground relative text-xl leading-[1.5] font-medium md:text-2xl">
            &ldquo;I was tired of going through DevTools just to change a single
            value. A handy tool for inspecting browser storage.&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <Avatar name={FEATURED} />
            <div>
              <div className="text-foreground text-sm font-medium">
                {FEATURED}
              </div>
              <div className="text-syntax-comment font-mono text-[11px]">
                ★ 5.0 · Chrome Web Store
              </div>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supporting.map((t) => (
            <li key={t.name} className="flex">
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
