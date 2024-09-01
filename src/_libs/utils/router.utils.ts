import { navigate } from 'gatsby';

type Options = {
  state?: any;
};

export class RouterUtils {
  static push(url: string, options: Options = {}) {
    return navigate(url, { ...options });
  }

  static replace(url: string, options: Options = {}) {
    return navigate(url, { replace: true, ...options });
  }

  static back() {
    return navigate(-1);
  }
}
