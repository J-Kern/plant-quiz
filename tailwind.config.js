module.exports = {
  // mode: 'jit',
  important: true,
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'meridian-start': '#283c86',
        'meridian-end': '#45a247',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
