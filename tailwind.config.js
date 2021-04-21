module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '140':'35rem',
        '160':'40rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
