import React from 'react';
import { Tag } from 'src/_libs/types/tag';
import { Heading } from 'src/components/common/heading';
import { TagListSection } from './tag-list-section';

type TagsScreenProps = {
  tags: Tag[];
};

export const TagsScreen = ({ tags }: TagsScreenProps) => {
  return (
    <article>
      <Heading>Tags</Heading>
      <TagListSection tags={tags} />
    </article>
  );
};
