import {
  Braces,
  Camera,
  Cookie,
  CopyX,
  Database,
  FileJson2,
  Gauge,
  KeyRound,
  Layers,
  PanelRight,
  Search,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/utils/cn";
import SectionHeading from "./primitives/section-heading";

type Tone = "good" | "neutral" | "weak";

interface Cell {
  tone: Tone;
  text: string;
}

interface Row {
  icon: LucideIcon;
  label: string;
  storagekit: Cell;
  application: Cell;
  others: Cell;
}

/* Every StorageKit and Application-panel cell is checked against what each one
   actually does. The third column is deliberately hedged — there is no way to
   verify a claim about every other extension on the store. */
const rows: Row[] = [
  {
    icon: PanelRight,
    label: "Where it lives",
    storagekit: { tone: "good", text: "Docked side panel" },
    application: { tone: "neutral", text: "Inside DevTools" },
    others: { tone: "neutral", text: "Popup window" },
  },
  {
    icon: Layers,
    label: "All three storage types in one list",
    storagekit: { tone: "good", text: "Local, session, cookies" },
    application: { tone: "neutral", text: "Separate trees" },
    others: { tone: "neutral", text: "Varies" },
  },
  {
    icon: Braces,
    label: "Editing nested JSON values",
    storagekit: { tone: "good", text: "Visual tree editor" },
    application: { tone: "weak", text: "Raw text only" },
    others: { tone: "weak", text: "Rarely" },
  },
  {
    icon: KeyRound,
    label: "JWT decoding",
    storagekit: { tone: "good", text: "Automatic, with algorithm" },
    application: { tone: "weak", text: "No" },
    others: { tone: "weak", text: "Rarely" },
  },
  {
    icon: Camera,
    label: "Save and restore snapshots",
    storagekit: { tone: "good", text: "Yes, scoped per site" },
    application: { tone: "weak", text: "No" },
    others: { tone: "weak", text: "Rarely" },
  },
  {
    icon: FileJson2,
    label: "Export and import as JSON",
    storagekit: { tone: "good", text: "Yes" },
    application: { tone: "weak", text: "No" },
    others: { tone: "neutral", text: "Some" },
  },
  {
    icon: Search,
    label: "Search inside values",
    storagekit: { tone: "good", text: "Keys and values" },
    application: { tone: "good", text: "Keys and values" },
    others: { tone: "neutral", text: "Usually keys only" },
  },
  {
    icon: Gauge,
    label: "Size and item count per type",
    storagekit: { tone: "good", text: "Yes" },
    application: { tone: "neutral", text: "Partial" },
    others: { tone: "neutral", text: "Varies" },
  },
  {
    icon: Cookie,
    label: "Cookie attributes",
    storagekit: { tone: "neutral", text: "Full detail, read-only" },
    application: { tone: "good", text: "Editable" },
    others: { tone: "neutral", text: "Varies" },
  },
  {
    icon: CopyX,
    label: "Duplicate key warning",
    storagekit: { tone: "good", text: "Yes" },
    application: { tone: "weak", text: "No" },
    others: { tone: "weak", text: "Rarely" },
  },
  {
    icon: TriangleAlert,
    label: "Quota errors explained in place",
    storagekit: { tone: "good", text: "Yes" },
    application: { tone: "weak", text: "No" },
    others: { tone: "weak", text: "Rarely" },
  },
  {
    icon: Database,
    label: "IndexedDB and Cache Storage",
    storagekit: { tone: "weak", text: "Not yet" },
    application: { tone: "good", text: "Yes" },
    others: { tone: "neutral", text: "Some" },
  },
];

const toneClass: Record<Tone, string> = {
  good: "bg-teal-500/10 text-teal-700 dark:text-teal-300",
  neutral: "bg-muted text-foreground/75",
  weak: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

function Pill({ cell }: { cell: Cell }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        toneClass[cell.tone],
      )}
    >
      {cell.text}
    </span>
  );
}

export default function Comparison() {
  return (
    <section id="compare" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Why StorageKit"
          heading="How it compares to the alternatives"
          description="The Application panel can read your storage, and for a quick look it's fine. Here is where the three options actually differ."
        />

        {/* Stacked cards on narrow screens. A min-width table there forces the
            whole page to scroll sideways, and squeezing the columns instead
            wraps every label onto five lines. */}
        <ul className="mt-12 space-y-3 md:hidden">
          {rows.map((row) => {
            const Icon = row.icon;
            return (
              <li
                key={row.label}
                className="border-border bg-muted/30 rounded-xl border p-4"
              >
                <div className="flex items-start gap-2.5">
                  <Icon
                    size={15}
                    aria-hidden
                    className="text-accent-text mt-0.5 shrink-0"
                  />
                  <h3 className="text-sm font-medium">{row.label}</h3>
                </div>
                <dl className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-foreground font-medium">StorageKit</dt>
                    <dd>
                      <Pill cell={row.storagekit} />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">Application panel</dt>
                    <dd>
                      <Pill cell={row.application} />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">Other extensions</dt>
                    <dd>
                      <Pill cell={row.others} />
                    </dd>
                  </div>
                </dl>
              </li>
            );
          })}
        </ul>

        <div className="border-border bg-background mt-12 hidden overflow-hidden rounded-2xl border md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              StorageKit compared with the Chrome Application panel and other
              storage extensions
            </caption>
            <thead>
              <tr className="border-border/70 border-b">
                <th
                  scope="col"
                  className="text-foreground/75 px-6 py-4 text-[11px] font-medium tracking-[0.12em] uppercase"
                >
                  What you get
                </th>
                <th
                  scope="col"
                  className="bg-accent/[0.06] text-accent-text px-6 py-4 text-center text-[11px] font-semibold tracking-[0.12em] uppercase"
                >
                  StorageKit
                </th>
                <th
                  scope="col"
                  className="text-foreground/75 px-6 py-4 text-center text-[11px] font-medium tracking-[0.12em] uppercase"
                >
                  Application panel
                </th>
                <th
                  scope="col"
                  className="text-foreground/75 px-6 py-4 text-center text-[11px] font-medium tracking-[0.12em] uppercase"
                >
                  Other extensions
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const Icon = row.icon;
                return (
                  <tr
                    key={row.label}
                    className="border-border/50 border-t first:border-t-0"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 align-middle text-sm font-normal"
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          size={16}
                          aria-hidden
                          className="text-accent-text shrink-0"
                        />
                        {row.label}
                      </span>
                    </th>
                    <td className="bg-accent/[0.06] px-6 py-4 text-center">
                      <Pill cell={row.storagekit} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Pill cell={row.application} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Pill cell={row.others} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-center text-xs">
          Extensions vary widely, so that column describes what is common rather
          than any one product.
        </p>
      </div>
    </section>
  );
}
