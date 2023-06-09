/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./java.js",
    "/rotate.html",
  ],
  theme: {
    extend: {
      colors: {
        'almost-black': 'hsl(0, 0%, 8%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-white': 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
