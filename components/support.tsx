import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import { ArrowUpRight, Award, Coffee, Megaphone } from "lucide-react";
import ButtonLink from "./primitives/button";
import SectionHeading from "./primitives/section-heading";

const tiers = [
  {
    icon: Coffee,
    price: "Any amount",
    title: "Say thanks",
    reward:
      "Pick what it's worth to you. GitHub adds a Public Sponsor achievement to your profile.",
    cta: "Choose an amount",
    href: `${siteConfig.links.sponsor}?frequency=one-time`,
  },
  {
    icon: Megaphone,
    price: "$10",
    title: "Shoutout on LinkedIn",
    reward: "A public thank-you on LinkedIn for backing StorageKit.",
    cta: "Sponsor $10",
    href: `${siteConfig.links.sponsor}/sponsorships?tier_id=667111`,
    featured: true,
  },
  {
    icon: Award,
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
          description="No ads and no paid tier. If StorageKit saves you time, a one-time sponsorship on GitHub helps me keep building it."
        />

        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <li
                key={tier.title}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6",
                  tier.featured
                    ? "bg-background border-lime-500/40 shadow-xl shadow-lime-500/5 dark:border-lime-400/30"
                    : "border-border bg-muted/30",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="bg-background ring-border/70 grid size-10 place-items-center rounded-xl ring-1">
                    <Icon size={18} aria-hidden className="text-accent-text" />
                  </span>
                  <span className="text-syntax-comment font-mono text-[11px] tracking-wider uppercase">
                    One time
                  </span>
                </div>
                <p className="font-heading mt-6 text-3xl font-bold tracking-tight tabular-nums">
                  {tier.price}
                </p>
                <h3 className="mt-1 text-base font-semibold tracking-tight">
                  {tier.title}
                </h3>
                <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                  {tier.reward}
                </p>
                <ButtonLink
                  href={tier.href}
                  external
                  variant={tier.featured ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  {tier.cta}
                  <ArrowUpRight size={15} aria-hidden />
                </ButtonLink>
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
