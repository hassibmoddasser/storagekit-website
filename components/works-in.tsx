import BrowserLogo, { type BrowserId } from "./primitives/browser-logo";

const supported: BrowserId[] = [
  "chrome",
  "edge",
  "brave",
  "arc",
  "opera",
  "vivaldi",
];

const comingSoon: BrowserId[] = ["firefox", "safari"];

export default function WorksIn() {
  return (
    <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
      <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5">
        Works in
        <span className="flex items-center gap-2">
          {supported.map((id) => (
            <BrowserLogo key={id} id={id} labelled />
          ))}
        </span>
        and other Chromium browsers
      </p>
      <span aria-hidden className="bg-border hidden h-3 w-px sm:block" />
      <p className="flex items-center gap-2.5">
        Coming soon
        <span className="flex items-center gap-2 opacity-60">
          {comingSoon.map((id) => (
            <BrowserLogo key={id} id={id} labelled />
          ))}
        </span>
      </p>
    </div>
  );
}
