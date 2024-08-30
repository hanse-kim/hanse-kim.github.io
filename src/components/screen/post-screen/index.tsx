import React from 'react';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { Layout } from 'src/components/layout';
import { PostScreenHeader } from './header';
import { Markdown } from './markdown';

type PostScreenProps = {
  post: MarkdownRemark;
};

export const PostScreen = ({ post }: PostScreenProps) => {
  return (
    <Layout>
      <PostScreenHeader {...post.frontmatter} />
      <Markdown html={post.html} />
    </Layout>
  );
};
