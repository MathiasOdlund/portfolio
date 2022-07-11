/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.svelte", "./src/**/*.css"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      fontFamily: {
        navbar: ["Poppins", "sans-serif"],
        main: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
