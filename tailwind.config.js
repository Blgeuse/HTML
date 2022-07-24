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
      boxShadow: {
        border: '0 2px 0 0 #181b21'
      },
      backgroundImage: theme => ({
        'model-s': "url('./../img/model-s.jpg')",
        'mobile-model-s': "url('./../img/mobile-model-s.jpg')",

        'model-y': "url('./../img/model-y.jpg')",
        'mobile-model-y': "url('./../img/mobile-model-y.jpg')",

        'model-3': "url('./../img/model-3.jpg')",
        'mobile-model-3': "url('./../img/mobile-model-3.jpg')",

        'model-x': "url('./../img/model-x.jpg')",
        'mobile-model-x': "url('./../img/mobile-model-x.jpg')",

        'solar-panels': "url('./../img/solar-panels.jpg')",
        'mobile-solar-panels': "url('./../img/mobile-solar-panels.jpg')",

        'solar-roof': "url('./../img/solar-roof.jpg')",
        'mobile-solar-roof': "url('./../img/mobile-solar-roof.jpg')",

        'accessories': "url('./../img/accessories.jpg')",
        'mobile-accessories': "url('./../img/mobile-accessories.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
