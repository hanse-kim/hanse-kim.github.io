import React, { useCallback, useState } from 'react';
import { MdxNode } from 'src/_libs/types/mdx-node';
import { PostCard } from './post-card';

type PostListProps = {
  posts: MdxNode[];
};

export const PostList = ({ posts }: PostListProps) => {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  const handleBlurPost = useCallback(() => {
    setHoveredPost(null);
  }, []);

  return (
    <>
      <style>{`#post-list a {opacity: 1; transform: translateY(0px) scale(1); transition: opacity 0.4s, transform 0.4s;} #post-list:hover a:not([data-id="${hoveredPost}"]) {opacity: 0.4; transform: translateY(12px) scale(0.98);}`}</style>
      <div
        id="post-list"
        className="grid grid-cols-3 p-24 gap-x-20 gap-y-32 tablet:grid-cols-2 mobile:flex mobile:flex-col mobile:items-stretch"
      >
        {posts.map((post) => (
          <PostCard
            key={post.fields.slug}
            post={post}
            onHover={setHoveredPost}
            onBlur={handleBlurPost}
          />
        ))}
      </div>
    </>
  );
};
