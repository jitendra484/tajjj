/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#16c2d5" ,
        secondary: "#89dee2",
        third: "#10217d",
        fourth: "#527c88",
        fifth: "#f6d809"
      },
      
    },
  },
  plugins: [],
}