import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        sansation: ['Sansation', 'sans-serif'],
        lato:['Lato','sans-serif'],
      },
    },
  },
  keyframes: {
    open: {
      "0%": { height: "0px" },
      "100%": { height: "90px" },
    },
    close: {
      "0%": { height: "auto" },
      "100%": { height: "0" },
    },
    fadeInDown: {
      "0%": { opacity: 0, transform: "translateY(-20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
  animation: {
    open: "open 1s ease-in-out ",
    close: "close 0.5s ease-out forwards",
    fadeInDown: "fadeInDown 1s ease-out",
  },
  plugins: [],
} satisfies Config;
