import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { MdxNode } from 'src/_libs/types/mdx-node';
import { Ratio } from 'src/components/common/ratio';
import { TagButton } from 'src/components/common/tag-button';

type PostCardProps = {
  post: MdxNode;
  onHover: (postId: string) => void;
  onBlur: (postId: string) => void;
};

export const PostCard = React.memo(
  ({ post, onHover, onBlur }: PostCardProps) => {
    return (
      <Link
        to={post.fields.slug || ''}
        onMouseEnter={() => onHover(post.fields.slug)}
        onMouseLeave={() => onBlur(post.fields.slug)}
        data-id={post.fields.slug}
      >
        <div
          className={`px-20 py-32 overflow-hidden transition-all group rounded-16 bg-bg outline outline-transparent outline-1 hover:outline-blur hover:drop-shadow-post tablet:outline-border`}
        >
          <h2 className="break-all text-32-700 line-clamp-2 text-text">
            {post.frontmatter.title}
          </h2>
          <div className="flex gap-12 mt-12">
            {post.frontmatter.tags.map((tag) => (
              <TagButton key={tag} tag={tag} />
            ))}
          </div>
          <p className="w-full mt-16 text-text-footer text-18-300 line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </Link>
    );
  }
);
