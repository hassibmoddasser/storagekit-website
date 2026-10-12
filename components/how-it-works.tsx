import SectionHeading from "./primitives/section-heading";

const steps = [
  {
    n: "01",
    title: "Install and pin it",
    description:
      "One click on the Chrome Web Store. Chrome hides new extensions behind the puzzle-piece icon, so pin StorageKit once and it's always there.",
  },
  {
    n: "02",
    title: "Dock it beside your page",
    description:
      "Click the icon for a quick look, or open it in the side panel to keep it there. It follows you across tab switches and reloads.",
  },
  {
    n: "03",
    title: "Snapshot your state",
    description:
      "Capture your entire storage state with one click. Compare it with the live page any time, restore it after a logout, or export it as JSON for a teammate.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Getting started"
          heading="Three steps. No friction."
          description="From install to first snapshot in under a minute."
        />

        {/* Top rules instead of cards: the page is already full of boxes, and
            the numeral is doing the work a border would otherwise do. */}
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.n} className="border-border/70 border-t pt-6">
              <span
                aria-hidden
                className="font-heading text-accent-text-lg block text-5xl leading-none font-bold tracking-tighter tabular-nums md:text-6xl"
              >
                {step.n}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
