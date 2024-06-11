/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#1F2122",
      white: "#FFFFFF",
      orange: "#F25921",
      yellow: "#FBB718",
      "yellow-light": "#FEEDC5",
    },
    fontFamily: {
      heading: ["Rubik", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
