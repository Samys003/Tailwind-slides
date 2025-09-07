/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
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
  plugins: [],
}