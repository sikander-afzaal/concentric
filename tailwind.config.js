const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Panton", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        landingBg: "url('/hero-bg.jpg')",
        serviceBg: "url('/service-bg.jpg')",
      },
      colors: {
        cyan: "#22F4AE",
        lightGray: "#EDEDED",
        textGray: "#A9A9A9",
        seaGreen: "#47D9CB",
        darkCyan: "#00C9EC",
        yellow: "#F7EA2D",
      },
    },
  },
  plugins: [],
};
