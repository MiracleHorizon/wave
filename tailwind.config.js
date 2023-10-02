/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'max-mobile': {
          max: '475px'
        }
      }
    }
  },
  plugins: []
}

export default tailwindConfig
