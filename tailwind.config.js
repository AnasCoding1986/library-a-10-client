/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        pacifico: '"Pacifico", cursive',
        clicker: '"Clicker Script", cursive',
        luckiestGuy: '"Luckiest Guy", cursive',
        permanentMarker: '"Permanent Marker", cursive',
        caveatBrush: '"Caveat Brush", cursive'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

