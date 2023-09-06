import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ivas-black-silver": "#1A1A1A",
        "ivas-light-silver": "#AFAFAF",
        "ivas-light-green": "#7AFF87",
        "ivas-light-black": "#1D1D1D",
        "ivas-lime": "#607059",
        "ivas-off-green": "#313C31",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        press: ["var(--font-pressstart)"],
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "blink-icon": "blink 0.9s infinite  ",
      },
    },
  },
  plugins: [],
};
export default config;
