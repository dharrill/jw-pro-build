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
        primary: {
          yellow: "#FFD700",
          black: "#000000",
          white: "#FFFFFF",
        },
        accent: {
          gray: "#1F2937",
          "gray-light": "#6B7280",
          green: "#10B981",
          red: "#EF4444",
        },
        background: {
          warm: "#FFFEF7",
          light: "#FAFAFA",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

