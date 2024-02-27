import {defineConfig} from "astro/config"
import tailwind from "@astrojs/tailwind"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx()],
    site: "https://Nischal-Ad.github.io",
    base: "/astro-project",
})
