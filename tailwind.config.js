/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        13: '12px'
      },
      fontFamily: {
        ubuntu: ['Ubuntu']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'goyang': 'goyang 1s infinite'
      },
      keyframes: {
        goyang: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      }
    },
    colors: {
      rizki: '#86a96f'
    }
  },
  plugins: [],
}

