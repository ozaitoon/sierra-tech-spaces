import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1120px" },
    },
    extend: {
      colors: {
        border: "rgba(255, 255, 255, 0.08)",
        input: "rgba(255, 255, 255, 0.08)",
        ring: "#D4A006",
        background: "#0a0908",
        foreground: "#faf8f5",
        primary: {
          DEFAULT: "#D4A006",
          foreground: "#0a0908",
        },
        secondary: {
          DEFAULT: "#141210",
          foreground: "#faf8f5",
        },
        destructive: {
          DEFAULT: "#E8734A",
          foreground: "#faf8f5",
        },
        muted: {
          DEFAULT: "#141210",
          foreground: "#9a9590",
        },
        accent: {
          DEFAULT: "#D4A006",
          foreground: "#0a0908",
          light: "#FACC15",
          glow: "rgba(212, 160, 6, 0.06)",
          subtle: "rgba(212, 160, 6, 0.12)",
        },
        popover: {
          DEFAULT: "#141210",
          foreground: "#faf8f5",
        },
        card: {
          DEFAULT: "#141210",
          foreground: "#faf8f5",
        },
        gold: {
          DEFAULT: "#D4A006",
          light: "#FACC15",
          dark: "#B88B05",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#D4A006",
          600: "#B88B05",
          700: "#92710A",
          800: "#78600D",
          900: "#634F12",
        },
        copper: "#C2703E",
        warm: {
          50: "#faf8f5",
          100: "#f0ece5",
          200: "#dfd8cb",
          300: "#c4b9a8",
          400: "#9a9590",
          500: "#6b6560",
          600: "#524e4a",
          700: "#3d3a37",
          800: "#1c1a17",
          900: "#0a0908",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        lg: "14px",
        md: "10px",
        sm: "6px",
        xl: "20px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "fade-in": "fade-in 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
