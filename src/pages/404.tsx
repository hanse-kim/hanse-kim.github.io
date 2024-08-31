import { HeadFC, Link, PageProps } from 'gatsby';
import * as React from 'react';
import { Seo } from 'src/components/common/seo';
import { NotFoundScreen } from 'src/components/screen/404-screen';
import { PageProvider } from 'src/contexts/page-context';

export const Head: HeadFC = (pageProps) => <Seo {...pageProps} />;

const NotFoundPage: React.FC<PageProps> = ({ ...pageProps }) => {
  return (
    <PageProvider {...pageProps}>
      <NotFoundScreen />
    </PageProvider>
  );
};

export default NotFoundPage;
