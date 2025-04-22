/** @type {import('tailwindcss').Config} */
require('dotenv').config();

// These env variables are not supposed to be set manually, but fetched from the remote source
if (!process.env.THEME_PRIMARY || !process.env.THEME_SECONDARY) {
  throw new Error('THEME_PRIMARY and THEME_SECONDARY environment variables must be set');
}

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
        "QR-TONIC": {
          "primary": process.env.THEME_PRIMARY,
          "secondary": process.env.THEME_SECONDARY,
        }
      }
    ],
    darkTheme: false,
  },
} 