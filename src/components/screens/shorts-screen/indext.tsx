import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { Heading } from 'src/components/common/heading';
import { ShortsListSection } from './shorts-list-section';

type ShortsScreenProps = {
  shortsList: PostMarkdown[];
};

export const ShortsScreen = ({ shortsList }: ShortsScreenProps) => {
  return (
    <article>
      <Heading>{`Shorts`}</Heading>
      <ShortsListSection shortsList={shortsList} />
    </article>
  );
};
