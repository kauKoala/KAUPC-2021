const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': '.625rem',
      },
    },
    colors: {
      ...colors,
      kau: {
        main: '#40368A'
      },
    },
    fontFamily: {
      // sandoll: ['sandoll-gongbyunggaktab', 'sans-serif'],
      // sans: ['Noto Sans KR', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
