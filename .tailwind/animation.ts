import { ThemeConfig } from 'tailwindcss/types/config';

export const animation: ThemeConfig['animation'] = () => {
  return {
    'dark-mode-icon-in': 'dark-mode-icon-in 0.25s ease-in forwards',
    'dark-mode-icon-out': 'dark-mode-icon-out 0.25s ease-in forwards',
  };
};

export const keyframes: ThemeConfig['keyframes'] = () => {
  return {
    'dark-mode-icon-in': {
      from: {
        transform: 'scale(0) rotate(360deg)',
        opacity: '0',
      },
      to: {
        transform: 'scale(1) rotate(0deg)',
        opacity: '1',
      },
    },
    'dark-mode-icon-out': {
      from: {
        transform: 'scale(1) rotate(0deg)',
        opacity: '1',
      },
      to: {
        transform: 'scale(0) rotate(-360deg)',
        opacity: '0',
      },
    },
  };
};
