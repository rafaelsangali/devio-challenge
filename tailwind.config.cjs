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
        'icon-wallet': "url('/src/assets/icons/wallet.svg')",
        'icon-credit-card': "url('/src/assets/icons/credit-card.svg')",
        'icon-money': "url('/src/assets/icons/money.svg')",
        'icon-x': "url('/src/assets/icons/x.svg')",
        'icon-check': "url('/src/assets/icons/check.svg')",
      }
    },
  },
  plugins: [],
}
