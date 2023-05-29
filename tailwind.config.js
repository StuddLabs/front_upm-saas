/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    },
    colors: {
      transparent: 'transparent',
      black1: '#1F1F26',
      black2: '#292935',
      black3: '#2D303A',
      black4: "#4E4E4E",
      purple1: '#6B5CC8',
      white1: '#fff',
      red1: '#D74545',
      yellow1: '#D4D745',
      green1: '#40B16E',
      blue1: '#406EB1',
      grey1: '#BABABA',
      grey2: '#EAEAEA',
      grey3: "#D9D9D9",
      black5: "#6E7073"
    }
  },
  plugins: [],
}

