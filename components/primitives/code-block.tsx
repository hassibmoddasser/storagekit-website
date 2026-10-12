import { cn } from "@/utils/cn";

type Token =
  | { t: "key"; v: string }
  | { t: "string"; v: string }
  | { t: "number"; v: string }
  | { t: "boolean"; v: string }
  | { t: "punct"; v: string }
  | { t: "comment"; v: string }
  | { t: "ident"; v: string }
  | { t: "plain"; v: string };

export interface CodeLine {
  prefix?: string; // e.g. "$" or ">"
  /** Indent in characters. Kept out of the tokens so a strikethrough
   *  starts at the first real glyph instead of crossing the whitespace. */
  indent?: number;
  tokens: Token[];
  muted?: boolean;
  strike?: boolean;
  highlight?: "add" | "remove" | "active";
}

const tokenClass: Record<Token["t"], string> = {
  key: "text-syntax-key",
  string: "text-syntax-string",
  number: "text-syntax-number",
  boolean: "text-syntax-boolean",
  punct: "text-syntax-punct",
  comment: "text-syntax-comment italic",
  ident: "text-foreground/90",
  plain: "text-muted-foreground",
};

/* A diff row is a tinted band with a rule down its left edge. The +/- glyph
   lives in a real gutter column below — as a pseudo-element it rendered as a
   coloured block, because its text and its background were the same colour. */
const highlightClass: Record<NonNullable<CodeLine["highlight"]>, string> = {
  add: "bg-lime-500/[0.09] shadow-[inset_2px_0_0_var(--color-lime-500)]",
  remove: "bg-rose-500/[0.09] shadow-[inset_2px_0_0_var(--color-rose-500)]",
  active: "bg-accent/5 ring-1 ring-inset ring-accent/30",
};

const markerClass: Record<NonNullable<CodeLine["highlight"]>, string> = {
  add: "text-lime-700 dark:text-lime-400",
  remove: "text-rose-600 dark:text-rose-400",
  active: "text-transparent",
};

const markerGlyph: Record<NonNullable<CodeLine["highlight"]>, string> = {
  add: "+",
  remove: "-",
  active: "",
};

interface CodeBlockProps {
  title?: string;
  lang?: string;
  lines: CodeLine[];
  showLineNumbers?: boolean;
  className?: string;
  bodyClassName?: string;
}

export default function CodeBlock({
  title,
  lang = "js",
  lines,
  showLineNumbers = true,
  className,
  bodyClassName,
}: CodeBlockProps) {
  // The gutter is reserved for the whole block, so marked and unmarked
  // lines share one left edge instead of shifting against each other.
  const hasMarkers = lines.some(
    (l) => l.highlight === "add" || l.highlight === "remove",
  );

  return (
    <div
      className={cn(
        "border-border bg-surface relative flex flex-col overflow-hidden rounded-xl border shadow-sm",
        className,
      )}
    >
      {(title || lang) && (
        <div className="border-border/70 flex items-center justify-between gap-2 border-b px-3 py-1.5">
          <div className="flex items-center gap-2">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            {title && (
              <span className="text-muted-foreground font-mono text-[11px]">
                {title}
              </span>
            )}
          </div>
          {lang && (
            <span className="text-syntax-comment font-mono text-[10px] tracking-wider uppercase">
              {lang}
            </span>
          )}
        </div>
      )}
      <pre
        className={cn(
          "flex-1 overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed",
          bodyClassName,
        )}
      >
        <code>
          {lines.map((line, i) => (
            <div
              key={i}
              className={cn(
                "relative -mx-4 flex items-start gap-3 px-4 py-0.5",
                line.muted && "opacity-50",
                line.highlight && highlightClass[line.highlight],
              )}
            >
              {hasMarkers && (
                <span
                  aria-hidden
                  className={cn(
                    "w-2 shrink-0 text-center select-none",
                    line.highlight
                      ? markerClass[line.highlight]
                      : "text-transparent",
                  )}
                >
                  {line.highlight ? markerGlyph[line.highlight] : "+"}
                </span>
              )}
              {showLineNumbers && (
                <span className="text-syntax-comment w-5 shrink-0 text-right select-none">
                  {i + 1}
                </span>
              )}
              {line.prefix && (
                <span className="text-accent-text shrink-0">{line.prefix}</span>
              )}
              <span>
                {line.indent ? (
                  <span
                    aria-hidden
                    className="inline-block"
                    style={{ width: `${line.indent}ch` }}
                  />
                ) : null}
                <span className={cn(line.strike && "line-through")}>
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tokenClass[tok.t]}>
                      {tok.v}
                    </span>
                  ))}
                </span>
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
