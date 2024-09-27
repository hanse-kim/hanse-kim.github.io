import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { BackButton } from 'src/components/common/back-button';
import { Heading } from 'src/components/common/heading';
import { TagBadgeButton } from 'src/components/common/tag-badge-button';

type PostHeaderProps = PostMarkdown['frontmatter'] & {
  timeToRead: number;
};

export const PostHeader = ({
  title,
  date,
  tags,
  timeToRead,
}: PostHeaderProps) => {
  return (
    <header>
      <BackButton />
      <Heading>{title}</Heading>
      <div className="pl-24 -mt-24 mb-36">
        <div className="text-18-400 text-text-alt">{`${date} · ${timeToRead} min read`}</div>
        <div className="flex gap-12 mt-12">
          {tags.map((tag) => (
            <TagBadgeButton key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </header>
  );
};
