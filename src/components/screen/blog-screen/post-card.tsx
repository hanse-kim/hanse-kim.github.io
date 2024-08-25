import { Link } from 'gatsby';
import React from 'react';
import { MdxNode } from 'src/_libs/types/mdx-node';
import { Ratio } from 'src/components/common/ratio';

type PostCardProps = {
  post: MdxNode;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link to={post.fields.slug || ''}>
      <Ratio
        className="p-20 overflow-hidden group rounded-16 outline outline-border outline-1 hover:outline-text hover:bg-bg-footer transition-outline"
        ratio={4 / 5}
      >
        <h2 className="break-all text-32-800 line-clamp-2">
          {post.frontmatter.title}
        </h2>
        <p className="w-full mt-16 text-text-footer text-18-300 line-clamp-2">
          {post.excerpt}
        </p>
      </Ratio>
    </Link>
  );
};
