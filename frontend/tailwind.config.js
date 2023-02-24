/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
         'color-425C81':'#6995ff',
         'color-F1F8FF':'#FFD369',
         'color-EEEEEE':'#EEEEEE',
         'color-FAF6F5':'#151d33'


        },
    },
  },
  plugins: [],
}
