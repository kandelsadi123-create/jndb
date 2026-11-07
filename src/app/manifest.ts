import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "J and B Barista Academy",
    short_name: "J & B Barista",
    description:
      "Specialty coffee training in Hetauda, Nepal. Barista foundation, latte art, and coffee shop management programs.",
    start_url: "/",
    display: "standalone",
    // These two values mirror --palette-cream and --palette-coffee-600 in globals.css.
    // The manifest format only accepts literals, so they cannot reference the tokens.
    background_color: "#faf7f2",
    theme_color: "#6f4726",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
