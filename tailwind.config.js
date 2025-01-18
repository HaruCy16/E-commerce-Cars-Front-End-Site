/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        normal: "Poppins",
      },
    },
  },
  plugins: [],
};
