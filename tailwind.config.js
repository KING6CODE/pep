/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        peps: {
          blue: "#0B3C5D",
          red: "#E11D48",
          sky: "#38BDF8",
          slate: "#0F172A"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.2)"
      },
      borderRadius: {
        xxl: "1.25rem"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
