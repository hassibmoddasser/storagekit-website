import { cn } from "@/utils/cn";
import type { LucideIcon } from "lucide-react";

interface StatPillProps {
  icon: LucideIcon;
  label: string;
  value: string | React.ReactNode;
  className?: string;
}

export default function StatPill({
  icon: Icon,
  label,
  value,
  className,
}: StatPillProps) {
  return (
    <div
      className={cn(
        "border-border/70 bg-muted/40 flex items-center gap-2.5 rounded-full border px-3 py-1.5",
        className,
      )}
    >
      <Icon size={14} className="text-accent shrink-0" />
      <div className="flex items-baseline gap-1.5 text-xs">
        <span className="font-mono text-foreground font-semibold">{value}</span>
        <span className="text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}
