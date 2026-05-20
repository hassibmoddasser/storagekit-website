import { Camera, Chrome, MousePointer2 } from "lucide-react";
import CodeBlock from "./primitives/code-block";
import SectionTag from "./primitives/section-tag";

const steps = [
  {
    n: "01",
    icon: Chrome,
    title: "Install in 10 seconds",
    description:
      "One click on the Chrome Web Store. No signup, no setup, no permissions you didn't ask for.",
    code: {
      title: "permissions.json",
      lang: "json",
      lines: [
        {
          tokens: [{ t: "punct" as const, v: "{" }],
        },
        {
          tokens: [
            { t: "key" as const, v: '  "active_tab"' },
            { t: "punct" as const, v: ": " },
            { t: "boolean" as const, v: "true" },
            { t: "punct" as const, v: "," },
          ],
        },
        {
          tokens: [
            { t: "key" as const, v: '  "cookies"' },
            { t: "punct" as const, v: ": " },
            { t: "boolean" as const, v: "true" },
            { t: "punct" as const, v: "," },
          ],
        },
        {
          tokens: [
            { t: "key" as const, v: '  "storage"' },
            { t: "punct" as const, v: ": " },
            { t: "boolean" as const, v: "true" },
          ],
        },
        {
          tokens: [{ t: "punct" as const, v: "}" }],
        },
        {
          tokens: [
            { t: "comment" as const, v: "// that's it. nothing else." },
          ],
        },
      ],
    },
  },
  {
    n: "02",
    icon: MousePointer2,
    title: "Open the panel",
    description:
      "StorageKit lives inside Chrome DevTools as its own panel. Click. Browse. Edit inline. Move on.",
    code: {
      title: "$ devtools",
      lang: "sh",
      lines: [
        {
          prefix: "$",
          tokens: [
            { t: "ident" as const, v: "devtools" },
            { t: "punct" as const, v: " → " },
            { t: "ident" as const, v: "StorageKit" },
          ],
        },
        {
          tokens: [{ t: "comment" as const, v: "  reading local storage..." }],
        },
        {
          tokens: [
            { t: "comment" as const, v: "  reading session storage..." },
          ],
        },
        { tokens: [{ t: "comment" as const, v: "  reading cookies..." }] },
        {
          tokens: [
            { t: "ident" as const, v: "  ✓ 23 items loaded" },
          ],
        },
      ],
    },
  },
  {
    n: "03",
    icon: Camera,
    title: "Snapshot your state",
    description:
      "Save your entire storage state with one click. Restore later, share with a teammate, or commit it to your repo.",
    code: {
      title: "snapshot.json",
      lang: "json",
      lines: [
        {
          tokens: [
            { t: "key" as const, v: '"name"' },
            { t: "punct" as const, v: ": " },
            { t: "string" as const, v: '"before-checkout"' },
            { t: "punct" as const, v: "," },
          ],
        },
        {
          tokens: [
            { t: "key" as const, v: '"created"' },
            { t: "punct" as const, v: ": " },
            { t: "number" as const, v: "1735689600" },
            { t: "punct" as const, v: "," },
          ],
        },
        {
          tokens: [
            { t: "key" as const, v: '"items"' },
            { t: "punct" as const, v: ": " },
            { t: "number" as const, v: "12" },
            { t: "punct" as const, v: "," },
          ],
        },
        {
          tokens: [
            { t: "key" as const, v: '"size"' },
            { t: "punct" as const, v: ": " },
            { t: "string" as const, v: '"2.4 KB"' },
          ],
        },
      ],
    },
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTag
          kind="flow"
          label="how-it-works"
          heading="Three steps. No friction."
          description="From install to first snapshot in under a minute."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.n}
                className="border-border bg-muted/30 relative flex flex-col overflow-hidden rounded-2xl border p-6"
              >
                {/* Step connector line (desktop only) */}
                {idx < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="from-border absolute top-1/2 -right-3 hidden h-px w-6 bg-gradient-to-r to-transparent md:block"
                  />
                )}

                <div className="flex items-center justify-between">
                  <span className="text-syntax-comment font-mono text-[11px] tracking-wider">
                    STEP {step.n}
                  </span>
                  <span className="bg-accent/10 text-accent inline-flex h-8 w-8 items-center justify-center rounded-md">
                    <Icon size={16} />
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-5">
                  <CodeBlock
                    title={step.code.title}
                    lang={step.code.lang}
                    lines={step.code.lines}
                    showLineNumbers={false}
                    className="text-[11.5px]"
                    bodyClassName="p-3"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
