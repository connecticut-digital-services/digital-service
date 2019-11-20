// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  prefix: 'ct-',
  theme: {
      colors: {
          primary: {
              lighter: "#88BFE3",
              light: "#3A95D2",
              normal: "#3a95d2",
              dark: "#054266",
              darkest: "053955",
          },
          white: '#ffffff',
          black: {
              full: "#000000",
              alpha: "rgba(1,14,21,.69)"
          }
      },
      container: {
        center: true,
        padding: '1rem',
      },
  },
  variants: {},
  plugins: []
};
