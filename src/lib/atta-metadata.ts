import type { Metadata } from "next";

export const attaIconMetadata: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    { url: "/icon.png", sizes: "512x512", type: "image/png" },
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/atta/favicon.svg", type: "image/svg+xml" },
  ],
  shortcut: [{ url: "/favicon.ico" }],
  apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
};

export const attaManifestPath = "/atta/site.webmanifest";
