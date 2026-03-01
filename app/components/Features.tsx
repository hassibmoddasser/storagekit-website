import {
  Eye,
  Camera,
  Globe,
  FileCode,
  ArrowDownUp,
  ShieldCheck,
} from "lucide-react";
import SectionLabel from "./SectionLabel";

const features = [
  {
    icon: Eye,
    title: "Live Inspector",
    description:
      "View and edit Local storage, Session storage, and Cookies in real time. Changes reflect instantly on the page.",
  },
  {
    icon: Camera,
    title: "Snapshots",
    description:
      "Save the current storage state with one click. Restore it later to instantly reproduce any application state.",
  },
  {
    icon: Globe,
    title: "Cross-Domain Snapshots",
    description:
      "View snapshots from all domains in one place, or filter by the current site for focused debugging.",
  },
  {
    icon: FileCode,
    title: "Value Decoding",
    description:
      "Automatically detects and decodes JSON, Base64, JWT, and URL-encoded values. JWT metadata shows expiry and algorithm.",
  },
  {
    icon: ArrowDownUp,
    title: "Import & Export",
    description:
      "Backup your snapshots as JSON files. Share storage configurations with your team for consistent debugging.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "All data stays in your browser. No analytics, no tracking, no external servers. Your storage data never leaves your machine.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          label="Features"
          heading="Everything you need to debug storage"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          A complete toolkit for inspecting, managing, and debugging browser
          storage, built right into your DevTools.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:border-accent/30 hover:bg-muted/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <feature.icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
