export class EnvUtils {
  static get isClient() {
    return typeof window !== 'undefined';
  }
}
