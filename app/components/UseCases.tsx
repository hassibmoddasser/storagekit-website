import { Users, Bug, Share2, KeyRound } from "lucide-react";
import SectionLabel from "./SectionLabel";

const useCases = [
  {
    icon: Users,
    title: "Switch between user roles",
    description:
      "Save a snapshot for each user role (admin, editor, viewer). Switch between them instantly without logging out and back in.",
  },
  {
    icon: Bug,
    title: "Reproduce bugs reliably",
    description:
      "Capture the exact storage state when a bug occurs. Share the snapshot with your team so anyone can reproduce it in one click.",
  },
  {
    icon: Share2,
    title: "Share configurations",
    description:
      "Export storage snapshots as JSON files. Onboard new team members by sharing the exact storage setup they need.",
  },
  {
    icon: KeyRound,
    title: "Debug tokens without leaving the browser",
    description:
      "Inspect JWT payloads, check expiry dates, and view decoded Base64 values without switching to external tools.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="border-t border-border/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          label="Use Cases"
          heading="Built for real debugging workflows"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="flex gap-4 rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:border-accent/30 hover:bg-muted/60"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <useCase.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
