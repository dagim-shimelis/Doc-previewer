/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      xs: "321px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1080px",
      "2xl": "1281px",
      "3xl": "1536px",
      "4xl": "1649px",
      "4_2xl": "1880px",
      "5xl": "2048px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f2f8fd",
          100: "#e4f0fa",
          200: "#c3e0f4",
          300: "#8dc8ec",
          400: "#50ace0",
          500: "#3b9ed7", // Base
          600: "#1b74ae",
          700: "#175d8d",
          800: "#174f75",
          900: "#184362",
          950: "#102a41",
        },
      },
    },
  },
  plugins: [],
};
