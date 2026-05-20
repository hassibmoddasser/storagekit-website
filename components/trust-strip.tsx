import { GitFork, ShieldCheck, Sparkles, Star } from "lucide-react";
import StatPill from "./primitives/stat-pill";

const stats = [
  { icon: Star, label: "rating", value: "5.0" },
  { icon: ShieldCheck, label: "tracking", value: "0" },
  { icon: GitFork, label: "open source", value: "MIT" },
  { icon: Sparkles, label: "forever free", value: "$0" },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      className="border-border/40 relative border-y py-6"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-syntax-comment font-mono mb-4 hidden text-center text-[11px] tracking-wider uppercase sm:block">
          <span className="text-syntax-punct">{"//"}</span> trusted by developers
          who care about their tools
        </div>

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
