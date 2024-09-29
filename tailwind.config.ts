import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        blurple: "#586SF2",
        green: "#57F287",
        yellow: "#FEE75C",
        fuchsia: "#EB459E",
        red: "#ED4245",
        white: "#FFFFFF",
        black: "#23272A",
        bg1: "#1E1F22",
        bg2: "#2A2D31",
        bg3: "#303338",
        wh1: "#F2F3F5",
        wh2: "#B5BAC0",
      },
      backgroundImage: {
        "profile-pic":
          "url('https://avatars.githubusercontent.com/u/28147405?v=4')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
