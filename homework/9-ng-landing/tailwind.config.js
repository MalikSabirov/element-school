/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#2D2F30",
      strongGray: "#4F4F4F",
      gray: "#8B8C8C",
      white: "#ffffff",
      blue: "#094B72",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    boxShadow: {
      card: "0px 18px 58px 16px rgba(0, 0, 0, 0.06)",
      testimonial: "0px 10px 20px rgba(41, 41, 42, 0.07)",
    },
    extend: {},
  },
  plugins: [],
};
