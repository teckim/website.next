const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ["'Poppins'", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: colors.indigo
      },
      backgroundImage: {
        'hero-desktop': "url('/images/header-shapes-desktop.png')",
        'hero-mobile': "url('/images/header-shapes-mobile.png')",
        'footer-desktop': "url('/images/contact-form-shapes-desktop.png')",
        'footer-mobile': "url('/images/contact-form-shapes-mobile.png')",
      }
    },
  },
  plugins: [],
}
