import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Omprakash Chauhan - Flutter Developer",
    short_name: "Omprakash Chauhan",
    description:
      "I am a Flutter developer based in India. Has Computer Engineering background.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
