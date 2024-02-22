/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "custom-black": "#333333",
            },
            fontFamily: {
                Montserrat: ["Montserrat"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}
