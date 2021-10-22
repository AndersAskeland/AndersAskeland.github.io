module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.njk"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#232325'
      },
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
