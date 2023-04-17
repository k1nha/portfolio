/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        BabyBlue: 'rgba(76, 190, 255, 0.6)',
        BabyGreen: '#b7e5a2b0',
      },
    },
  },
  plugins: [],
};
