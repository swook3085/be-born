/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      flex: {
        0: '0 0 auto',
      },
    },
  },
  plugins: [],
}
