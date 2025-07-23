/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-main': '#e6ccb2',
        'beige-contrast': '#f3e9dc',
        'grey-custom': '#495057',
      },
      fontFamily: {
        comforta: ['Comfortaa', 'Roboto', 'Sergoe UI']
      },
    },
  },
  plugins: [],
}
// 3 Couleurs : Fond1/Fond2 (legers contraste) / text / Accent(hover, boutons)