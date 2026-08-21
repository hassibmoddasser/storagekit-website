import { Camera, ShieldCheck } from "lucide-react";

import decodingImg from "@/assets/screenshots/feature-decoding.jpg";
import inspectorImg from "@/assets/screenshots/feature-inspector.jpg";
import searchImg from "@/assets/screenshots/feature-search.jpg";

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
          description="Snapshots, JWT decoding, and a real JSON editor — in one panel beside your page."
        />

        {/* Five cards only. The smaller differences live in the comparison
            table below, where they read as a list instead of as clutter.
            Each well's aspect matches its screenshot, so no capture is cut
            through the middle of a row. */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          <FeatureCard
            badge="inspector"
            title="Live storage &amp; cookie editor"
            description="Browse localStorage, sessionStorage, and cookies in one list. Create, edit, and expand nested JSON inline."
            imageSrc={inspectorImg}
            imageAlt="StorageKit panel showing the storage tree beside a formatted JSON value"
            className="md:col-span-2 lg:col-span-4"
            aspect="aspect-2/1"
            sizes="(min-width: 1024px) 710px, (min-width: 768px) 100vw, 100vw"
          />

          <FeatureCard
            badge="decoding"
            title="Automatic value decoding"
            description="JWTs, JSON trees, numbers, booleans — detected and rendered properly, with the signing algorithm shown."
            imageSrc={decodingImg}
            imageAlt="A decoded JWT inside a JSON tree, badged JWT and HS256"
            className="lg:col-span-2"
            aspect="aspect-[58/61]"
          />

          <FeatureCard
            badge="search"
            title="Search keys and values"
            description="Find that one flag instantly — StorageKit matches inside values, not just key names."
            imageSrc={searchImg}
            imageAlt="Search field filtering the storage list down to matching keys"
            className="lg:col-span-2"
            aspect="aspect-[543/485]"
            imagePosition="object-top"
          />

          {/* The two text cards stack inside one cell so they sit at half the
              height of the screenshot card beside them, instead of each
              stretching to it. */}
          <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:col-span-4 lg:grid-cols-1 lg:grid-rows-2">
            <FeatureNote
              icon={Camera}
              badge="snapshots"
              title="Save &amp; restore states"
              description="One click captures every value. Restore it after a logout, or export it as JSON to hand to a teammate."
            />
            <FeatureNote
              icon={ShieldCheck}
              badge="privacy"
              title="100% local. Forever."
              description="No network calls, no analytics, no account. Nothing it reads ever leaves your machine."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
