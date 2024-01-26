/** @type {import('tailwindcss').Config} */
const tailwind = {
  darkMode: ["class"],
  // purge: ['./src/**/*.{js,ts,jsx,tsx}', "./pages/**/*.{js,ts,jsx,tsx}"],
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
        body: ["Merriweather", "serif"],
        design: ["Bodoni Moda", "serif"],
        display: ["Noto Sans Display", "sans-serif"],
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
