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
        6: '6px'
      }
    }
  },
  plugins: []
}

export default tailwindConfig
