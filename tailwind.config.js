// tailwind.config.js
module.exports = {
  content: [
    "./App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Flex', 'sans-serif'],
        'righteous': ['Righteous', 'sans-serif'],
        'semuut': ['Seymour One', 'sans-serif'],
        'noto': ['Noto Sans Old Persian', 'sans-serif'],
        'whisper': ['Whisper', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
