import { cn } from "@/utils/cn";
import { Fragment } from "react";

const KV: [string, string][] = [
  ["theme", '"dark"'],
  ["cart_id", '"9f2c-41aa"'],
  ["onboarding_step", "3"],
  ["session", '"eyJhbGciOi…"'],
  ["locale", '"en-US"'],
  ["sidebar_open", "false"],
  ["_ga", '"GA1.2.884312"'],
  ["consent", "true"],
  ["last_seen", "1728651203"],
  ["csrf_token", '"c1a9e7f2"'],
  ["user_id", "48213"],
  ["currency", '"EUR"'],
  ["ab_bucket", '"B"'],
  ["tz", '"Europe/Berlin"'],
  ["dismissed_banner", "true"],
  ["zoom", "1.25"],
  ["flags", '{"beta":true}'],
  ["recent_search", '"jwt decode"'],
  ["draft_id", '"d_71x"'],
  ["refresh_token", '"eyJ0eXAi…"'],
];

// "row:column" -> animation offset in seconds. Placed to stay clear of the hero copy.
const LIT = new Map<string, number>([
  ["3:2", 0],
  ["7:10", 0.6],
  ["12:4", 1.3],
  ["4:11", 2],
  ["9:3", 2.7],
  ["15:10", 3.4],
  ["6:3", 4],
  ["10:10", 4.6],
  ["14:2", 5.2],
  ["12:11", 6.1],
]);

const valueTone = (v: string) =>
  v.startsWith('"')
    ? "text-syntax-string/25"
    : v === "true" || v === "false"
      ? "text-syntax-boolean/25"
      : /^[\d.]+$/.test(v)
        ? "text-syntax-number/25"
        : "text-foreground/20";

export default function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 hidden [mask-image:linear-gradient(to_bottom,transparent_56px,black_140px,black_560px,transparent_860px)] md:block"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_right,black_8%,transparent_32%,transparent_68%,black_92%)]">
        <div className="key-field absolute top-16 left-1/2 w-[2240px] -translate-x-1/2 font-mono text-[11px] leading-7 whitespace-nowrap select-none">
          {Array.from({ length: 22 }, (_, r) => (
            <div key={r} style={{ paddingLeft: (r % 4) * 46 }}>
              {Array.from({ length: 12 }, (_, c) => {
                const [k, v] = KV[(r * 7 + c) % KV.length];
                const lit = LIT.get(`${r}:${c}`);
                if (lit === undefined) {
                  return (
                    <Fragment key={c}>
                      <span data-t={`${k}: `} className="text-syntax-key/25" />
                      <span data-t={v} className={cn("mr-7", valueTone(v))} />
                    </Fragment>
                  );
                }
                return (
                  <span
                    key={c}
                    className="key-write mr-7"
                    style={{ animationDelay: `-${lit}s` }}
                  >
                    <span data-t={`${k}: `} className="text-accent-text" />
                    <span data-t={v} className="text-foreground/70" />
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
