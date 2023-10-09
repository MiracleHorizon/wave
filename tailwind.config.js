/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'max-mobile': {
          max: '475px'
        },
        'max-600px': {
          max: '600px'
        }
      },
      transitionDuration: {
        50: '50ms'
      },
      borderWidth: {
        1: '1px',
        6: '6px'
      },
      zIndex: {
        100: 100
      },
      opacity: {
        45: '45%'
      }
    }
  },
  plugins: []
}

export default tailwindConfig
