/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-main': '#e6ccb2',//Mon texte
        'beige-contrast': '#f3e9dcff',
        // 'grey-custom': '#6c757d',
        'grey-main': '#212529',//Mon fond => Un contrast entre les 2 BRUN ?
        'brun-contrast': '#9d6b53',
      },
      fontFamily: {
        comforta: ['Comfortaa', 'Roboto', 'Sergoe UI']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
        'slide-in-down': 'slideInDown 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0'},
          to: { opacity: '1'},
        },
        zoomIn: {
          from: {opacity: '0', transform: 'scale(0.95)'},
          to: {opacity: '1', transform: 'scale(1)'},
        },
        slideInDown: {
          '0%': {transform: 'translateY(-0.5rem)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        }
      },
    },
  },
  plugins: [],
}
// 3 Couleurs : Fond1/Fond2 (legers contraste) / text / Accent(hover, boutons)