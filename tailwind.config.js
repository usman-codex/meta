/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#030014',
        metaPurple: '#a855f7',
        metaViolet: '#7c3aed',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(to right, #a855f7, #7c3aed)',
      }
    },
  },
  plugins: [],
}