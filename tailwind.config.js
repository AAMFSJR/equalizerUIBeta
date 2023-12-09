/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Hanken-Book':['Hanken-Book', 'sans-serif'],
        'Avenir-Heavy':['Avenir-Heavy', 'sans-serif'],
      },
      colors:{
        custom1:'#FEF8BA',
        custom2:'#0B0B0B',
        custom3:'#000000',
        custom4:'#292929',
        custom5:'#75B5FD',
        custom6:'#C8FBB8'
      }
    },
  },
  plugins: [],
}

