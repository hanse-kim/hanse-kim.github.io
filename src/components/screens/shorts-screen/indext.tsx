import React, { ChangeEvent, useCallback, useState } from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { optimizeUtils } from 'src/_libs/utils/optimize-utils';
import { Heading } from 'src/components/common/heading';
import { SearchInput } from 'src/components/common/search-input';
import { ShortsListSection } from './shorts-list-section';

type ShortsScreenProps = {
  shortsList: PostMarkdown[];
};

export const ShortsScreen = ({ shortsList }: ShortsScreenProps) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = useCallback(
    optimizeUtils.throttle((e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    }),
    []
  );

  return (
    <article>
      <Heading
        rightSideElement={<SearchInput onChange={handleSearchChange} />}
      >{`Shorts`}</Heading>
      <ShortsListSection shortsList={shortsList} />
    </article>
  );
};
