module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue'],
  safelist: [
    {
      pattern:
        /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|600|900)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked']
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      ringWidth: ['hover', 'active']
    }
  },
  plugins: []
}
