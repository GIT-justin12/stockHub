/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'p-blue': '#407BFF',
        's-blue': '#408CFF',
        't-blue': '#D1E4FF',
      },
      height: {
        '92': '92%'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '::selection': {
          backgroundColor: '#fbbf24', // Utilisation d'une couleur jaune
          color: '#000',               // Couleur du texte noir
        },
      });
    },
  ],
}

