import { Link } from 'gatsby';
import React from 'react';
import { linkStates } from 'src/_libs/constants/link-states';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { CustomImage } from 'src/components/common/custom-image';
import { TagButton } from 'src/components/common/tag-button';

type PostCardProps = {
  post: MarkdownRemark;
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
        state={linkStates.toLower}
      >
        <div
          className={`px-20 py-32 overflow-hidden group rounded-16 bg-bg outline outline-transparent outline-1 desktop:hover:outline-blur desktop:hover:drop-shadow-post tablet:outline-border`}
        >
          {post.frontmatter.thumbnail?.publicURL && (
            <CustomImage
              src={post.frontmatter.thumbnail?.publicURL}
              alt={post.frontmatter.title}
              className="border-solid rounded-8 border-1 border-border mb-18"
            />
          )}
          <h2 className="break-all text-28-700 line-clamp-2">
            {post.frontmatter.title}
          </h2>
          <div className="mt-8 text-text-quote">{`${post.frontmatter.date} · ${post.timeToRead} min read`}</div>
          <div className="flex gap-12 mt-12">
            {post.frontmatter.tags.map((tag) => (
              <TagButton key={tag} tag={tag} />
            ))}
          </div>
          <p className="w-full mt-16 text-text-footer text-18-300 line-clamp-2 break-all">
            {post.excerpt}
          </p>
        </div>
      </Link>
    );
  }
);
