/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    container: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        "2xl": "1140px"
      },
    },
    colors: {
      primary: "#ffbe33",
      secondary: "#222831",
      danger: "#ff0000",
      success: "#00ff00"
    },
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      sans: ["Open Sans", "sans-serif"]
    }
  },
};
export const plugins = [];