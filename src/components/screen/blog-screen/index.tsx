import React from 'react';
import { MdxNode } from 'src/_libs/types/mdx-node';
import { Layout } from 'src/components/layout';
import { PostCard } from './post-card';
import { PostGrid } from './post-grid';
import { Heading } from 'src/components/common/heading';

type BlogScreenProps = {
  posts: MdxNode[];
};

export const BlogScreen = ({ posts }: BlogScreenProps) => {
  return (
    <Layout>
      <Heading>{`Blog (${posts.length} posts)`}</Heading>
      <PostGrid>
        {posts.map((post) => (
          <PostCard key={post.fields.slug} post={post} />
        ))}
      </PostGrid>
    </Layout>
  );
};
