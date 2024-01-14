/** @type {import('tailwindcss').Config} */
const tailwind = {
  darkMode: ['class'],
  // purge: ['./src/**/*.{js,ts,jsx,tsx}', "./pages/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '960px',
        xl: '1140px',
        '2xl': '1200px',
      },
      padding: {
        DEFAULT: '15px',
        lg: "30px",
        xl: "30px",
        '2xl': "30px",
      }
    },
    typography: (theme) => ({}),
    extend: {
      colors: {
        "organic": "#1A1510",
        "lime": "#C0D99E",
        "beigie": "#FEE9D1"
      },
      fontFamily: {
        "body": ["Merriweather", "sans-serif"],
        "display": ["Bodoni Moda", "serif"],
        "text": ["Noto Sans", "sans-serif"]
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}

module.exports = tailwind