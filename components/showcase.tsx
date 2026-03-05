import { cn } from "@/utils/cn";
import type { LucideIcon } from "lucide-react";
import { Camera, Eye, FileCode, FileDown, HardDrive } from "lucide-react";
import SectionLabel from "./section-label";

interface ShowcaseItem {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

function LargeCard({
  item,
  className,
}: {
  item: ShowcaseItem;
  className?: string;
}) {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        "group card-shine border-border card-shine bg-muted/30 hover:bg-muted/60 flex flex-col overflow-hidden rounded-lg border transition-colors",
        className,
      )}
    >
      <div className="p-8">
        <div className="bg-accent/10 text-accent flex h-10 w-10 items-center justify-center rounded-lg">
          <Icon size={20} />
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function SmallCard({
  item,
  className,
}: {
  item: ShowcaseItem;
  className?: string;
}) {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        "group card-shine border-border card-shine bg-muted/30 hover:bg-muted/60 flex flex-col overflow-hidden rounded-lg border transition-colors",
        className,
      )}
    >
      <div className="p-8">
        <div className="bg-accent/10 text-accent flex h-10 w-10 items-center justify-center rounded-lg">
          <Icon size={20} />
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          label="Features"
          heading="Everything you need to debug storage"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <LargeCard
            item={{
              id: "inspector",
              label: "Inspector",
              icon: Eye,
              title: "Live Storage Inspector",
              description:
                "Browse all your storage data in a clean, organized interface. Edit values inline, search across keys, and see changes reflected instantly in the DevTools panel as you work.",
            }}
            className="rounded-tl-3xl"
          />

          <LargeCard
            item={{
              id: "snapshots",
              label: "Snapshots",
              icon: Camera,
              title: "Save & Restore States",
              description:
                "Capture your entire storage state including Local storage, Session storage, and Cookies in a single snapshot. Restore it anytime with one click to recreate that exact state.",
            }}
            className="rounded-tr-3xl"
          />
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SmallCard
            item={{
              id: "decoding",
              label: "Decoding",
              icon: FileCode,
              title: "Automatic Value Decoding",
              description:
                "StorageKit detects encoded values and shows them decoded. JSON pretty-printed, JWTs reveal payloads, Base64 decoded.",
            }}
            className="rounded-bl-3xl"
          />
          <SmallCard
            item={{
              id: "storage",
              label: "Storage",
              icon: HardDrive,
              title: "Storage Overview",
              description:
                "See item counts and size for Local, Session storage, and Cookies at a glance. Clear by type or wipe all in one action.",
            }}
          />
          <SmallCard
            item={{
              id: "export-import",
              label: "Export & Import",
              icon: FileDown,
              title: "Backup and Restore Snapshots",
              description:
                "Export snapshots to json for backup or sharing. Import to restore on another machine or after reinstalling.",
            }}
            className="rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
}
