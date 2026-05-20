import { ChevronRight } from "lucide-react";
import SectionTag from "./primitives/section-tag";

const faqs = [
  {
    question: "Is StorageKit free?",
    answer:
      "Yes — completely free. No premium tiers, no feature limits, no hidden costs.",
  },
  {
    question: "Does it work on other browsers?",
    answer:
      "It works on Chrome and all Chromium-based browsers — Edge, Brave, Arc, Opera, and the rest. Firefox and Safari aren't supported yet.",
  },
  {
    question: "Is my data sent anywhere?",
    answer:
      "No. Everything stays in your browser. Zero analytics, zero tracking, zero network calls. Your data never leaves your machine.",
  },
  {
    question: "How are snapshots stored?",
    answer:
      "Chrome's extension storage API persists them across sessions. You can also export them as JSON files for backup or sharing.",
  },
  {
    question: "Can I use it on any website?",
    answer:
      "Yes — on any regular website. It can't access restricted browser pages (like the Chrome Web Store itself) due to browser security policies.",
  },
  {
    question: "Is StorageKit open source?",
    answer:
      "Yes. The full source lives on GitHub under MIT — read it, audit it, fork it, contribute back. Link in the footer.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <SectionTag
          kind="faq"
          label="answers"
          heading="Frequently asked questions"
          description="Can't find what you're looking for? Open an issue on GitHub."
        />

        <div className="border-border bg-muted/30 mt-12 divide-y divide-border overflow-hidden rounded-2xl border">
          {faqs.map((faq, i) => (
            <details key={i} className="acc group">
              <summary className="hover:bg-muted/60 flex items-start justify-between gap-4 px-5 py-4 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-syntax-comment font-mono mt-0.5 w-6 shrink-0 text-xs tabular-nums">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-foreground text-base font-medium tracking-tight">
                    {faq.question}
                  </h3>
                </div>
                <ChevronRight
                  size={16}
                  className="acc-chevron text-muted-foreground mt-1 shrink-0"
                />
              </summary>
              <div className="acc-body">
                <div>
                  <p className="text-muted-foreground px-5 pb-5 pl-14 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
