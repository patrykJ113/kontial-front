/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      spacing: {
        "full-20": "calc(100%)",
      },
      keyframes: {
        spinnerRotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        spinnerClipFix: {
          "0%": { clipPath: "polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)" },
          "25%": {
            clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)",
          },
          "50%": {
            clipPath:
              "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
          },
          "75%": {
            clipPath:
              "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
          },
          "100%": {
            clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
          },
        },
      },
      animation: {
        spinnerRotate: "spinnerRotate 1s linear infinite",
        spinnerClipFix: "spinnerClipFix 2s linear infinite",
      },
      fontSize: {
        "3.5xl": ["32px", "40px"],
      },
      width: {
        25: "100px",
      },
      margin: {
        50: "200px",
      },
      boxShadow: {
        indigo: "0 0 140px 10px rgba(124, 77, 255, 0.05)",
      },
      colors: {
        backdrop: "rgba(117, 117, 117, 0.3)",
        indigo: {
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
        red: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
          A100: "#FF8A80",
          A200: "#FF5252",
          A400: "#FF1744",
          A700: "#D50000",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        green: {
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
          A100: "#B9F6CA",
          A200: "#69F0AE",
          A400: "#00E676",
          A700: "#00C853",
        },
      },
      lineHeight: {
        18: "72px",
        14: "56px",
        12: "48px",
        6.5: "26px",
      },
    },
  },
  plugins: [],
};
