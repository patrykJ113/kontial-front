/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        deepPurple: {
          50: "#EDE7F6",
          100: "#D1C4E9",
          200: "#B39DDB",
          300: "#9575CD",
          400: "#7E57C2",
          500: "#673AB7",
          600: "#5E35B1",
          700: "#512DA8",
          800: "#4527A0",
          900: "#311B92",
          A100: "#B388FF",
          A200: "#7C4DFF",
          A400: "#651FFF",
          A700: "#6200EA",
        },
      },
      lineHeight: {
        '9': '72px',
        '8': '56px',
        '7': '48px',
        '6': '40px',
        '5': '32px',
        '4': '26px',
        '3': '24px',
        '2': '20px',
        '1': '16px',
      }
    },
  },
  plugins: [],
};

