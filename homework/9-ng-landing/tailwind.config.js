/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      black: "#2D2F30",
      white: "#ffffff",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
