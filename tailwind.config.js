/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {

    
    extend: { 

      fontFamily: {
        'subtitulo': ['var(--ff-primary)'],
      },
      fontSize: {
        'subtitulo': '1.625rem',
      },
      fontWeight: {
        'subtitulo': 'var(--fw-reg)',
      },
      

    },
  },
  plugins: [],







}

