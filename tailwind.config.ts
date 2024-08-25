import { Config } from 'tailwindcss';
import { borderWidth } from './.tailwind/border-width';
import { fontSize } from './.tailwind/font-size';
import { spacing } from './.tailwind/spacing';
import { dropShadow } from './.tailwind/drop-shadow';
import { transitionProperty } from './.tailwind/transition';
import { createThemes } from 'tw-colors';
import { dark, light } from './.tailwind/colors';
import { borderRadius } from './.tailwind/border-radius';
import { animation, keyframes } from './.tailwind/animation';

const tailwindConfig = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontSize,
    spacing,
    borderWidth,
    dropShadow,
    borderRadius,
    extend: {
      transitionProperty,
      animation,
      keyframes,
    },
  },
  plugins: [
    createThemes(
      { light, dark },
      {
        defaultTheme: {
          light: 'light',
          dark: 'dark',
        },
      }
    ),
  ],
} satisfies Config;

export default tailwindConfig;
