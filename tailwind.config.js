module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '900px',
        xl: '1024px',
        '2xl': '1280px'
      },
      padding: {
        DEFAULT: '1rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
