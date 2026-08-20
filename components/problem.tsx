import { ArrowRight, MousePointerClick, Sparkles } from "lucide-react";
import CodeBlock from "./primitives/code-block";
import SectionTag from "./primitives/section-tag";

const beforeSteps = [
  "Open DevTools",
  "Click »Application«",
  "Expand »Local Storage«",
  "Find the key",
  "Decode the JWT by hand",
  "Lose it all on the next login",
];

const afterSteps = ["Open the side panel", "It stays open while you work."];

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
          description="The Application panel can read your storage. It can't decode a JWT, search inside values, or save a state you can restore later."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* BEFORE */}
          <div className="border-border bg-background relative flex flex-col overflow-hidden rounded-2xl border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-rose-500/10 text-rose-500 dark:text-rose-400">
                  <MousePointerClick size={14} />
                </span>
                <h3 className="text-base font-semibold">Application panel</h3>
              </div>
              <span className="text-syntax-comment font-mono text-[11px]">
                built in
              </span>
            </div>

            <ol className="mt-5 space-y-2.5 text-sm">
              {beforeSteps.map((step, i) => (
                <li
                  key={i}
                  className="text-muted-foreground flex items-start gap-2.5 font-mono"
                >
                  <span className="text-syntax-comment min-w-[1.5rem] text-right tabular-nums select-none">
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
                      {
                        t: "comment",
                        v: "// ugh, where's that token again...",
                      },
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
                      {
                        t: "comment",
                        v: "// VM12345: SyntaxError: Unexpected token",
                      },
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
                <span className="bg-accent/10 text-accent-text inline-flex h-7 w-7 items-center justify-center rounded-md">
                  <Sparkles size={14} />
                </span>
                <h3 className="text-base font-semibold">StorageKit</h3>
              </div>
              <span className="text-accent-text font-mono text-[11px]">
                side panel
              </span>
            </div>

            <ol className="mt-5 space-y-2.5 text-sm">
              {afterSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5 font-mono">
                  <span className="text-syntax-comment min-w-[1.5rem] text-right tabular-nums select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/90">{step}</span>
                </li>
              ))}
            </ol>

            <ul className="mt-5 space-y-2 text-sm">
              {[
                "Inline editing — no JSON.parse roulette",
                "JWTs decoded automatically, algorithm and all",
                "Snapshot a state, restore it after logout",
                "Search inside values, not just key names",
              ].map((line) => (
                <li
                  key={line}
                  className="text-muted-foreground flex items-start gap-2"
                >
                  <ArrowRight
                    size={14}
                    className="text-accent-text mt-1 shrink-0"
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
