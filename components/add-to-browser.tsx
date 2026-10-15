"use client";

import { useSyncExternalStore } from "react";
import BrowserLogo, { browsers } from "./primitives/browser-logo";

type DetectedBrowser = "chrome" | "edge" | "brave" | "opera" | "other";

type UANavigator = Navigator & {
  brave?: object;
  userAgentData?: { brands: { brand: string }[] };
};

// Arc and Vivaldi are indistinguishable from Chrome here, so they get "chrome".
function detect(): DetectedBrowser {
  const nav = navigator as UANavigator;
  const ua = nav.userAgent;
  const brands = nav.userAgentData?.brands.map((b) => b.brand) ?? [];
  if (nav.brave || brands.includes("Brave")) return "brave";
  if (brands.includes("Microsoft Edge") || ua.includes("Edg/")) return "edge";
  if (brands.includes("Opera") || ua.includes("OPR/")) return "opera";
  if (!/Chrome\/|Chromium\/|CriOS\//.test(ua)) return "other";
  return "chrome";
}

const subscribe = () => () => {};

function useBrowser() {
  return useSyncExternalStore<DetectedBrowser>(
    subscribe,
    detect,
    () => "chrome",
  );
}

export function UnsupportedNote() {
  const browser = useBrowser();
  if (browser !== "other") return null;
  return (
    <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
      Not available for Firefox or Safari yet.
    </p>
  );
}

export default function AddToBrowser({
  iconSize,
  suffix,
}: {
  iconSize?: number;
  suffix?: string;
}) {
  const browser = useBrowser();
  const id = browser === "other" ? "chrome" : browser;
  return (
    <>
      {iconSize && <BrowserLogo id={id} size={iconSize} />}
      Add to {browsers[id].name}
      {suffix}
    </>
  );
}
