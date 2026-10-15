import type { StoreRating } from "@/utils/store-rating";
import { Radio, ShieldCheck, Sparkles, Star } from "lucide-react";
import StatPill from "./primitives/stat-pill";

export default function TrustStrip({ rating }: { rating: StoreRating }) {
  const stats = [
    {
      icon: Star,
      label: `from ${rating.count} ratings`,
      value: rating.value,
    },
    { icon: Radio, label: "network calls", value: "0" },
    { icon: ShieldCheck, label: "tracking", value: "0" },
    { icon: Sparkles, label: "forever free", value: "$0" },
  ];

  return (
    <section
      aria-label="Trust signals"
      className="border-border/40 relative border-y py-6"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-4">
          {stats.map((s) => (
            <StatPill
              key={s.label}
              icon={s.icon}
              label={s.label}
              value={s.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
