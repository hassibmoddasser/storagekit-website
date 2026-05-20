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

const highlightClass: Record<NonNullable<CodeLine["highlight"]>, string> = {
  add: "bg-accent/10 before:bg-accent before:content-['+'] before:absolute before:left-1 before:text-accent before:text-xs",
  remove:
    "bg-rose-500/10 before:bg-rose-500 before:content-['-'] before:absolute before:left-1 before:text-rose-500 before:text-xs",
  active:
    "bg-accent/5 ring-1 ring-inset ring-accent/30",
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
  return (
    <div
      className={cn(
        "border-border bg-surface relative overflow-hidden rounded-xl border shadow-sm",
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
          "font-mono overflow-x-auto p-4 text-[12.5px] leading-relaxed",
          bodyClassName,
        )}
      >
        <code>
          {lines.map((line, i) => (
            <div
              key={i}
              className={cn(
                "relative flex items-start gap-3 -mx-4 px-4 py-0.5",
                line.muted && "opacity-50",
                line.highlight && highlightClass[line.highlight],
              )}
            >
              {showLineNumbers && (
                <span className="text-syntax-comment/60 w-5 shrink-0 select-none text-right">
                  {i + 1}
                </span>
              )}
              {line.prefix && (
                <span className="text-accent shrink-0">{line.prefix}</span>
              )}
              <span className={cn(line.strike && "line-through")}>
                {line.tokens.map((tok, j) => (
                  <span key={j} className={tokenClass[tok.t]}>
                    {tok.v}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
