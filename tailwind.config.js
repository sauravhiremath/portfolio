const colors = require('tailwindcss/colors');
const colorSafeList = []

delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

for (const colorName in colors) {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  const pallette = colors[colorName]

  if (typeof pallette === "object") {
    shades.forEach((shade) => {
      if (shade in pallette) {
        colorSafeList.push(`from-${colorName}-${shade}`)
        colorSafeList.push(`via-${colorName}-${shade}`)
        colorSafeList.push(`to-${colorName}-${shade}`)
      }
    })
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: colorSafeList,
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
        ...colors,
        'darkColor': '#191A19',
        'textDark': '#092545',
        'themeBlue': '#2d6ae3',
        'themePink': '#F35C6C',
        'themeOrange': '#FD5F28',
        'darkThemeTextColor': '#C2C9E4',
        'lightGray': '#F9FAFB',
        'buttonDark': '#212324'
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
  plugins: [require('tailwind-scrollbar-hide')],
}
