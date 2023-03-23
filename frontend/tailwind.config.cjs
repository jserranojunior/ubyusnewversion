const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const daisy = require("daisyui");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  variants: {
    extend: {},
  },
  plugins: [daisy],
};
