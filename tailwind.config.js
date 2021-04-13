const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif' ]
     },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#4B755C',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
