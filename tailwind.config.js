/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
     /* backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      */
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        "yatra-one": ["Yatra One", "cursive"],
      },
      colors: {
        primary: '#486153',
        secondary: '#E65000',
        'header-bg': '#28372fef',
        'footer-bg': '#292E31'
      }
    },
  },
  plugins: [],
}
