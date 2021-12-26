const theme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"' , ...theme.fontFamily.sans],
        montserrat: ['"Montserrat"' , ...theme.fontFamily.sans]
      },
      color: {
        "Primary-light" : "#f8f8f8",
        "Primary-dark" : "#181818",
        "pinkish" : {
          100: "#ec407a",
          200: "#ad1457",
          300: "#880e4f",
        },
        "bluish" : {
          100: "#81d4fa",
          200: "#0277bd"
        }

      }
    },
  },
  plugins: [],
}
