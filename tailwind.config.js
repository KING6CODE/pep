/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
  colors: {
    peps: {
      blue: "#0B3C5D", // bleu pro profond
      red: "#E11D48", // rouge santé/attention
      sky: "#38BDF8", // accents lumineux
      slate: "#0F172A", // texte sombre
      },
    },
    boxShadow: {
      soft: "0 10px 30px -12px rgba(0,0,0,0.2)",
    },
    borderRadius: {
      xxl: "1.25rem",
      },
    },
  },
};
