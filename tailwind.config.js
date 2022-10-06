/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        'blue': {
          900: '#7069FA',
          1000: 'rgba(112, 105, 250, 0.08)',
        },
        'green': {
          900: 'rgba(61, 204, 121, 1)',
          1000: 'rgba(61, 204, 121, 0.16)',
        },
        'red': {
          900: 'rgba(250, 105, 105, 1)',
          1000: 'rgba(204, 61, 61, 1)',
          1100: 'rgba(250, 105, 105, 0.16)',
        },
        'dark': {
          900: ' #111419',
          1000: '#111214',
          1100: 'rgba(65, 69, 77, 1)',
        },
        'white': {
          500: '#FCFAFF',
          600: '#fff',
          700: '#A1A0A3',
          1000: '#F2F0F5',
          1100: 'rgba(217, 217, 217, 0.04)',
          1200: '#E6E6FF',
        },
        'gray': {
          900: 'rgba(217, 217, 217, 20%)',
          1000: 'rgba(237, 235, 240, 1)',
          1100: 'rgba(151, 151, 151, 1)',
          1200: 'rgba(121, 120, 122, 1)',
        }

      }),
      width: {
        '29': '107px',
        '348': '348px',
        '800': '885px',
        '57': '229px',
        '59': '306px',
      },
      fontSize: {
        '9xl': ['27px', '24px'],
        '10xl': ['16px', '20px'],
        '11xl': ['18px', '20px'],
        '12xl': ['14px', '24px'],
        's': '10px',
      },
      theme: {
        screens: {
          xs:'390px',
          xxl:"1920px",
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('flowbite/plugin'),
    require("daisyui"),
  ],
}

