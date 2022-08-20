/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#125c12",
      },
      backgroundImage: {
        'icon-close': "url('/src/assets/icons/close.svg')",
        'icon-menu': "url('/src/assets/icons/menu.svg')",
        'icon-plus': "url('/src/assets/icons/plus.svg')",
        'icon-minus': "url('/src/assets/icons/minus.svg')",
      }
    },
  },
  plugins: [],
}
