/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'dmSans': ['DM Sans', 'sans-serif']
      },
      colors: {
        'darkColor': '#191A19',
        'textDark': '#092545',
        'themeBlue': '#2d6ae3',
        'themePink': '#F35C6C',
        'themeOrange': '#FD5F28',
        'darkThemeTextColor': '#C2C9E4',
        'lightGray': '#F9FAFB'
      },
      scale: {
        '105': '1.05',
      },
      boxShadow: {
        'button': '0px 6px 13px -8px rgba(0,0,0,0.75)',
        'buttonlarge': '0px  6px 22px -12px rgba(0,0,0,0.75)',

      }
    },
  },
  plugins: [],
}
