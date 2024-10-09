import { HeadFC } from 'gatsby';
import React, { useLayoutEffect } from 'react';
import { routes } from '../_libs/constants/routes';
import { routerUtils } from '../_libs/utils/router-utils';

export const Head: HeadFC = () => <title>Home Page</title>;

const IndexPage = () => {
  useLayoutEffect(() => {
    routerUtils.replace(routes.blog);
  }, []);

  return null;
};

export default IndexPage;
