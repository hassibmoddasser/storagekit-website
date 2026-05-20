import { cn } from "@/utils/cn";
import {
  Camera,
  ChevronRight,
  Cookie,
  Database,
  HardDrive,
  Plus,
  Search,
  Settings,
} from "lucide-react";

interface StorageRow {
  key: string;
  value: string;
  type?: "string" | "number" | "boolean" | "json" | "jwt";
  active?: boolean;
}

const defaultRows: StorageRow[] = [
  { key: "auth_token", value: "eyJhbGciOiJIUzI1NiIs…", type: "jwt", active: true },
  { key: "user", value: '{ "id": 42, "name": "Ada" }', type: "json" },
  { key: "theme", value: '"dark"', type: "string" },
  { key: "cart_count", value: "3", type: "number" },
  { key: "onboarded", value: "true", type: "boolean" },
  { key: "locale", value: '"en-US"', type: "string" },
];

const typeBadge: Record<NonNullable<StorageRow["type"]>, string> = {
  string: "text-syntax-string",
  number: "text-syntax-number",
  boolean: "text-syntax-boolean",
  json: "text-syntax-key",
  jwt: "text-accent",
};

const typeLabel: Record<NonNullable<StorageRow["type"]>, string> = {
  string: "str",
  number: "num",
  boolean: "bool",
  json: "json",
  jwt: "jwt",
};

interface StoragePanelMockProps {
  className?: string;
  rows?: StorageRow[];
  activeTab?: "local" | "session" | "cookies" | "snapshots";
  showValuePane?: boolean;
  compact?: boolean;
}

export default function StoragePanelMock({
  className,
  rows = defaultRows,
  activeTab = "local",
  showValuePane = true,
  compact = false,
}: StoragePanelMockProps) {
  const tabs = [
    { id: "local" as const, label: "Local", icon: HardDrive, count: 12 },
    { id: "session" as const, label: "Session", icon: Database, count: 3 },
    { id: "cookies" as const, label: "Cookies", icon: Cookie, count: 8 },
    { id: "snapshots" as const, label: "Snapshots", icon: Camera, count: 5 },
  ];

  const activeRow = rows.find((r) => r.active) ?? rows[0];

  return (
    <div
      className={cn(
        "border-border bg-surface-elevated relative overflow-hidden rounded-lg border",
        className,
      )}
    >
      {/* Top toolbar */}
      <div className="border-border/70 flex items-center justify-between gap-2 border-b px-3 py-2">
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-muted-foreground font-mono">storagekit</span>
          <ChevronRight size={12} className="text-syntax-comment" />
          <span className="text-foreground font-medium">example.com</span>
        </div>
        <div className="text-muted-foreground hidden items-center gap-2 sm:flex">
          <button
            aria-label="Search"
            className="hover:text-foreground transition-colors"
          >
            <Search size={13} />
          </button>
          <button
            aria-label="Add"
            className="hover:text-foreground transition-colors"
          >
            <Plus size={13} />
          </button>
          <button
            aria-label="Settings"
            className="hover:text-foreground transition-colors"
          >
            <Settings size={13} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid",
          showValuePane && !compact
            ? "grid-cols-[140px_1fr_minmax(0,1.1fr)]"
            : showValuePane
              ? "grid-cols-[120px_1fr]"
              : "grid-cols-[140px_1fr]",
        )}
      >
        {/* Sidebar */}
        <div className="border-border/70 bg-muted/40 border-r p-1.5">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = t.id === activeTab;
            return (
              <div
                key={t.id}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-xs",
                  isActive
                    ? "bg-background text-foreground font-medium"
                    : "text-muted-foreground",
                )}
              >
                <span className="flex items-center gap-1.5">
                  <Icon size={11} />
                  {t.label}
                </span>
                <span className="font-mono text-[10px] tabular-nums opacity-70">
                  {t.count}
                </span>
              </div>
            );
          })}
        </div>

        {/* Key list */}
        <ul className="divide-border/60 divide-y">
          {rows.map((r) => (
            <li
              key={r.key}
              className={cn(
                "flex items-center justify-between gap-2 px-3 py-1.5 text-xs",
                r.active && "bg-accent/5",
              )}
            >
              <div className="flex min-w-0 items-center gap-1.5">
                {r.type && (
                  <span
                    className={cn(
                      "font-mono shrink-0 rounded px-1 text-[9px] uppercase",
                      typeBadge[r.type],
                      "bg-current/10",
                    )}
                    style={{
                      background: `color-mix(in oklab, currentColor 10%, transparent)`,
                    }}
                  >
                    {typeLabel[r.type]}
                  </span>
                )}
                <span
                  className={cn(
                    "font-mono truncate",
                    r.active ? "text-foreground" : "text-foreground/80",
                  )}
                >
                  {r.key}
                </span>
              </div>
              <span className="text-muted-foreground font-mono ml-2 max-w-[8rem] shrink-0 truncate text-[10.5px]">
                {r.value}
              </span>
            </li>
          ))}
        </ul>

        {/* Value pane (JSON tree mock) */}
        {showValuePane && !compact && (
          <div className="bg-muted/30 border-border/70 border-l p-3">
            <div className="text-muted-foreground flex items-center gap-1 text-[10px] font-mono">
              <span>local</span>
              <ChevronRight size={10} />
              <span className="text-foreground">{activeRow.key}</span>
              {activeRow.type === "jwt" && (
                <span className="text-accent bg-accent/10 ml-auto rounded px-1 text-[9px] uppercase">
                  jwt
                </span>
              )}
            </div>
            <div className="mt-2 space-y-0.5 font-mono text-[11px]">
              <div className="flex gap-1">
                <span className="text-syntax-punct">{"{"}</span>
              </div>
              <div className="pl-3">
                <span className="text-syntax-key">&quot;header&quot;</span>
                <span className="text-syntax-punct">: </span>
                <span className="text-syntax-punct">{"{"}</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-key">&quot;alg&quot;</span>
                <span className="text-syntax-punct">: </span>
                <span className="text-syntax-string">&quot;HS256&quot;</span>
                <span className="text-syntax-punct">,</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-key">&quot;typ&quot;</span>
                <span className="text-syntax-punct">: </span>
                <span className="text-syntax-string">&quot;JWT&quot;</span>
              </div>
              <div className="pl-3">
                <span className="text-syntax-punct">{"},"}</span>
              </div>
              <div className="pl-3">
                <span className="text-syntax-key">&quot;payload&quot;</span>
                <span className="text-syntax-punct">: </span>
                <span className="text-syntax-punct">{"{"}</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-key">&quot;sub&quot;</span>
                <span className="text-syntax-punct">: </span>
                <span className="text-syntax-string">&quot;1234567890&quot;</span>
                <span className="text-syntax-punct">,</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-key">&quot;name&quot;</span>
                <span className="text-syntax-punct">: </span>
                <span className="text-syntax-string">&quot;Ada Lovelace&quot;</span>
                <span className="text-syntax-punct">,</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-key">&quot;iat&quot;</span>
                <span className="text-syntax-punct">: </span>
                <span className="text-syntax-number">1735689600</span>
              </div>
              <div className="pl-3">
                <span className="text-syntax-punct">{"}"}</span>
              </div>
              <div>
                <span className="text-syntax-punct">{"}"}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="border-border/70 text-syntax-comment flex items-center justify-between border-t px-3 py-1.5 font-mono text-[10px]">
        <span>
          {rows.length} items · 2.4 KB
        </span>
        <span className="hidden items-center gap-1 sm:flex">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          connected
        </span>
      </div>
    </div>
  );
}
