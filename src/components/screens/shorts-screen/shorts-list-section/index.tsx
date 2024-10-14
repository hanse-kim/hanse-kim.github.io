import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { ShortsCard } from './shorts-card';

type ShortsListSectionProps = {
  shortsList: PostMarkdown[];
  search: string;
};

export const ShortsListSection = ({ shortsList, search }: ShortsListSectionProps) => {
  return (
    <section className="flex flex-col items-stretch gap-24 p-24">
      {shortsList.map((shorts) => (
        <ShortsCard key={shorts.frontmatter.title} shorts={shorts} search={search} />
      ))}
    </section>
  );
};
