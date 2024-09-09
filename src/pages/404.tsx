import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import { Seo } from 'src/components/common/seo';
import { NotFoundScreen } from 'src/components/screens/404-screen';

export const Head: HeadFC = (pageProps) => <Seo {...pageProps} />;

const NotFoundPage: React.FC<PageProps> = ({}) => {
  return <NotFoundScreen />;
};

export default NotFoundPage;
