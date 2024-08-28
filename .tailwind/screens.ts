import { ThemeConfig } from 'tailwindcss/types/config';

export const screens: ThemeConfig['screens'] = () => {
  return {
    desktop: '1081px',
    tablet: { max: '1080px' },
    mobile: { max: '640px' },
  };
};
