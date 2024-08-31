import React from 'react';
import { Tag } from 'src/_libs/types/tag';
import { Layout } from 'src/components/layout';
import { TagListSection } from './tag-list-section';
import { Heading } from 'src/components/common/heading';

type TagsScreenProps = {
  tags: Tag[];
};

export const TagsScreen = ({ tags }: TagsScreenProps) => {
  return (
    <Layout>
      <Heading>Tags</Heading>
      <TagListSection tags={tags} />
    </Layout>
  );
};
