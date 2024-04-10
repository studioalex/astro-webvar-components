import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Astro Webvar Components",
      description: "",
      customCss: ["./src/tailwind.css"],
      logo: {
        src: "./src/assets/webvar-logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/studioalex/webvar",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            {
              label: "Getting started",
              link: "/start",
            },
          ],
        },
        {
          label: "Components",
          items: [
            {
              label: "Badge",
              link: "/components/badge",
            },
            {
              label: "Button",
              link: "/components/button",
            },
            {
              label: "Clipboard",
              link: "/components/clipboard",
            },
            {
              label: "Confirm Detele",
              link: "/components/confirmdetele",
            },
            {
              label: "Link",
              link: "/components/link",
            },
            {
              label: "Link Button",
              link: "/components/linkbutton",
            },
            {
              label: "Message",
              link: "/components/message",
            },
            {
              label: "Navigation Link",
              link: "/components/navlink",
            },
          ],
        },
      ],
    }),
    tailwind({
      nesting: true,
    }),
    icon(),
  ],
  output: "server",
  compressHTML: true,
  adapter: vercel(),
});
