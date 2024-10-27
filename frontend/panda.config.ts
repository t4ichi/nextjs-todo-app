import { defineConfig } from "@pandacss/dev";

const theme = {
  tokens: {
    fonts: {
      body: {
        value: {
          bold: { value: "700" },
        },
      },
    },
    fontSizes: {
      xs: { value: "0.667rem" },
      sm: { value: "0.75rem" },
      md: { value: "1rem" },
      lg: { value: "1.25rem" },
      xl: { value: "1.5rem" },
      xxl: { value: "2rem" },
    },
    colors: {
      base: {
        50: { value: "#F2F2F2" },
        100: { value: "#E6E6E6" },
        200: { value: "#CCCCCC" },
        400: { value: "#999999" },
        600: { value: "#666666" },
        900: { value: "#1A1A1A" },
      },
      primary: {
        50: { value: "#F0F9FF" },
        400: { value: "#57B8FF" },
        800: { value: "#0066BE" },
      },
      succcess: {
        1: { value: "#259D63" },
        2: { value: "#197A4B" },
      },
      error: {
        1: { value: "#EC0000" },
        2: { value: "#CE0000" },
      },
    },
  },
};
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  theme: theme,
  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
});
