import { cn } from "@/utils/cn";

interface SectionTagProps {
  kind?: string;
  label: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTag({
  kind = "section",
  label,
  heading,
  description,
  align = "center",
  className,
}: SectionTagProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto text-center" : "text-left",
        "max-w-2xl",
        className,
      )}
    >
      <p
        aria-hidden
        className={cn(
          "text-syntax-comment font-mono text-xs",
          align === "center" && "flex items-center justify-center gap-1",
        )}
      >
        <span className="text-syntax-punct">{"<"}</span>
        <span className="text-syntax-key">{kind}</span>
        <span className="text-syntax-punct">{"="}</span>
        <span className="text-syntax-string">&quot;{label}&quot;</span>
        <span className="text-syntax-punct">{"/>"}</span>
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance md:text-4xl">
        {heading}
      </h2>
      {description && (
        <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-base text-pretty md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
