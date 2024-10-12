import React from 'react';
import { ShortsCard } from './shorts-card';

type ShortsListSectionProps = {};

export const ShortsListSection = ({}: ShortsListSectionProps) => {
  return (
    <section className="p-24 flex flex-col items-stretch gap-24">
      <ShortsCard />
      <ShortsCard />
      <ShortsCard />
    </section>
  );
};
