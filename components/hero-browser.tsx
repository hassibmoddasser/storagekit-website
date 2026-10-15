import icon from "@/assets/icon.svg";
import pageDark from "@/assets/screenshots/hero-page-dark.jpg";
import pageLight from "@/assets/screenshots/hero-page-light.jpg";
import panelDark from "@/assets/screenshots/hero-panel-dark.jpg";
import panelLight from "@/assets/screenshots/hero-panel-light.jpg";
import {
  ArrowLeft,
  ArrowRight,
  EllipsisVertical,
  Plus,
  Puzzle,
  RotateCw,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Image from "next/image";
import ThemedScreenshot from "./primitives/themed-screenshot";

const panel = { light: panelLight, dark: panelDark };
const panelAlt =
  "The StorageKit side panel docked beside the page, listing local storage with type icons, a JWT expiry, feature-flag toggles, and the snapshot bar";

export default function HeroBrowser() {
  return (
    <>
      <div className="border-border relative mx-auto aspect-[360/600] w-full max-w-[360px] overflow-hidden rounded-xl border shadow-2xl shadow-black/10 lg:hidden dark:shadow-black/40">
        <ThemedScreenshot src={panel} alt={panelAlt} sizes="360px" />
      </div>

      <div className="mx-auto hidden max-w-5xl overflow-hidden rounded-xl border border-zinc-300/80 bg-zinc-200 text-left shadow-2xl shadow-black/10 lg:block dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/40">
        <div aria-hidden className="flex h-10 items-end gap-3 px-3.5">
          <div className="window-dots mb-3.5">
            <span />
            <span />
            <span />
          </div>
          <div className="flex h-8 w-56 items-center gap-2 rounded-t-lg bg-zinc-100 px-3 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            <span className="grid size-4 shrink-0 place-items-center rounded bg-zinc-900 text-[9px] font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
              N
            </span>
            <span className="flex-1 truncate">Northwind · Overview</span>
            <X size={13} className="text-zinc-500" />
          </div>
          <Plus size={16} className="mb-2 text-zinc-500" />
        </div>

        <div
          aria-hidden
          className="flex h-11 items-center gap-3 bg-zinc-100 px-3 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
        >
          <ArrowLeft size={16} />
          <ArrowRight size={16} className="opacity-50" />
          <RotateCw size={15} />
          <div className="flex h-8 flex-1 items-center gap-2 rounded-full bg-white px-3.5 text-[13px] dark:bg-zinc-900">
            <SlidersHorizontal size={14} />
            <span className="text-zinc-800 dark:text-zinc-200">
              app.northwind.dev
              <span className="text-zinc-500">/dashboard</span>
            </span>
          </div>
          <Puzzle size={16} />
          <span className="grid size-7 place-items-center rounded-full bg-zinc-200 dark:bg-zinc-700">
            <Image src={icon} alt="" width={16} height={16} />
          </span>
          <span className="grid size-6 place-items-center rounded-full bg-zinc-800 text-[10px] font-semibold text-white dark:bg-zinc-200 dark:text-zinc-900">
            H
          </span>
          <EllipsisVertical size={16} />
        </div>

        <div className="grid grid-cols-[760fr_360fr] gap-2 bg-zinc-100 p-2 pt-1 dark:bg-zinc-800">
          <div className="relative aspect-[760/600] overflow-hidden rounded-lg ring-1 ring-black/5 dark:ring-white/10">
            <ThemedScreenshot
              src={{ light: pageLight, dark: pageDark }}
              alt="An example store dashboard open in Chrome"
              sizes="680px"
            />
          </div>
          <div className="relative aspect-[360/600] overflow-hidden rounded-lg ring-1 ring-black/5 dark:ring-white/10">
            <ThemedScreenshot src={panel} alt={panelAlt} sizes="320px" />
          </div>
        </div>
      </div>
    </>
  );
}
