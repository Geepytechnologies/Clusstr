/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#214599",
        secondary: "#e0ae66",
        dark: "#00222f",
        offset: "#e6f1f5",
        offsetdarker: "#9cdef3",
        textdark: "#213e52",
      },
      fontFamily: {
        nuni: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
