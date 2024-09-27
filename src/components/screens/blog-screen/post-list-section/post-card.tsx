import { Link } from 'gatsby';
import React from 'react';
import { linkStates } from 'src/_libs/constants/link-states';
import { routes } from 'src/_libs/constants/routes';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { CustomImage } from 'src/components/common/custom-image';
import { TagBadgeButton } from 'src/components/common/tag-badge-button';

type PostCardProps = {
  post: PostMarkdown;
};

export const PostCard = React.memo(({ post }: PostCardProps) => {
  return (
    <Link to={routes.blogPost(post.fields.slug)} state={linkStates.toLower}>
      <div
        className={`px-20 py-32 overflow-hidden group rounded-16 bg-bg outline outline-transparent outline-1 desktop:hover:outline-bg-alt desktop:hover:drop-shadow-post tablet:outline-border hover:!opacity-100 hover:!scale-100 desktop:group-hover/post-list:opacity-40 desktop:group-hover/post-list:scale-95 transition-all duration-[250ms]`}
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
        <div className="mt-8 text-text-muted">{`${post.frontmatter.date} · ${post.timeToRead} min read`}</div>
        <div className="flex gap-12 mt-12">
          {post.frontmatter.tags.map((tag) => (
            <TagBadgeButton key={tag} tag={tag} />
          ))}
        </div>
        <p className="w-full mt-16 text-text-alt text-18-300 line-clamp-2 break-all">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
});
