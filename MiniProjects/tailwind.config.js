/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        '2xl': '1920px',
      },
      colors: {
        Sun: "#FFDF22",
        Moon: "#F6F1D5",
        InputGray: "#292929",
        Black: "#000000",
        Green: "#1eba55",
        DarkBg: "#121212",
        LightBg: "#f2f3f5",
        DarkSideBarBg: "#000000",
        LightSideBarBg: "#e4e6eb",
        DarkCardBg: "#171717",
        LightCardBg: "#ffffff",
      },
    },
  },
  plugins: [
    [addDynamicIconSelectors()]
  ],
}