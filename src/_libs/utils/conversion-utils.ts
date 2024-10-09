import kebabCase from 'kebab-case';

export const conversionUtils = {
  getDashedString: (value: string) => {
    return kebabCase(value, false) || value.replaceAll(' ', '-');
  },
};
