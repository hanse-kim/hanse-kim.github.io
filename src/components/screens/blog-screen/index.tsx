import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { Heading } from 'src/components/common/heading';
import { PostListSection } from './post-list-section';

type BlogScreenProps = {
  posts: PostMarkdown[];
};

export const BlogScreen = ({ posts }: BlogScreenProps) => {
  return (
    <>
      <Heading>{`Blog (${posts.length} posts)`}</Heading>
      <PostListSection posts={posts} />
    </>
  );
};
