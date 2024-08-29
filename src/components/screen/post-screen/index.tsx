import React from 'react';
import { MdxNode } from 'src/_libs/types/mdx-node';
import { Layout } from 'src/components/layout';
import { PostScreenHeader } from './header';
import { Markdown } from './markdown';

type PostScreenProps = {
  post: MdxNode;
  children?: React.ReactNode;
};

export const PostScreen = ({ post, children }: PostScreenProps) => {
  return (
    <Layout>
      <PostScreenHeader {...post.frontmatter} />
      <Markdown>{children}</Markdown>
    </Layout>
  );
};
