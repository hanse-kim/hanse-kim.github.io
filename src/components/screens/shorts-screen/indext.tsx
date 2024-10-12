import React from 'react';
import { Heading } from 'src/components/common/heading';
import { ShortsListSection } from './shorts-list-section';

type ShortsScreenProps = {};

export const ShortsScreen = ({}: ShortsScreenProps) => {
  return (
    <article>
      <Heading>{`Shorts`}</Heading>
      <ShortsListSection />
    </article>
  );
};
