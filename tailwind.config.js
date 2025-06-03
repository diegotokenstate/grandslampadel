/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: 'rgb(var(--color-verde) / <alpha-value>)',
        beige: 'rgb(var(--color-beige) / <alpha-value>)',
        marfil: 'rgb(var(--color-marfil) / <alpha-value>)',
        medianoche: 'rgb(var(--color-medianoche) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Libre Franklin"', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};