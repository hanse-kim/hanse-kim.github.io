import { navigate } from 'gatsby';

export class RouterUtils {
  static push(url: string) {
    return navigate(url);
  }

  static replace(url: string) {
    return navigate(url, { replace: true });
  }

  static back() {
    return navigate(-1);
  }
}
