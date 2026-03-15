import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f7f5",
          100: "#e8ebe5",
          200: "#d1d7cb",
          300: "#b3bda8",
          400: "#95a384",
          500: "#7a8b68",
          600: "#5f6e50",
          700: "#4b5741",
          800: "#3e4736",
          900: "#343c2f",
        },
        cream: {
          50: "#fefdfb",
          100: "#fdf9f0",
          200: "#faf3e0",
          300: "#f5e8c8",
          400: "#eed9a8",
        },
        gold: {
          300: "#d4b896",
          400: "#c9a87c",
          500: "#b8935f",
          600: "#a07c4a",
        },
        charcoal: {
          700: "#374151",
          800: "#2d3436",
          900: "#1a1a2e",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
