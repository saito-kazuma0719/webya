module.exports = {
  mode: "jit",
  purge: ["dist/**/*.html","src/**/*.ejs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'gray': '#f8f8f8',
      'black': '#383838',
      'faded-blue': '#4aadcb',
      'vermillion': '#ff1515',
      'black-two': '#222222',
      'brownish-grey': '#646464',
      'grey': '#e6e6e6',
      'white': '#ffffff',
      
    },
    fontSize: {
      'xsl': '0.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    spacing: {
      '1': '6px',
      '2': '12px',
      '3': '18px',
      '4': '24px',
      '5': '30px',
      '6': '36px',
      '7': '42px',
      '8': '48px',
      '9': '54px',
      '10': '60px',

    },
    screens: {
      'sm': '520px',
      // => @media (min-width: 640px) { ... }

      'md': '960px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      noto: ['Noto Sans', 'sans'],
      Montserrat: ['Montserrat', 'sans'],
    },
    extend: {
      width: {
        'logo': '387px',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
