import React from 'react';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { BackButton } from 'src/components/common/back-button';
import { Heading } from 'src/components/common/heading';
import { TagButton } from 'src/components/common/tag-button';

type PostHeaderProps = MarkdownRemark['frontmatter'] & {
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
        <div className="text-18-400 text-text-footer">{`${date} · ${timeToRead} min read`}</div>
        <div className="flex gap-12 mt-12">
          {tags.map((tag) => (
            <TagButton key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </header>
  );
};
