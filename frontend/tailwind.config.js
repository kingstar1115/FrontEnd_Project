const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    fontFamily: {
      'josefin': ['Josefin Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
    container: {
      center: true,
    },
    screens: {
      'xsm': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}