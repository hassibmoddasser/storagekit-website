import { ShieldCheck } from "lucide-react";

import compareDark from "@/assets/screenshots/feature-compare-dark.jpg";
import compareLight from "@/assets/screenshots/feature-compare-light.jpg";
import decodingDark from "@/assets/screenshots/feature-decoding-dark.jpg";
import decodingLight from "@/assets/screenshots/feature-decoding-light.jpg";
import inspectorDark from "@/assets/screenshots/feature-inspector-dark.jpg";
import inspectorLight from "@/assets/screenshots/feature-inspector-light.jpg";
import searchDark from "@/assets/screenshots/feature-search-dark.jpg";
import searchLight from "@/assets/screenshots/feature-search-light.jpg";

import FeatureCard from "./primitives/feature-card";
import FeatureNote from "./primitives/feature-note";
import SectionHeading from "./primitives/section-heading";

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

          <FeatureNote
            icon={ShieldCheck}
            badge="privacy"
            title="100% local. Forever."
            description="No network calls, no analytics, no account. Nothing it reads ever leaves your machine."
            className="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
