import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { ShortsCard } from './shorts-card';

type ShortsListSectionProps = {
  shortsList: PostMarkdown[];
};

export const ShortsListSection = ({ shortsList }: ShortsListSectionProps) => {
  return (
    <section className="p-24 flex flex-col items-stretch gap-24">
      {shortsList.map((shorts) => (
        <ShortsCard shorts={shorts} />
      ))}
    </section>
  );
};
