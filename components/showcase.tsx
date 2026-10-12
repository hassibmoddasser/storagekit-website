import { Ban, Filter } from "lucide-react";

import compareDark from "@/assets/screenshots/feature-compare-dark.jpg";
import compareLight from "@/assets/screenshots/feature-compare-light.jpg";
import decodingDark from "@/assets/screenshots/feature-decoding-dark.jpg";
import decodingLight from "@/assets/screenshots/feature-decoding-light.jpg";
import inspectorDark from "@/assets/screenshots/feature-inspector-dark.jpg";
import inspectorLight from "@/assets/screenshots/feature-inspector-light.jpg";
import searchDark from "@/assets/screenshots/feature-search-dark.jpg";
import searchLight from "@/assets/screenshots/feature-search-light.jpg";

import FeatureCard from "./primitives/feature-card";
import SectionHeading from "./primitives/section-heading";

function NetworkPanel() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex flex-col text-[11px] leading-none"
    >
      <div className="border-border/70 text-muted-foreground flex h-8 shrink-0 items-center gap-4 border-b px-3">
        <span>Elements</span>
        <span>Console</span>
        <span className="text-foreground flex h-full items-center shadow-[inset_0_-2px_0_var(--accent)]">
          Network
        </span>
        <span>Application</span>
      </div>
      <div className="border-border/70 flex h-8 shrink-0 items-center gap-2.5 border-b px-3">
        <span className="size-2.5 shrink-0 rounded-full bg-rose-500" />
        <Ban size={12} className="text-muted-foreground shrink-0" />
        <span className="bg-muted text-foreground flex h-5 min-w-0 flex-1 items-center gap-1.5 rounded px-2 font-mono text-[10.5px]">
          <Filter size={10} className="text-muted-foreground shrink-0" />
          storagekit
        </span>
      </div>
      <div className="border-border/70 text-muted-foreground grid h-7 shrink-0 grid-cols-[1fr_3rem_2.5rem_2.5rem] items-center gap-2 border-b px-3">
        <span>Name</span>
        <span>Status</span>
        <span>Type</span>
        <span className="text-right">Size</span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="text-foreground text-xs font-medium">
          Recording network activity…
        </span>
        <span className="text-muted-foreground">
          No requests from StorageKit
        </span>
      </div>
      <div className="border-border/70 text-muted-foreground flex h-7 shrink-0 items-center gap-2 border-t px-3 font-mono text-[10.5px]">
        <span>0 requests</span>
        <span className="text-border">|</span>
        <span>0 B transferred</span>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="features" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="What you get"
          heading="Five things the Application panel won't do"
          description="Snapshots, JWT decoding, and a real JSON editor, in one panel beside your page."
        />

        {/* Two rows of equal height: the 2:1 inspector beside the compare
            capture, then three cards whose captures share one aspect. */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          <FeatureCard
            badge="inspector"
            title="Live storage &amp; cookie editor"
            description="localStorage, sessionStorage, and cookies in one list, each value typed at a glance. Flip flags in place, edit nested JSON as a tree, and step through keys with J and K."
            imageSrc={{ light: inspectorLight, dark: inspectorDark }}
            imageAlt="The storage list with type icons and an inline toggle, beside a JSON value opened as an editable tree"
            className="md:col-span-2 lg:col-span-4"
            aspect="aspect-2/1"
            sizes="(min-width: 1024px) 710px, (min-width: 768px) 100vw, 100vw"
          />

          <FeatureCard
            badge="snapshots"
            title="Snapshot, compare, restore"
            description="Capture every value in one click. Compare a snapshot with the live page to see exactly which keys changed, then restore it or export it as JSON."
            imageSrc={{ light: compareLight, dark: compareDark }}
            imageAlt="A snapshot compared with the live page, listing the keys Restore would change or remove"
            className="lg:col-span-2"
            aspect="aspect-[76/80]"
          />

          <FeatureCard
            badge="decoding"
            title="Automatic value decoding"
            description="JWTs, JSON, timestamps, Base64, and URL-encoded values, detected and decoded. Tokens show their claims and a live countdown to expiry."
            imageSrc={{ light: decodingLight, dark: decodingDark }}
            imageAlt="A decoded JWT with a valid status, time until expiry, and its payload claims"
            className="lg:col-span-2"
            aspect="aspect-[76/80]"
          />

          <FeatureCard
            badge="search"
            title="Search keys and values"
            description="Find that one flag instantly. Press / and type: StorageKit matches inside values, not just key names."
            imageSrc={{ light: searchLight, dark: searchDark }}
            imageAlt="Searching for dark finds a JSON value and a cookie whose values contain it"
            className="lg:col-span-2"
            aspect="aspect-[76/80]"
          />

          <FeatureCard
            badge="privacy"
            title="100% local. Forever."
            description="No network calls, no analytics, no account. Nothing it reads ever leaves your machine."
            visual={<NetworkPanel />}
            className="lg:col-span-2"
            aspect="aspect-[76/80]"
          />
        </div>
      </div>
    </section>
  );
}
