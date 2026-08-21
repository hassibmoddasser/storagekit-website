import { siteConfig } from "@/config/site";
import { Chrome } from "lucide-react";
import Image from "next/image";

import ctaImg from "@/assets/screenshots/hero.jpg";
import ButtonLink from "./primitives/button";

export default function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Dark in both themes. The captures are of the panel's dark UI, so a
            dark band is the one surface where they don't need a well to stop
            reading as holes — and it gives the page a full stop before the
            footer. Colours are fixed rather than tokenised for the same
            reason: the surface no longer follows the theme. */}
        <div className="relative isolate overflow-hidden rounded-3xl bg-zinc-900 px-6 py-14 ring-1 ring-white/[0.08] sm:py-16 lg:px-14">
          <div className="bg-grid-invert absolute inset-0" />
          {/* One soft pool, replacing the two overlapping glows that used to
              wash the whole card out. */}
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-teal-500/[0.07] blur-3xl" />

          {/* Two columns only from lg. The button pair needs ~400px, which a
              half-width column does not have until then — below that it
              overflowed underneath the screenshot. */}
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white md:text-4xl">
                Keep your storage <span className="text-teal-400">open</span>.
              </h2>

              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-pretty text-zinc-400 md:text-lg lg:mx-0">
                Free and fully local. Built by a developer who got tired of
                digging through the Application panel.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <ButtonLink
                  href={siteConfig.links.chromeWebStore}
                  external
                  onDark
                  className="w-full sm:w-auto"
                >
                  <Chrome size={18} aria-hidden />
                  Add to Chrome — It&apos;s Free
                </ButtonLink>
                <ButtonLink
                  href="/changelog"
                  variant="secondary"
                  onDark
                  className="w-full sm:w-auto"
                >
                  What&apos;s new in {siteConfig.version}
                </ButtonLink>
              </div>

              {/* zinc-500 lands at 4.04:1 on zinc-900 — under AA at this size. */}
              <p className="mt-4 text-xs text-balance text-zinc-400">
                No signup · No config · Works on any site you can open
              </p>
            </div>

            {/* Hidden on phones: at ~294px wide the panel UI is unreadable, and
                the hero already shows this capture at the top of the page. */}
            <div className="mx-auto hidden w-full max-w-md sm:block lg:mx-0 lg:max-w-none">
              {/* Native aspect, so the whole panel shows and nothing is cropped. */}
              <div className="relative aspect-[1560/1160] overflow-hidden rounded-xl shadow-2xl ring-1 shadow-black/40 ring-white/10">
                <Image
                  src={ctaImg}
                  alt="The StorageKit panel with a storage key selected and its JSON value formatted"
                  fill
                  sizes="(min-width: 1024px) 460px, (min-width: 640px) 28rem, 0px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
