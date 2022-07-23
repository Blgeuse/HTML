/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'tablet': '600px',
      'desktop': '1200px',
      'portrait': {'raw': '(orientation: portrait)'},
    },
    extend: {
      backgroundImage: theme => ({
        'model-3': "url('./../img/m3.jpg')",
        'mobile-model-3': "url('./../img/mobile-m3.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
