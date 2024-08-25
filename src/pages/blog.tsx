import React from 'react';
import { BlogScreen } from '../components/screen/blog-screen';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '../components/common/seo';
import { PageProvider } from 'src/contexts/page-context';

export const Head: HeadFC = (pageProps) => <Seo {...pageProps} />;

const BlogPage = ({ ...pageProps }: PageProps) => {
  return (
    <PageProvider {...pageProps}>
      <BlogScreen />
    </PageProvider>
  );
};

export default BlogPage;
