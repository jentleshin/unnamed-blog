/** @type {import('tailwindcss').Config} */
const tailwind = {
  darkMode: ["class"],
  // purge: ['./src/**/*.{js,ts,jsx,tsx}', "./app/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
      },
      padding: {
        DEFAULT: "0px",
      },
    },
    typography: (theme) => ({}),
    extend: {
      colors: {
        organic: "#1A1510",
        lime: "#C0D99E",
        beigie: "#FEE9D1",
      },
      fontFamily: {
        body: ["var(--font-merri)"],
        design: ["var(--font-bodoni)"],
        display: ["var(--font-noto)"],
      },
      spacing: {
        "notion-default": "8px",
        "notion-lg": "16px",
        "notion-xl": "24px",
        "notion-indent": "24px",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};

module.exports = tailwind;
