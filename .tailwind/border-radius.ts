import { getRange } from './_utils';

export const borderRadius = () => {
  return {
    ...Object.fromEntries(
      getRange(1, 16).map((value) => [value, `${value}px`])
    ),
    full: '9999px',
  };
};
