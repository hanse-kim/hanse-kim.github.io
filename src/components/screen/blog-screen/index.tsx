import React from 'react';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { Heading } from 'src/components/common/heading';
import { Layout } from 'src/components/layout';
import { PostListSection } from './post-list-section';

type BlogScreenProps = {
  posts: MarkdownRemark[];
};

export const BlogScreen = ({ posts }: BlogScreenProps) => {
  return (
    <Layout>
      <Heading>{`Blog (${posts.length} posts)`}</Heading>
      <PostListSection posts={posts} />
    </Layout>
  );
};
