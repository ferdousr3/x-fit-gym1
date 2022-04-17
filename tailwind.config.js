module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "4rem",
          "2xl": "4rem",
        },
      },
      colors: {
        // main: "#000645",
        main: "#FF592D",
        mains: "#E4461C",
        second: "#2C2A20",
        third: "#666a8f",
        four: "#7A7A7A",
        six: "#fff7f5",
        yellow: "#ffc82c",
      },
      boxShadow: {
        "3xl": "0 15px 64px 0 rgb(44 75 184 / 10%)",
        "4xl": "0px 3px 10px 0px rgb(248 96 77 / 19%)",
        "5xl": "0px 6px 30px rgba(38, 78, 118, 0.1)",
        "6xl": "0px 4px 16px 0px rgb(248 96 77 / 11%)",
        "7xl": "0px 3px 15px 0px rgb(248 96 77 / 19%)",
      },
    },
  },
  plugins: [],
};
