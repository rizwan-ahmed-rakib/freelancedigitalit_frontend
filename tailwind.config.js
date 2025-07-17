/** @type {import('tailwindcss').Config} */
module.exports = {
   theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}