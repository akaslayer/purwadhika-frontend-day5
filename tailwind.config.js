/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'sf-compact-text': ['SF Compact Text'],
      'sf-pro-text': ['SF Pro Display'],
    },
    colors: {
      lightGray: '#F8F8F8',
      darkGray: '#5A5A65',
      black: '#212121',
      rose: '#FFDCE0',
      green: '#CBDFD8',
      lavender: '#F0E7F6',
      grey: '#E1E4E8',
      white: '#FFFFFF',
    },
  },
  plugins: [],
}
