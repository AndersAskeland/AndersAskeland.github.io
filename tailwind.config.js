module.exports = {
  purge: ["/css/tailwind.css"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"], // Sets active setting
    },
  },
  plugins: [],
}
