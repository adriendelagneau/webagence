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
      colors: {
        "myOrange": '#fb5724',
        "myBlue": '#1a2842'
      }
    },
  },
  plugins: [],
}
