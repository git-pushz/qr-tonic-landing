/** @type {import('tailwindcss').Config} */
const features = require('./src/_data/features.json');

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
        [features.theme.name]: {
          "primary": features.theme.colors.primary,
          "secondary": features.theme.colors.secondary,
          "accent": features.theme.colors.accent,
          "neutral": features.theme.colors.neutral,
          "base-100": features.theme.colors["base-100"],
          "info": features.theme.colors.info,
          "success": features.theme.colors.success,
          "warning": features.theme.colors.warning,
          "error": features.theme.colors.error,
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        }
      }
    ],
    darkTheme: false,
  },
} 