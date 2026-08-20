import { cn } from "@/utils/cn";
import type { LucideIcon } from "lucide-react";

interface FeatureNoteProps {
  className?: string;
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
}

export default function FeatureNote({
  className,
  icon: Icon,
  badge,
  title,
  description,
}: FeatureNoteProps) {
  return (
    <div
      className={cn(
        "border-border bg-muted/30 hover:bg-muted/50 relative flex flex-col justify-center rounded-2xl border p-6 transition-colors",
        className,
      )}
    >
      <span className="bg-accent/10 text-accent-text mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg">
        <Icon size={17} aria-hidden />
      </span>
      <span className="text-accent-text font-mono text-[10px] font-medium tracking-wider uppercase">
        {badge}
      </span>
      <h3 className="mt-1 text-base font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
