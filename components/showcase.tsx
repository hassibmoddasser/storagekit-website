import { Camera, FileJson2, Gauge, ShieldCheck } from "lucide-react";

import decodingImg from "@/assets/screenshots/feature-decoding.jpg";
import inspectorImg from "@/assets/screenshots/feature-inspector.jpg";
import searchImg from "@/assets/screenshots/feature-search.jpg";

import FeatureCard from "./primitives/feature-card";
import FeatureNote from "./primitives/feature-note";
import SectionTag from "./primitives/section-tag";

export default function Showcase() {
  return (
    <section id="features" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTag
          kind="features"
          label="what-you-get"
          heading="Everything you need to debug storage"
          description="Snapshots, JWT decoding, and a real JSON editor — in one panel beside your page."
        />

        <div className="mt-14 grid auto-rows-[16rem] gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-[16rem_16rem_16rem_16rem]">
          <FeatureCard
            badge="inspector"
            title="Live localStorage &amp; cookie editor"
            description="Browse localStorage, sessionStorage, and cookies in one organized panel. Create, edit, and explore nested JSON inline."
            imageSrc={inspectorImg}
            imageAlt="StorageKit panel showing the storage tree beside a formatted JSON value"
            className="lg:col-span-4 lg:row-span-2"
            sizes="(min-width: 1024px) 760px, (min-width: 640px) 50vw, 100vw"
          />

          <FeatureCard
            badge="decoding"
            title="Automatic value decoding"
            description="JWTs, JSON trees, numbers, booleans — detected and rendered properly, with the algorithm shown."
            imageSrc={decodingImg}
            imageAlt="A decoded JWT inside a JSON tree, badged JWT and HS256"
            className="lg:col-span-2 lg:row-span-2"
            sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
          />

          <FeatureCard
            badge="search"
            title="Search keys and values"
            description="Find that one flag instantly — StorageKit matches values too, not just key names."
            imageSrc={searchImg}
            imageAlt="Search field filtering the storage list down to matching keys"
            className="lg:col-span-2 lg:row-span-2"
            sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
          />

          <FeatureNote
            icon={Camera}
            badge="snapshots"
            title="Save &amp; restore states"
            description="One click captures every value. Restore later, or export it to share with a teammate."
            className="lg:col-span-2"
          />

          <FeatureNote
            icon={Gauge}
            badge="overview"
            title="Storage at a glance"
            description="Item counts and bytes used per storage type — see usage before you start digging."
            className="lg:col-span-2"
          />

          <FeatureNote
            icon={ShieldCheck}
            badge="privacy"
            title="100% local. Forever."
            description="Zero network calls, zero analytics. Your data never leaves your machine."
            className="lg:col-span-2"
          />

          <FeatureNote
            icon={FileJson2}
            badge="portability"
            title="Export &amp; import as JSON"
            description="Back up a snapshot, send it to a teammate, or restore it on another machine — it's just a JSON file."
            className="lg:col-span-2"
          />
        </div>

        {/* Subtle footer line of additional features */}
        <div className="text-syntax-comment mt-10 grid grid-cols-2 gap-x-6 gap-y-2 text-center font-mono text-xs sm:flex sm:flex-wrap sm:justify-center">
          {[
            "inline editing",
            "dark & light themes",
            "domain filtering",
            "duplicate key detection",
            "cookie attribute viewer",
            "quota error handling",
            "compact + dashboard layouts",
          ].map((line) => (
            <span key={line} className="flex items-center justify-center gap-2">
              <span
                aria-hidden
                className="bg-accent/40 inline-block h-1 w-1 rounded-full"
              />
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
