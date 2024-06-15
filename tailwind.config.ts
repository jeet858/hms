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
  plugins: [],
} satisfies Config;
