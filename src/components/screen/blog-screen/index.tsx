import React from 'react';
import { MdxNode } from 'src/_libs/types/mdx-node';
import { Heading } from 'src/components/common/heading';
import { Layout } from 'src/components/layout';
import { PostList } from './post-list';

type BlogScreenProps = {
  posts: MdxNode[];
};

export const BlogScreen = ({ posts }: BlogScreenProps) => {
  return (
    <Layout>
      <Heading>{`Blog (${posts.length} posts)`}</Heading>
      <PostList posts={posts} />
    </Layout>
  );
};
