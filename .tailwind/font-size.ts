import { ThemeConfig } from 'tailwindcss/types/config';
import { convertToRem, getRange } from './_utils';

export const fontSize: ThemeConfig['fontSize'] = () => {
  const sizes = [...getRange(10, 48), 56, 64, 72, 96];
  const weights = [300, 400, 500, 700, 800];

  return Object.fromEntries(
    sizes.flatMap((fontSize) =>
      weights.map((fontWeight) => [
        `${fontSize}-${fontWeight}`,
        [convertToRem(fontSize), { fontWeight }],
      ])
    )
  );
};
