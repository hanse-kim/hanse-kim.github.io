import React from 'react';
import { Tag } from 'src/_libs/types/tag';
import { Heading } from 'src/components/common/heading';
import { TagListSection } from './sections/tag-list-section';

type TagsScreenProps = {
  tags: Tag[];
};

export const TagsScreen = ({ tags }: TagsScreenProps) => {
  return (
    <>
      <Heading>Tags</Heading>
      <TagListSection tags={tags} />
    </>
  );
};
