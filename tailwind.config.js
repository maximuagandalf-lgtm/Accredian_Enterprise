/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070F24",
          900: "#0A1834",
          800: "#101F42",
          700: "#172B57",
        },
        accent: {
          DEFAULT: "#3B5BFF",
          light: "#6C82FF",
          dark: "#2942C4",
        },
        amber: {
          DEFAULT: "#FFB020",
          dark: "#E69500",
        },
        ink: "#1B2559",
        muted: "#64748B",
        surface: "#F6F7FB",
        line: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(10, 24, 52, 0.12)",
        cardHover: "0 12px 32px -8px rgba(10, 24, 52, 0.18)",
      },
    },
  },
  plugins: [],
};
