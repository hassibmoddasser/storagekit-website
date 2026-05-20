import { ArrowRight, MousePointerClick, Sparkles } from "lucide-react";
import CodeBlock from "./primitives/code-block";
import SectionTag from "./primitives/section-tag";

const beforeSteps = [
  "Open DevTools",
  "Click »Application«",
  "Expand »Local Storage«",
  "Find the key",
  "Decode JSON in your head",
  "Edit. Refresh. Repeat.",
];

const afterSteps = [
  "Open StorageKit",
  "It's already there.",
];

export default function Problem() {
  return (
    <section className="bg-muted/40 relative overflow-hidden rounded-4xl py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="bg-accent/5 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionTag
          kind="problem"
          label="the-old-way"
          heading="Debugging storage shouldn't slow you down"
          description="You shouldn't need eight clicks and a mental JWT decoder just to flip a feature flag."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* BEFORE */}
          <div className="border-border bg-background relative flex flex-col overflow-hidden rounded-2xl border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-rose-500/10 text-rose-500 dark:text-rose-400 inline-flex h-7 w-7 items-center justify-center rounded-md">
                  <MousePointerClick size={14} />
                </span>
                <h3 className="text-base font-semibold">DevTools way</h3>
              </div>
              <span className="text-syntax-comment font-mono text-[11px]">
                ~8 clicks
              </span>
            </div>

            <ol className="mt-5 space-y-2.5 text-sm">
              {beforeSteps.map((step, i) => (
                <li
                  key={i}
                  className="text-muted-foreground font-mono flex items-start gap-2.5"
                >
                  <span className="text-syntax-comment min-w-[1.5rem] select-none text-right tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/80">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-auto pt-6">
              <CodeBlock
                lang="dx"
                title="developer experience"
                showLineNumbers={false}
                lines={[
                  {
                    tokens: [
                      { t: "comment", v: "// ugh, where's that token again..." },
                    ],
                  },
                  {
                    tokens: [
                      { t: "ident", v: "JSON" },
                      { t: "punct", v: "." },
                      { t: "ident", v: "parse" },
                      { t: "punct", v: "(" },
                      { t: "ident", v: "localStorage" },
                      { t: "punct", v: "." },
                      { t: "ident", v: "getItem" },
                      { t: "punct", v: "(" },
                      { t: "string", v: '"user"' },
                      { t: "punct", v: "))" },
                    ],
                  },
                  {
                    tokens: [
                      { t: "comment", v: "// VM12345: SyntaxError: Unexpected token" },
                    ],
                  },
                ]}
                bodyClassName="bg-rose-500/[0.03]"
              />
            </div>
          </div>

          {/* AFTER */}
          <div className="border-accent/30 bg-background relative flex flex-col overflow-hidden rounded-2xl border p-6 shadow-lg shadow-teal-500/[0.07]">
            <div className="bg-accent/[0.07] pointer-events-none absolute inset-0 -z-10" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-accent/10 text-accent inline-flex h-7 w-7 items-center justify-center rounded-md">
                  <Sparkles size={14} />
                </span>
                <h3 className="text-base font-semibold">StorageKit way</h3>
              </div>
              <span className="text-accent font-mono text-[11px]">1 click</span>
            </div>

            <ol className="mt-5 space-y-2.5 text-sm">
              {afterSteps.map((step, i) => (
                <li
                  key={i}
                  className="font-mono flex items-start gap-2.5"
                >
                  <span className="text-syntax-comment min-w-[1.5rem] select-none text-right tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/90">{step}</span>
                </li>
              ))}
            </ol>

            <ul className="mt-5 space-y-2 text-sm">
              {[
                "Inline editing — no JSON.parse roulette",
                "JWTs decoded automatically",
                "Snapshot a state, restore it later",
                "Search across keys and values",
              ].map((line) => (
                <li
                  key={line}
                  className="text-muted-foreground flex items-start gap-2"
                >
                  <ArrowRight
                    size={14}
                    className="text-accent mt-1 shrink-0"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <CodeBlock
                lang="dx"
                title="developer experience"
                showLineNumbers={false}
                lines={[
                  {
                    tokens: [
                      { t: "comment", v: "// it's just... right there." },
                    ],
                  },
                  {
                    tokens: [
                      { t: "key", v: "user" },
                      { t: "punct", v: ": " },
                      { t: "punct", v: "{ " },
                      { t: "key", v: "id" },
                      { t: "punct", v: ": " },
                      { t: "number", v: "42" },
                      { t: "punct", v: ", " },
                      { t: "key", v: "name" },
                      { t: "punct", v: ": " },
                      { t: "string", v: '"Ada"' },
                      { t: "punct", v: " }" },
                    ],
                  },
                  {
                    tokens: [
                      { t: "comment", v: "// click any field. edit. done." },
                    ],
                  },
                ]}
                bodyClassName="bg-accent/[0.04]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
