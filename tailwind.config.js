const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Panton", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        landingBg: "url('/hero-bg.jpg')",
      },
      colors: {
        cyan: "#22F4AE",
        lightGray: "#EDEDED",
        textGray: "#A9A9A9",
      },
    },
  },
  plugins: [],
};
