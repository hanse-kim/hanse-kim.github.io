import { ThemeConfig } from 'tailwindcss/types/config';

export const transitionProperty: ThemeConfig['transitionProperty'] = () => {
  return {
    shadow: 'box-shadow, filter',
    outline: 'outline-color, outline-style, outline-width',
    bg: 'background, background-color, background-image',
  };
};
