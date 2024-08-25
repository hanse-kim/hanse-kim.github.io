export const baseFontSize = 16;

export const getRange = (minValue, maxValue) => {
  return Array.from(
    { length: maxValue - minValue + 1 },
    (_, i) => i + minValue
  );
};

export const convertToRem = (px: number) => {
  return `${px / baseFontSize}rem`;
};
