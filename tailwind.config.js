module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Share Tech Mono"],
    },
    extend: {
      colors: {
        "custom-lightgray": "#222222",
        "custom-gray": "#1A1A1A",
        "custom-bg-btn": "#3353FF",
      },
    },
  },
  plugins: [],
};
