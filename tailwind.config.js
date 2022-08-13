/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#234b69',
          'light-green': '#d6f0d5',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
