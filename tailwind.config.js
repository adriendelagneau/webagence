/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'RussoOne': ['RussoOne','sans-serif']
      },
      textColor: {
        skin: {
          base: 'var(--textColor)',
          secondary:  'var(--backgroundColor)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--backgroundColor)',
          secondary:  'var(--textColor)'
        }
      },
      borderColor: {
        skin: {
          border: 'var(--textColor)',
          secondary:  'var(--backgroundColor)'
        }
      }
    },
  },
  plugins: [],
}
