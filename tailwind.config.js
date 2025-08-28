/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peps: {
          blue: "#0077C2",   // bleu du logo
          orange: "#F15A29", // orange du logo
          slate: "#0F172A",  // gris-ardoise profond (texte)
          sky: "#38BDF8",
          red: "#E11D48"     // pour alertes (optionnel)
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.2)"
      },
      borderRadius: {
        xxl: "1.25rem"
      },
      typography: ({ theme }) => ({
        peps: {
          css: {
            "--tw-prose-body": theme("colors.slate.700"),
            "--tw-prose-headings": theme("colors.peps.blue"),
            "--tw-prose-links": theme("colors.peps.blue"),
            "--tw-prose-bold": theme("colors.slate.900"),
            "--tw-prose-quotes": theme("colors.slate.900"),
            "--tw-prose-hr": theme("colors.slate.300"),
            a: { textDecoration: "none" }
          }
        }
      })
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
