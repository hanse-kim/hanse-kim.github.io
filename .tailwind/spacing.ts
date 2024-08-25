import { ThemeConfig } from 'tailwindcss/types/config';
import { convertToRem, getRange } from './_utils';

export const spacing: ThemeConfig['spacing'] = () => {
  const sizes = [...getRange(0, 36), 48, 60, 72, 96, 180];

  return Object.fromEntries([
    ...sizes.map((size) => [size, convertToRem(size)]),
    ['header-height', convertToRem(72)],
    ['screen-width', convertToRem(1080)],
  ]);
};
