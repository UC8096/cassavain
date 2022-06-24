module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      'raisinBlack': '#1E1E2F',
      'gainsboro' : '#D9DCE1',
      'almond' : '#DFD1C4',
      'lightGray' : '#D1CFD2',
      'romanSilver' : '#8F8F97',
      'pistachio' : '#97C680',
      'semuWhite' : '#FEFEFE',
      'cultured' : '#FCFAFA',
      'macaroniAndCheese' : '#FEBA88',
    },
    extend: {

      fontFamily: {
        'archia': ['Archia']
      },

      width: {
        '128': '32rem',
      },

      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
