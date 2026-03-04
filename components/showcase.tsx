"use client";

import { cn } from "@/utils/cn";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Camera, Eye, FileCode } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import SectionLabel from "./section-label";

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
      "StorageKit automatically detects encoded values and shows them decoded. JSON is pretty-printed, JWTs reveal their payload, and Base64 values are decoded inline.",
  },
];

export default function Showcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <section className="border-border/50 border-t py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel label="In Action" heading="See it in action" />

        <div className="border-border bg-muted/30 mt-8 overflow-hidden rounded-2xl border">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-6 flex">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className="min-w-0 flex-[0_0_100%] pl-6"
                >
                  <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
                    <div
                      className={cn(
                        "transition-all delay-100 duration-500",
                        activeIndex === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0",
                      )}
                    >
                      <div className="bg-accent/10 mb-4 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium">
                        <tab.icon size={14} className="text-accent" />
                        <span className="text-accent">{tab.label}</span>
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {tab.title}
                      </h3>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed md:text-base">
                        {tab.description}
                      </p>
                    </div>

                    <div className="from-muted to-muted/80 text-muted-foreground flex aspect-4/3 items-center justify-center rounded-xl bg-linear-to-br">
                      <div className="text-center">
                        <div className="bg-accent/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl">
                          <tab.icon size={24} className="text-accent" />
                        </div>
                        <p className="text-sm font-medium">
                          {tab.label} Screenshot
                        </p>
                        <p className="text-muted-foreground mt-1 text-xs">
                          Replace with actual screenshot
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {tabs.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "bg-accent w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
