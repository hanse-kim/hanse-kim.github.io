import kebabCase from 'kebab-case';

export class ConversionUtils {
  static getDashedString(value: string) {
    return kebabCase(value, false) || value.replaceAll(' ', '-');
  }
}
