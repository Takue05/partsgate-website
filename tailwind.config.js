/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4891A',
          dark: '#B8731A',
          light: '#F0A830',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          2: '#2A2A2A',
          3: '#333333',
        },
        steel: '#4A5568',
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}