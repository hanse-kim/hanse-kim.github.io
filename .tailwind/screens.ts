import { ThemeConfig } from 'tailwindcss/types/config';

export const screens: ThemeConfig['screens'] = () => {
  return {
    tablet: { max: '1080px' },
    mobile: { max: '640px' },
  };
};
