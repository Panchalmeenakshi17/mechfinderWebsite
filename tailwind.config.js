/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        '4xl': '8rem',  // Define your custom value here, between 3xl and full
        '5xl': '3rem',  // Define your custom value here, between 3xl and full
        '6xl': '12rem',  // Define your custom value here, between 3xl and full
      },
    },
  },
  plugins: [],
};
