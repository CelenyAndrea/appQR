/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBlue': '#0B2447',
        'customSky':'#A5D7E8',
        'customPurple': '#E5F0FF'
      },
      fontFamily: {
        'sans': ['Josefin Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
