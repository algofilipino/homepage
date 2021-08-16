module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",

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
      fontFamily: {
        "josefin": ['"Josefin Sans"', 'system-ui', 'sans-serif'],
        "open": ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: "144px",
        h2: "96px",
        h3: "72px",
        h4: "36px",
        name: "28px",
        p: "24",
        btn: "18",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
