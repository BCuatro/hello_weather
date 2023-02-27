/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'shrikhand': ['Shrikhand'],
        'play':['Play']
      },
      colors: {
        // Configure your color palette here
        'color-425C81':'#6995ff',
        'color-F1F8FF':'#FFD369',
        'color-EEEEEE':'#EEEEEE',
        'color-FAF6F5':'#151d33'


      },
      keyframes:{
        bounce:{
          '50%': {
            transform: `translateY(-75%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1)`
          },
          '0%, 100%': {
            transform: `translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1)`
          }
        },
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
      }
    },
  },
  
  plugins: [
    require('tailwindcss-animation-delay')
  ],
}
