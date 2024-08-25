import { ThemeConfig } from 'tailwindcss/types/config';

export const transitionProperty: ThemeConfig['transitionProperty'] = () => {
  return {
    shadow: 'box-shadow, filter',
  };
};
