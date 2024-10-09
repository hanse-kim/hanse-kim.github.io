import { navigate } from 'gatsby';

type Options = {
  state?: any;
};

export const routerUtils = {
  push: (url: string, options: Options = {}) => {
    return navigate(url, { ...options });
  },
  replace: (url: string, options: Options = {}) => {
    return navigate(url, { replace: true, ...options });
  },
  back: () => {
    return navigate(-1);
  },
};
