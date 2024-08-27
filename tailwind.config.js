/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'Tiny5':['Tiny5','sans-serif'],
        'arimo':['Arimo','sans-serif'],
        'play':["Playwrite NL"],
        'oswald':["Oswald", "sans-serif"]
      },
      screens: {
        
        'custom-lg': '1440px',
        'custom-md': '960px',
        'custom-sm': '640px',
      },
    },
  },
  plugins: [],
}