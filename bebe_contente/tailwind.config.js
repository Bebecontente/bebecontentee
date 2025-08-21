/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c8a2c8", // lilás
        secondary: "#d8bfd8" // roxo claro
      },
      borderRadius: {
        '2xl': '1.5rem'
      }
    },
  },
  plugins: [],
}