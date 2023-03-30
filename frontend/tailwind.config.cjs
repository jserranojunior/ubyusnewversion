const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const daisy = require("daisyui");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      ubyus: {
        100: "#414141",
        200: "#c6c6c6",
        300: "#F99A30",
      },
      ...colors,
    },
    screens: {
      print: { raw: "print" },
      tab: "576px",
      lap: "1024px",
      des: "1900px",
      ult: "2400px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [daisy],
};
