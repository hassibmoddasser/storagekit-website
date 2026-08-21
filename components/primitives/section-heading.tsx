import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  label: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  heading,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto text-center" : "text-left",
        "max-w-2xl",
        className,
      )}
    >
      {/* text-foreground/75 rather than muted-foreground: at 11px on a tinted
          pill, zinc-500 lands just under 4.5:1. */}
      <span className="border-border/70 bg-muted/60 text-foreground/75 inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.12em] uppercase">
        {label}
      </span>

      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-balance md:text-4xl">
        {heading}
      </h2>

      {description && (
        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base text-pretty md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
