/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'loop-scroll': 'loop-scroll 15s linear infinite'
      }, 
      keyframes: {
        'loop-scroll': {
          from:{transform:'translateX(0)'},
          to:{ transform: 'translateX(-100%)'},
        }
      },
      








      colors:{
        primary: "#0F7011" ,
        secondary: "#89dee2",
        third: "#10217d",
        fourth: "#F8FAFC",
        fifth: "#f6d809",
        textheadh3: "#374253",
        textpara: "#596579"
      },

      
      
    },
  },
  plugins: [],
}