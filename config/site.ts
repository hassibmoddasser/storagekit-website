const storeId = "lnfhnhfnlkjemkgdcppdlijpdjdmnnjd";

export const siteConfig = {
  name: "StorageKit",
  url: "https://www.storagekit.dev",
  title: "StorageKit: Browser Storage Without Opening DevTools",
  description:
    "A free Chrome extension to inspect, edit, and snapshot localStorage, sessionStorage, and cookies, in a panel that docks right beside your page.",
  version: "3.0.0",
  storeId,
  // Shown only if shields.io is unreachable (see utils/store-rating.ts).
  rating: "5.0",
  ratingCount: "12",
  author: {
    name: "Hassib Moddasser",
    url: "https://www.hassib.co",
  },
  links: {
    chromeWebStore: `https://chromewebstore.google.com/detail/${storeId}?utm_source=storagekit.dev&utm_medium=website`,
    contact: "mailto:info@hassib.co",
    sponsor: "https://github.com/sponsors/hassibmoddasser",
  },
} as const;

