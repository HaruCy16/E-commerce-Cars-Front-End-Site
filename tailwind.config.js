/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}", "./*.html", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Roboto",
        secondary: "Poppins",
      },
    },
  },
  plugins: [],
};
