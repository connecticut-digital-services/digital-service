// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  prefix: 'ct-',
  theme: {
      fontFamily: {
        'sans': ['Open Sans', '-apple-system', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'serif'] 
      },
      colors: {
          primary: {
            lightest: "#CDEFFF",
            lighter: "#88BFE3",
            light: "#3A95D2",
            normal: "#3a95d2",
            dark: "#054266",
            darkest: "053955",
          },
          secondary: {
            green: '#27ae60'
          },
          grey: {
            light: '#efefef',
          },
          white: '#ffffff',
          black: {
            full: "#000000",
            alpha: "rgba(1,14,21,.90)"
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
