/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lexend:["Lexend", "sans-serif"],
      },
      maxWidth:{
        navwidth:'1200px',
      }
    },
  },
  plugins: [],
}

