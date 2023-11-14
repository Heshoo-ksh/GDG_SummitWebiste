/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'jump-fade-in-one': 'fadeIn 1.5s ease .4s forwards',
        'zoom-fade-in': 'zoomFadeIn 1.75s ease-out 1.2s forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': {
              opacity: 0,
              transform: 'translateY(20px)'
            },
          '100%': {
            opacity: 100,
            transform: 'translateY(0)'
          }
        },
        zoomFadeIn: {
          '0%': {
            transform: 'scale(0)'
          },
          '50%': {
            transform: 'scale(1.2)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        }
      }
    },
  },
  plugins: [],
}
