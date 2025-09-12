const { plugin } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      borderStyle: {
        groove: 'groove',
        ridge: 'ridge',
        inset: 'inset',
        outset: 'outset',
      },
    },
  },
  plugins: [
],
}