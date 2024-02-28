/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "custom-black": "#031926",
                "custom-green": "#222222",
                "custom-white": "#F4F4F4",
            },
            fontFamily: {
                Montserrat: ["Montserrat"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}
