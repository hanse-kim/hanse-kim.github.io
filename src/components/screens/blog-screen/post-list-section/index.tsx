import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { PostCard } from './post-card';

type PostListProps = {
  posts: PostMarkdown[];
};

export const PostListSection = ({ posts }: PostListProps) => {
  return (
    <section className="grid grid-cols-3 p-24 desktop:gap-8 gap-x-20 gap-y-32 tablet:grid-cols-2 mobile:flex mobile:flex-col mobile:items-stretch group/post-list">
      {posts.map((post) => (
        <PostCard key={post.fields.slug} post={post} />
      ))}
    </section>
  );
};
