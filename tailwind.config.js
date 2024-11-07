/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cGreen': 'hsl(75, 94%, 57%)',
        'cWhite': 'hsl(0, 0%, 100%)',
        'cGrey700': 'hsl(0, 0%, 20%)',
        'cGrey800': 'hsl(0, 0%, 12%)',
        'cGrey900': 'hsl(0, 0%, 8%)',
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}