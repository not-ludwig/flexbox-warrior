/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(7, 99%, 70%)',
        'cYellow': 'hsl(51, 100%, 49%)',
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)', // (graphic design text)
        'dark-blue': 'hsl(198, 62%, 26%)', // (photography text)
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)', // (footer)
        'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
        'cWhite': 'hsl(0, 0%, 100%)',
        'topnavcolor': '#3DBEFF',
        'card-text-bg': '#FFFBF8',
        'footer-bg': '#90D4C5',
      },

      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        barlow: ["Barlow", "serif"]
      },

      backgroundImage: {
        'hero-image-mobile': "url('../images/mobile/image-header.jpg')",
        'other-device-hero': "url('../images/desktop/image-header.jpg')",
        'graphic-design-mobile': "url('../images/mobile/image-graphic-design.jpg')",
        'graphic-design-other': "url('../images/desktop/image-graphic-design.jpg')",
        'photography-mobile': "url('../images/mobile/image-photography.jpg')",
        'photography-mobile-other': "url('../images/desktop/image-photography.jpg')",
      }
    },
  },
  plugins: [],
}