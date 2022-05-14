const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      zIndex: {
        100: "100",
        1000: "1000",
        10000: "10000",
      },
      colors: {
        darkTheme: "#112135",
        white: {
          900: "#ffffff",
          700: "#C9C9CB",
          500: "#A5A6A9",
          300: "#363B49",
        },
        gray: {
          700: "#8E8E8E",
          900: "#363B49",
        },
        lightTheme: "#549FFC ",
        blue: {
          500: "#549FFC",
          700: "#3C74FE",
          900: "#112135",
        },
        black: {
          900: "#000000",
          800: "#0D1329",
          700: "#32393C",
          500: "#202023",
        },
        orange: {
          900: "#EB9C26",
          700: "#F0B435",
          500: "#F5CC44",
        },
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "none",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
      transitionProperty: {
        top: "top",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "5xl": "2.8125rem",
        sectionHeader: "1.75rem",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["dark"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
