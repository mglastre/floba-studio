import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FAFAFA",
                foreground: "#1A1A1A",
                accent: "#C5B358",
                dark: "#0a0a0a",
                subtle: "#E5E5E5",
                packbg: "#F3F4F6",
            },
            fontFamily: {
                serif: ["var(--font-bodoni)", "serif"],
                sans: ["var(--font-manrope)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
