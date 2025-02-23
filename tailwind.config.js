/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#000000",
        SecondaryColor: "#182e3b",
        DarkColor: "#3EA624",
        ExtraDarkColor: "#FCA311",
        NavberColor:"#081208",
      },
    },
  },
  plugins: [],
}

