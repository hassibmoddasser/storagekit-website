import { ChevronRight } from "lucide-react";
import SectionHeading from "./primitives/section-heading";

const faqs = [
  {
    question: "How is this different from Chrome's Application panel?",
    answer:
      "The Application panel can read and edit your storage, and for a quick look it's fine. StorageKit adds the parts it doesn't have: snapshots you can restore after a logout, automatic JWT decoding, a real nested-JSON editor, search that matches values and not just key names, and all three storage types in one list. It also stays docked beside your page instead of taking over half your window. Application still wins on IndexedDB and Cache Storage, which StorageKit doesn't cover yet.",
  },
  {
    question: "Why does it need access to all websites?",
    answer:
      "Reading localStorage and sessionStorage requires a content script running in the page's own context, and that page could be any site you're debugging, so the manifest declares <all_urls>. Chrome shows this as “Read and change all your data on all websites” at install. StorageKit reads storage and cookies, and nothing else: there are no network calls anywhere in the code, so nothing it reads can leave your machine.",
  },
  {
    question: "Where do I find it after installing?",
    answer:
      "Click the puzzle-piece icon in the Chrome toolbar and pin StorageKit, since Chrome hides new extensions there by default. Then click the icon for a quick look, or choose “Open in side panel” to dock it next to your page. One caveat: any tab you had open before installing needs a refresh before the extension can read it.",
  },
  {
    question: "Is StorageKit free?",
    answer:
      "Yes, completely free. No premium tiers, no feature limits, no hidden costs.",
  },
  {
    question: "Does it work on other browsers?",
    answer:
      "It works on Chrome and all Chromium-based browsers: Edge, Brave, Arc, Opera, and the rest. Firefox and Safari aren't supported yet.",
  },
  {
    question: "Is my data sent anywhere?",
    answer:
      "No. Everything stays in your browser. Zero analytics, zero tracking, zero network calls. Your data never leaves your machine.",
  },
  {
    question: "How are snapshots stored?",
    answer:
      "In the extension's own local storage, so they persist across sessions on this machine. They don't sync across devices, and clearing browser data clears them, so export anything you can't afford to lose as a JSON file.",
  },
  {
    question: "Can I use it on any website?",
    answer:
      "Yes, on any regular website. It can't access restricted browser pages (like the Chrome Web Store itself) due to browser security policies.",
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
        <SectionHeading
          label="Answers"
          heading="Frequently asked questions"
          description="Everything worth knowing before you install."
        />

        <div className="border-border bg-muted/30 divide-border mt-12 divide-y overflow-hidden rounded-2xl border">
          {faqs.map((faq, i) => (
            <details key={i} className="acc group">
              <summary className="hover:bg-muted/60 flex items-start justify-between gap-4 px-5 py-5 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-syntax-comment mt-0.5 w-6 shrink-0 font-mono text-xs tabular-nums">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground text-base font-medium tracking-tight">
                    {faq.question}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  aria-hidden
                  className="acc-chevron text-muted-foreground mt-1 shrink-0"
                />
              </summary>
              <div className="acc-body">
                <div>
                  <p className="text-muted-foreground px-5 pt-1 pb-6 pl-14 text-[0.9375rem] leading-7">
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
