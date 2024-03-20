module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
  },
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#f7f2e7',
          200: '#eedcb9',
          300: '#e6c68b',
          400: '#ddaf5d',
          500: '#d5982f',
          600: '#b37f1f',
          700: '#8f6610',
          800: '#6b4d00',
          900: '#473400',
        },
      },
      mixBlendMode: {
        multiply: 'multiply',
      },
      
    },
  },
  variants: {},
  plugins: [],
};