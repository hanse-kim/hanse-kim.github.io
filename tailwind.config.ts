import { Config } from 'tailwindcss';
import { borderWidth } from './.tailwind/border-width';
import { fontSize } from './.tailwind/font-size';
import { spacing } from './.tailwind/spacing';
import { dropShadow } from './.tailwind/drop-shadow';
import { transitionProperty } from './.tailwind/transition';

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
    extend: {
      transitionProperty,
    },
  },
  plugins: [],
} satisfies Config;

export default tailwindConfig;
