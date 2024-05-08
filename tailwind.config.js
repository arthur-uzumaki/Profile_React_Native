/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        gray:{
          400: "#707070",
          500: "#2D2D2D",
          600: "#232323",
          700: "#1C1C1C",
          800: "#161616",
        },
        green: {
          400: "#70E1C1",
          500: "#3ECF8F",
        },
      }
    },
  },
  plugins: [],
}