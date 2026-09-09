/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          dark: '#141414',
          gray: '#262626',
          ivory: '#F7F3ED',
          cream: '#F2ECE1',
          creamDark: '#E5DDCF',
          copper: '#B86D43',
          copperLight: '#CE7F53',
          copperDark: '#934F29',
          gold: '#C59A6F',
          border: '#E2D9CC',
          borderDark: '#2C2B29',
          muted: '#6B6761',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        architectural: '.15em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
