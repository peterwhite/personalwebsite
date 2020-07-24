module.exports = {
  theme: {
    typography: {
      default: {
        css: {
          h1: {
            fontFamily: 'Muli, sans-serif',
          },
          h2: {
            fontFamily: 'Muli, sans-serif',
          },
          h3: {
            fontFamily: 'Muli, sans-serif',
          },
          h4: {
            fontFamily: 'Muli, sans-serif',
          },
          h5: {
            fontFamily: 'Muli, sans-serif',
          },
          blockquote: {
            fontWeight: '300',
            fontStyle: 'normal'
          }
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
