"use client";

import { cn } from "@/utils/cn";
import { Bug, FlaskConical, KeyRound, Users } from "lucide-react";
import { useState } from "react";
import CodeBlock, { type CodeLine } from "./primitives/code-block";
import SectionHeading from "./primitives/section-heading";

interface UseCase {
  id: string;
  icon: typeof Bug;
  tab: string;
  headline: string;
  body: string;
  steps: string[];
  code: { title: string; lang: string; lines: CodeLine[] };
}

const cases: UseCase[] = [
  {
    id: "auth",
    icon: KeyRound,
    tab: "Auth debugging",
    headline: "Switch accounts without re-logging in",
    body: "Snapshot your authenticated state. Test as admin, restore as user, repeat. No log-in dance.",
    steps: [
      "Log in as the user you want to capture",
      "Click → Snapshot → name it",
      "Switch accounts or log out",
      "One click restores the entire session",
    ],
    code: {
      title: "admin-session.json",
      lang: "json",
      lines: [
        { tokens: [{ t: "punct", v: "{" }] },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"name"' },
            { t: "punct", v: ": " },
            { t: "string", v: '"admin-session"' },
            { t: "punct", v: "," },
          ],
        },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"items"' },
            { t: "punct", v: ": " },
            { t: "number", v: "14" },
            { t: "punct", v: "," },
            { t: "comment", v: " // all three types" },
          ],
        },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"size"' },
            { t: "punct", v: ": " },
            { t: "string", v: '"3.2 KB"' },
          ],
        },
        { tokens: [{ t: "punct", v: "}" }] },
        { tokens: [{ t: "comment", v: "// restore it after any logout" }] },
      ],
    },
  },
  {
    id: "jwt",
    icon: Bug,
    tab: "JWT decoding",
    headline: "See what's in your token without leaving the page",
    body: "Stop pasting tokens into jwt.io. StorageKit decodes JWTs inline with a visual badge and a clickable tree.",
    steps: [
      "Click any storage entry containing a JWT",
      "Header & payload render as a tree",
      "Inspect `iat`, `exp`, `role` at a glance",
      "Copy any nested value with one click",
    ],
    code: {
      title: "auth_token (decoded)",
      lang: "json",
      lines: [
        { tokens: [{ t: "punct", v: "{" }] },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"exp"' },
            { t: "punct", v: ": " },
            { t: "number", v: "1735776000" },
            { t: "punct", v: "," },
            { t: "comment", v: " // expires in 24h" },
          ],
        },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"role"' },
            { t: "punct", v: ": " },
            { t: "string", v: '"admin"' },
            { t: "punct", v: "," },
          ],
        },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"scopes"' },
            { t: "punct", v: ": " },
            { t: "punct", v: "[" },
            { t: "string", v: '"read"' },
            { t: "punct", v: ", " },
            { t: "string", v: '"write"' },
            { t: "punct", v: "]" },
          ],
        },
        { tokens: [{ t: "punct", v: "}" }] },
      ],
    },
  },
  {
    id: "ab",
    icon: FlaskConical,
    tab: "A/B testing & flags",
    headline: "Flip a feature flag in 1 second",
    body: "Edit the value in-place — no JSON.parse, no console.log dance. StorageKit re-encodes complex values on save.",
    steps: [
      "Find your feature flag key (search helps)",
      "Click → it expands as a tree",
      "Toggle the boolean / change the variant",
      "Refresh the page",
    ],
    code: {
      title: "features (live edit)",
      lang: "json",
      lines: [
        { tokens: [{ t: "punct", v: "{" }] },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"new_checkout"' },
            { t: "punct", v: ": " },
            { t: "boolean", v: "false" },
            { t: "punct", v: "," },
          ],
          highlight: "remove",
          strike: true,
        },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"new_checkout"' },
            { t: "punct", v: ": " },
            { t: "boolean", v: "true" },
            { t: "punct", v: "," },
          ],
          highlight: "add",
        },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"variant"' },
            { t: "punct", v: ": " },
            { t: "string", v: '"B"' },
          ],
        },
        { tokens: [{ t: "punct", v: "}" }] },
      ],
    },
  },
  {
    id: "share",
    icon: Users,
    tab: "Share with teammates",
    headline: "Reproduce a bug in one message",
    body: "Export the entire storage state as JSON, drop it in Slack, and your teammate gets the exact same broken setup on their machine.",
    steps: [
      "Hit the bug — snapshot the state",
      "Export → snapshot-bug-123.json",
      "Attach to your ticket or Slack thread",
      "Teammate imports → repro in seconds",
    ],
    code: {
      title: "snapshot-bug-431.json",
      lang: "json",
      lines: [
        { tokens: [{ t: "punct", v: "{" }] },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"name"' },
            { t: "punct", v: ": " },
            { t: "string", v: '"checkout-bug-431"' },
            { t: "punct", v: "," },
          ],
        },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"created"' },
            { t: "punct", v: ": " },
            { t: "string", v: '"2026-05-20T14:21:00Z"' },
            { t: "punct", v: "," },
          ],
        },
        {
          indent: 2,
          tokens: [
            { t: "key", v: '"items"' },
            { t: "punct", v: ": " },
            { t: "number", v: "12" },
          ],
        },
        { tokens: [{ t: "punct", v: "}" }] },
      ],
    },
  },
];

export default function UseCases() {
  const [active, setActive] = useState(cases[0].id);
  const current = cases.find((c) => c.id === active) ?? cases[0];
  const Icon = current.icon;

  // Arrow-key navigation is expected inside a tablist (ARIA APG).
  const onTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const i = cases.findIndex((c) => c.id === active);
    const next = cases[(i + delta + cases.length) % cases.length];
    setActive(next.id);
    document.getElementById(`usecase-tab-${next.id}`)?.focus();
  };

  return (
    <section id="use-cases" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Real workflows"
          heading="Made for the moments you debug most"
          description="Not just storage management — workflows for the things you actually do."
        />

        {/* Tab bar — horizontally scrollable on mobile */}
        <div className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Use cases"
            className="border-border bg-muted/40 -mx-6 inline-flex max-w-full overflow-x-auto rounded-full border p-1 sm:mx-0"
          >
            {cases.map((c) => {
              const TabIcon = c.icon;
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  id={`usecase-tab-${c.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`usecase-panel-${c.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={onTabKeyDown}
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "relative inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                    isActive
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <TabIcon size={13} aria-hidden />
                  {c.tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active case */}
        <div
          id={`usecase-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`usecase-tab-${current.id}`}
          tabIndex={0}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <div className="border-border bg-muted/30 relative flex flex-col rounded-2xl border p-7">
            <span className="bg-accent/10 text-accent-text inline-flex h-9 w-9 items-center justify-center rounded-lg">
              <Icon size={16} aria-hidden />
            </span>

            <h3 className="font-heading mt-4 text-2xl font-semibold tracking-tight">
              {current.headline}
            </h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              {current.body}
            </p>

            <ol className="border-border/60 mt-6 space-y-3 border-t pt-5 text-sm">
              {current.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="border-accent/40 text-accent-text mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-mono text-[10px]">
                    {i + 1}
                  </span>
                  <span className="text-foreground/85">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <CodeBlock
            title={current.code.title}
            lang={current.code.lang}
            lines={current.code.lines}
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}
