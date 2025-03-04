import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

import getSidebar from "./generate-sidebar";

// https://astro.build/config
export default defineConfig({
  site: "https://courses.escuela.dev",
  integrations: [
    starlight({
      title: "Escuela.dev Courses",
      // title: { en: "Escuela.dev Courses", es: "Cursos de Escuela.dev" },
      social: {
        github: "https://github.com/Escuela-dev/courses",
      },
      sidebar: [
        ...getSidebar(
          "./src/content/docs/courses/module-01-frontend-web-developer-foundations",
          false,
        ),
        // {
        //   label: "Web Development 101",
        //   badge: "New",
        //   // items: [
        //   //   // Each item here is one entry in the navigation menu.
        //   //   { label: "Example Course", slug: "courses/example" },
        //   // ],
        //   autogenerate: { directory: "courses" },
        //   // items: [
        //   //   {
        //   //     label: "Module 1: Frontend Web Developer Foundations",
        //   //     slug: "courses/module-01-frontend-web-developer-foundations/01-overview/content",
        //   //   },
        //   //   {
        //   //     label: "Developer tools",
        //   //     slug: "courses/module-01-frontend-web-developer-foundations/02-developer-tools/content",
        //   //   },
        //   // ],
        // },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
      plugins: [starlightImageZoom()],
      // Set English as the default language for this site.
      // defaultLocale: "en",
      // locales: {
      //   // English docs in `src/content/docs/en/`
      //   en: {
      //     label: "English",
      //   },
      //   es: {
      //     label: "Español",
      //   },
      // },
    }),
  ],
});
