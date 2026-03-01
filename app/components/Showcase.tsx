"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Eye, Camera, FileCode } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { cn } from "@/utils/cn";

const tabs = [
  {
    id: "inspector",
    label: "Inspector",
    icon: Eye,
    title: "Live Storage Inspector",
    description:
      "Browse all your storage data in a clean, organized interface. Edit values inline, search across keys, and see changes reflected instantly.",
  },
  {
    id: "snapshots",
    label: "Snapshots",
    icon: Camera,
    title: "Save & Restore States",
    description:
      "Capture your entire storage state (Local storage, Session storage, and Cookies) in a single snapshot. Restore it anytime to recreate that exact state.",
  },
  {
    id: "decoding",
    label: "Decoding",
    icon: FileCode,
    title: "Automatic Value Decoding",
    description:
      "Storage Kit automatically detects encoded values and shows them decoded. JSON is pretty-printed, JWTs reveal their payload, and Base64 values are decoded inline.",
  },
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState("inspector");
  const tabsRef = useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const updatePill = useCallback(() => {
    const button = tabsRef.current.get(activeTab);
    const container = containerRef.current;
    if (button && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      setPillStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionLabel label="In Action" heading="See it in action" />

        <div className="mt-12 flex justify-center">
          <div
            ref={containerRef}
            className="relative inline-flex rounded-xl border border-border bg-muted/50 p-1"
          >
            <div
              className="absolute top-1 bottom-1 rounded-lg bg-background shadow-sm transition-all duration-300 ease-out"
              style={{ left: pillStyle.left, width: pillStyle.width }}
            />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabsRef.current.set(tab.id, el);
                }}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative z-10 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-8">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                "text-center transition-all duration-400 ease-in-out",
                activeTab === tab.id
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-x-0 top-0 opacity-0"
              )}
            >
              <h3 className="text-lg font-semibold">{tab.title}</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {tab.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-muted/50 shadow-xl">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                "flex aspect-video items-center justify-center bg-linear-to-br from-muted to-muted/80 text-muted-foreground transition-all duration-400 ease-in-out",
                activeTab === tab.id
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0"
              )}
            >
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <tab.icon size={24} className="text-accent" />
                </div>
                <p className="text-sm font-medium">
                  {tab.label} Screenshot
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Replace with actual screenshot
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
