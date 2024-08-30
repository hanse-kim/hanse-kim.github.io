import React from 'react';
import { routes } from 'src/_libs/constants/routes';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { Heading } from 'src/components/common/heading';
import { TagButton } from 'src/components/common/tag-button';
import { NavButton } from 'src/components/layout/header/nav-button';

type PostScreenHeaderProps = MarkdownRemark['frontmatter'] & {};

export const PostScreenHeader = ({
  title,
  date,
  tags,
}: PostScreenHeaderProps) => {
  return (
    <header>
      <div className="ml-24 -mb-24 mt-36 w-fit">
        <NavButton to={routes.blog}>{'< 이전 페이지로'}</NavButton>
      </div>
      <Heading>{title}</Heading>
      <div className="pl-24 -mt-24 mb-36">
        <div className="text-18-400 text-text-footer">{`작성일: ${date}`}</div>
        <div className="flex gap-12 mt-12">
          {tags.map((tag) => (
            <TagButton key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </header>
  );
};
