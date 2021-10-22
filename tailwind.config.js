module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.njk"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', '"-apple-system"','BlinkMacSystemFont']
      }
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}
