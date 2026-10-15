import author from "@/assets/author.jpg";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import {
  ArrowUpRight,
  Heart,
  Lock,
  MessageCircle,
  Repeat2,
  Sparkles,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import ButtonLink from "./primitives/button";
import SectionHeading from "./primitives/section-heading";

function AchievementMock() {
  return (
    <>
      <span className="bg-background ring-border/70 absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full py-1 pr-2.5 pl-1 shadow-sm ring-1">
        <span className="size-4 rounded-full bg-gradient-to-br from-sky-500/60 to-violet-500/60" />
        <span className="text-muted-foreground font-mono text-[10px]">
          github.com/you
        </span>
      </span>
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-6">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-pink-500/30 blur-xl" />
          <span className="ring-background relative grid size-14 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg ring-4 shadow-pink-500/25">
            <Heart size={24} className="fill-white text-white" />
          </span>
          <Sparkles
            size={14}
            className="absolute -top-1 -right-5 text-amber-400"
          />
          <Sparkles
            size={10}
            className="absolute bottom-0 -left-4 text-amber-400"
          />
        </div>
        <p className="text-foreground mt-3 text-xs font-semibold">
          Public Sponsor
        </p>
        <p className="text-muted-foreground mt-0.5 font-mono text-[10px] tracking-wider uppercase">
          Achievement unlocked
        </p>
      </div>
    </>
  );
}

function ShoutoutMock() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-4">
      <div className="flex items-center gap-2.5">
        <Image
          src={author}
          alt=""
          width={32}
          height={32}
          className="ring-border rounded-full ring-1"
        />
        <div className="min-w-0 leading-tight">
          <p className="text-foreground truncate text-[11px] font-semibold">
            {siteConfig.author.name}
          </p>
          <p className="text-muted-foreground truncate text-[10px]">
            Maker of StorageKit · 1d
          </p>
        </div>
      </div>
      <p className="text-foreground/85 mt-3 line-clamp-3 text-[11px] leading-relaxed">
        Big thanks to{" "}
        <span className="font-semibold text-sky-600 dark:text-sky-400">
          Your Name
        </span>{" "}
        for backing StorageKit. Sponsors like you keep it free for everyone.
      </p>
      <div className="text-muted-foreground mt-3 flex items-center gap-3 text-[10px]">
        <span className="inline-flex items-center gap-1">
          <ThumbsUp size={11} />
          Like
        </span>
        <span className="inline-flex items-center gap-1">
          <MessageCircle size={11} />
          Comment
        </span>
        <span className="inline-flex items-center gap-1">
          <Repeat2 size={11} />
          Repost
        </span>
      </div>
    </div>
  );
}

function SponsorWallMock() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="border-border/70 bg-window-chrome flex h-8 shrink-0 items-center gap-3 border-b px-3">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="bg-background/60 text-muted-foreground mx-auto flex h-5 items-center gap-1 rounded px-2 font-mono text-[10px]">
          <Lock size={9} />
          storagekit.dev
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center px-4">
        <p className="text-syntax-comment text-center font-mono text-[10px] tracking-wider uppercase">
          Sponsored by
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <span className="text-accent-text col-span-2 grid h-8 place-items-center rounded-md border border-dashed border-lime-500/70 bg-lime-500/10 text-[10px] font-medium">
            Your logo here
          </span>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="border-border h-8 rounded-md border border-dashed"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const tiers = [
  {
    mock: AchievementMock,
    price: "Any amount",
    title: "Say thanks",
    reward:
      "Pick what it's worth to you. GitHub adds a Public Sponsor achievement to your profile.",
    cta: "Choose an amount",
    href: `${siteConfig.links.sponsor}?frequency=one-time`,
  },
  {
    mock: ShoutoutMock,
    price: "$10",
    title: "Shoutout on LinkedIn",
    reward: "A public thank-you on LinkedIn for backing StorageKit.",
    cta: "Sponsor $10",
    href: `${siteConfig.links.sponsor}/sponsorships?tier_id=667111`,
    featured: true,
  },
  {
    mock: SponsorWallMock,
    price: "$50",
    title: "Your name on the website",
    reward: "Your logo or name on storagekit.dev as a project sponsor.",
    cta: "Sponsor $50",
    href: `${siteConfig.links.sponsor}/sponsorships?tier_id=604040`,
  },
];

export default function Support() {
  return (
    <section id="support" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Support"
          heading="Help keep StorageKit free"
          description="I build StorageKit on my own, with no ads and no paid tier. If it saves you time, a one-time sponsorship on GitHub helps me keep building it."
        />

        <ul className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {tiers.map((tier) => {
            const Mock = tier.mock;
            return (
              <li
                key={tier.title}
                className={cn(
                  "flex flex-col overflow-hidden rounded-2xl border",
                  tier.featured
                    ? "bg-background border-lime-500/40 shadow-xl shadow-lime-500/5 dark:border-lime-400/30"
                    : "border-border bg-muted/30",
                )}
              >
                <div className="bg-muted/60 p-2.5 sm:p-3">
                  <div
                    aria-hidden
                    className="ring-border/70 bg-surface relative h-44 overflow-hidden rounded-lg ring-1"
                  >
                    <Mock />
                  </div>
                </div>
                <div className="border-border/60 flex flex-1 flex-col border-t p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="font-heading text-2xl font-bold tracking-tight tabular-nums">
                      {tier.price}
                    </p>
                    <span className="text-syntax-comment font-mono text-[11px] tracking-wider uppercase">
                      One time
                    </span>
                  </div>
                  <h3 className="mt-1 text-base font-semibold tracking-tight">
                    {tier.title}
                  </h3>
                  <p className="text-muted-foreground mt-1.5 flex-1 text-sm leading-relaxed">
                    {tier.reward}
                  </p>
                  <ButtonLink
                    href={tier.href}
                    external
                    variant={tier.featured ? "primary" : "secondary"}
                    className="mt-5 w-full"
                  >
                    {tier.cta}
                    <ArrowUpRight size={15} aria-hidden />
                  </ButtonLink>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="text-muted-foreground mt-8 text-center text-sm">
          Checkout happens on GitHub Sponsors. Prefer to give monthly?{" "}
          <a
            href={siteConfig.links.sponsor}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-text hover:text-accent-text/80 font-medium transition-colors"
          >
            Sponsor from $5 a month
          </a>
        </p>
      </div>
    </section>
  );
}
