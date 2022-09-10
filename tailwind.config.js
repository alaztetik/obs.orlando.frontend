/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orlando-gray': '#35363A',
        'orlando-white': '#FCFCFA',
        'orlando-orange': '#E4991C',
        'orlando-slate': '#475577'
      }
    },
  },
  plugins: [],
}
