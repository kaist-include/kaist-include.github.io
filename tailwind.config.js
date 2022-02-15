module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        incl: {
          300: '#accceb',
          500: '#4570ac',
          600: '#3c6191',
        }
      },
    },
  },
  plugins: [],
}
