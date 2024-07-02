/** @type {import('tailwindcss').Config} */
import b from './src/imgs/Photo.png'
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xSmall': '540px',
        '2xSM':'370px'
      },
      borderRadius: {
        'special': '29px'
      },
    },
  },
  plugins: [],
}

