import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4F0E8",
        ink: "#1F1F1F",
        muted: "#77736B",
        accent: "#A67C52",
        line: "#D8D0C3",
        fog: "#E9E2D7",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-cormorant)",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
