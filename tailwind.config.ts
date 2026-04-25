import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors (30% usage)
        primary: {
          yellow: "#FFD700", // Gold - CTAs, accents, brand elements
          black: "#000000",  // Text, structure, navigation
          white: "#FFFFFF",  // Backgrounds, contrast
        },
        // Accent colors
        accent: {
          gray: "#1F2937",         // Dark gray for headers, structural elements
          "gray-light": "#6B7280", // Medium gray for secondary text
          green: "#10B981",        // Success indicators
          red: "#EF4444",          // Urgency indicators (use sparingly)
        },
        // Background colors
        background: {
          warm: "#FFFEF7",  // Warm white with yellow tint
          light: "#FAFAFA", // Soft off-white
        },
        // Border colors
        border: {
          DEFAULT: "#E5E7EB", // Light gray borders
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Mobile-first responsive typography
        'h1': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],      // 32px mobile
        'h1-desktop': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 56px desktop
        'h2': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],   // 28px mobile
        'h2-desktop': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }], // 40px desktop
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],    // 24px mobile
        'h3-desktop': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],   // 32px desktop
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],   // 20px mobile
        'h4-desktop': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 24px desktop
      },
      spacing: {
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
        '26': '6.5rem',  // 104px
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'yellow': '0 4px 6px -1px rgba(255, 215, 0, 0.3), 0 2px 4px -1px rgba(255, 215, 0, 0.2)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;

