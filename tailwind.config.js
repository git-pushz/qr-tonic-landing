module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        ["FLY"]: {
          "primary": "#0D0D0D",
          "secondary": "#FFF2F2",
        }
      }
    ],
    darkTheme: false,
  },
} 