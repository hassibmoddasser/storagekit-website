"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { cn } from "@/utils/cn";

const faqs = [
  {
    question: "Is StorageKit free?",
    answer:
      "Yes, StorageKit is completely free to use. There are no premium tiers, no feature limits, and no hidden costs.",
  },
  {
    question: "Does it work on other browsers?",
    answer:
      "StorageKit is currently available for Chrome and all Chromium-based browsers (Edge, Brave, Arc, Opera, etc.).",
  },
  {
    question: "Is my data sent anywhere?",
    answer:
      "No. All data stays entirely in your browser. StorageKit has no analytics, no tracking, and makes no network requests. Your storage data never leaves your machine.",
  },
  {
    question: "How are snapshots stored?",
    answer:
      "Snapshots are stored using Chrome's built-in extension storage API, which persists across browser sessions. You can also export them as JSON files for backup.",
  },
  {
    question: "Can I use it on any website?",
    answer:
      "StorageKit works on any regular website. It cannot access restricted pages like chrome:// URLs, the Chrome Web Store, or other extension pages due to browser security policies.",
  },
  {
    question: "Does it support Firefox or Safari?",
    answer:
      "Not yet. StorageKit is currently Chrome-only, but support for other browsers may be added in the future.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-border/50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionLabel label="FAQ" heading="Frequently asked questions" />

        <div className="mt-12 divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="pr-4 text-base font-medium">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "shrink-0 text-muted-foreground transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200",
                  openIndex === i
                    ? "grid-rows-[1fr] pb-5 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
