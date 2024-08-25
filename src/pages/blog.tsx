import React from 'react';
import { BlogScreen } from '../components/screen/blog-screen';
import { HeadFC, PageProps } from 'gatsby';
import { Seo } from '../components/common/seo';

export const Head: HeadFC = (pageProps) => <Seo {...pageProps} />;

const BlogPage = ({}: PageProps) => {
  return <BlogScreen />;
};

export default BlogPage;
