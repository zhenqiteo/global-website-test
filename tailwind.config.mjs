/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   mobile: "320px",
    //   tablet: "640px",
    //   laptop: "1024px",
    //   desktop: "1280px",
    //   ultra: "1536px",
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        title: ["var(--font-poppins)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
