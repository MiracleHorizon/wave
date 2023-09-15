/** @type {import('tailwindcss').Config} */
export default {
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
