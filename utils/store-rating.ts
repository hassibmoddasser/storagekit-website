import { siteConfig } from "@/config/site";

export type StoreRating = { value: string; count: string };

async function badge(kind: "rating" | "rating-count") {
  const res = await fetch(
    `https://img.shields.io/chrome-web-store/${kind}/${siteConfig.storeId}.json`,
    { next: { revalidate: 86400 }, signal: AbortSignal.timeout(5000) },
  );
  const data: { message?: string } = await res.json();
  return data.message ?? "";
}

export async function getStoreRating(): Promise<StoreRating> {
  const fallback = { value: siteConfig.rating, count: siteConfig.ratingCount };
  try {
    const [rating, count] = await Promise.all([
      badge("rating"),
      badge("rating-count"),
    ]);
    const value = Number(rating.split("/")[0]);
    const total = count.replace(/ total$/, "");
    if (!Number.isFinite(value) || !/^\d+(\.\d+)?[kM]?$/.test(total)) {
      return fallback;
    }
    return { value: value.toFixed(1), count: total };
  } catch {
    return fallback;
  }
}

