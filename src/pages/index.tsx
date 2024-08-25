import { HeadFC } from 'gatsby';
import React, { useEffect } from 'react';
import { RouterUtils } from '../_libs/utils/router.utils';
import { routes } from '../_libs/constants/routes';

export const Head: HeadFC = () => <title>Home Page</title>;

const IndexPage = () => {
  useEffect(() => {
    RouterUtils.replace(routes.blog);
  }, []);

  return null;
};

export default IndexPage;
