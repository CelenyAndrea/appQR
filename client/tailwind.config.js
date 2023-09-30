/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBlue1': '#0B2447',
        'customBlue2': '#19376D',
        'customBlue3':'#576CBC',
        'customSky':'#A5D7E8',
      },
      // width: {
      //   'w360': '360px'
      // },
      // height: {
      //   'h510': '510px',
      // },
      // borderRadius: {
      //   'r30': '30px'
      // },
      // fontFamily: {
      //   'sans': ['Josefin Sans', 'sans-serif']
      // },
    },
  },
  plugins: [],
}
