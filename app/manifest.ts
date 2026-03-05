import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "StorageKit — Browser Storage DevTools",
    short_name: "StorageKit",
    description:
      "Inspect, edit, and manage Local storage, Session storage, and Cookies in one clean, powerful Chrome DevTools panel.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#009689",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
