/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:"#f35525",
      },
      boxShadow:{
        xl:"0px 4px 10px rgba(0,0,0,0.15)",
      }
    },
  },
  plugins: [],
}

