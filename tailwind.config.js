/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "280px",
      },
      colors: {
        primary: "#214599",
        secondary: "#3CB371",
        dark: "#00222f",
        offset: "#e6f1f5",
        offsetdarker: "#9cdef3",
        textdark: "#213e52",
      },
      fontFamily: {
        nuni: ["Nunito Sans", "sans-serif"],
        salsa: ["Salsa", "cursive"],
        istok: ["Istok Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
