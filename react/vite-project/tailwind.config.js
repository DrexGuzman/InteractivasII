/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#EFFAFF',
        'blue-2': '#007AB8',
        'blue-3': '#11567D',
        'orange-1': '#F5A747',
      },
      fontSize: {
        'titulo': '2.625rem',
        'subtitulo': '1.625rem',
        'texto': '1rem',
      },
      fontWeight: {
        'pesado': '600',
        'regular': '400',
      },
      fontFamily: {
        'main': 'Montserrat,sans-serif',
        'second': 'Carrois Gothic SC, sans-serif',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

