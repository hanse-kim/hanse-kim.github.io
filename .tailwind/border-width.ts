import { ThemeConfig } from 'tailwindcss/types/config';
import { convertToRem, getRange } from './_utils';

export const borderWidth: ThemeConfig['borderWidth'] = () => {
  const widths = getRange(0, 8);

  return Object.fromEntries(widths.map((size) => [size, `${size}px`]));
};
