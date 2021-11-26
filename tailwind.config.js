module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        gray: "#333333",
        light: "#F0F0F0",

        red: {
          100: "#FF5757",
          200: "#C54646",
        },
        blue: {
          100: "#5271FF",
          200: "#4057C0",
        },
        yellow: {
          100: "#FEE266",
          200: "#E1C95F",
        },
      },
      fontFamily: {
        josefin: ['"Josefin Sans"'],
        open: ['"Open Sans"'],
      },
      fontSize: {
        h1: "80px",
        h2: "64px",
        h3: "36px",
        h4: "28px",
        name: "20px",
        p: "18px",
        btn: "14px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
