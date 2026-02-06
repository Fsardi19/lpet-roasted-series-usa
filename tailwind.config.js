/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - La Palma & El Tucán
        'brand-pink': '#9B3A5A',
        'brand-gold': '#8B7355',
        'brand-beige': '#D4C5B0',
        'brand-green': '#2D5A3D',
        // Extended palette
        'brand-dark': '#1a1a1a',
        'brand-cream': '#F5F0E8',
        'brand-rose': '#C4A484',
      },
      fontFamily: {
        'display': ['Gotham', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
