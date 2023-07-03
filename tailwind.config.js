/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navCol:
        {
          50: '#E5E5E5',
          80:'#F84464',
          90: '#333545',
          100: '#333',
          150:'#eeeeee',
          200: '#2B3148',
          300: '#CCCCCC',
          400: '#333333',
          500: '#636d83',
          600: '#4c5567',
          700: '#353d4a',
          800: '#20242f',
          900: '#070c17',
        }

      }


    },
  },
  plugins: [],
}
