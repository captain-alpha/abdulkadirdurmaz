/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkPurple: '#160016', // Renk kodunuzu buraya ekledik
        darkBlue: '#020618',
      },
    },
  },
  plugins: [],
}