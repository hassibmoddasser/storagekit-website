import SectionLabel from "./section-label";

const faqs = [
  {
    question: "Is StorageKit free?",
    answer:
      "Yes, StorageKit is completely free to use for everyone. There are no premium tiers, no feature limits, and no hidden costs.",
  },
  {
    question: "Does it work on other browsers?",
    answer:
      "StorageKit is currently available for Chrome and all Chromium-based browsers like Edge, Brave, Arc, Opera, etc.",
  },
  {
    question: "Is my data sent anywhere?",
    answer:
      "No. All data stays in your browser. No analytics, tracking, or network requests—your data never leaves your machine.",
  },
  {
    question: "How are snapshots stored?",
    answer:
      "Chrome's extension storage API persists them across sessions. You can also export them as JSON files for backup.",
  },
  {
    question: "Can I use it on any website?",
    answer:
      "StorageKit works on any regular website. It cannot access restricted pages of browser due to browser security policies.",
  },
  {
    question: "Does it support Firefox or Safari?",
    answer:
      "Not yet. StorageKit is currently Chrome-only, but support for other browsers may be added in the future.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="FAQ" heading="Frequently asked questions" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="text-base font-semibold tracking-tight">
                {faq.question}
              </h3>
              <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
