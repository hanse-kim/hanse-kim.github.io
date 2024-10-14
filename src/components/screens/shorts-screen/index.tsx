import React, { ChangeEvent, useCallback, useState } from 'react';
import { CacheService } from 'src/_libs/services/cache-service';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { optimizeUtils } from 'src/_libs/utils/optimize-utils';
import { searchUtils } from 'src/_libs/utils/search-utils';
import { Heading } from 'src/components/common/heading';
import { SearchInput } from 'src/components/common/search-input';
import { ShortsListSection } from './shorts-list-section';

const searchCache = new CacheService<PostMarkdown[]>({ maxCacheSize: 100 });

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

  const searchedShortsList = (() => {
    const normalizedSearch = searchUtils.normalize(search);
    const cached = searchCache.get(normalizedSearch);
    if (cached) {
      return cached;
    }

    const searched = shortsList.filter((shorts) => {
      if (!normalizedSearch) {
        return true;
      }

      return (
        searchUtils
          .normalize(shorts.frontmatter.title)
          .includes(normalizedSearch) ||
        searchUtils.normalize(shorts.html).includes(normalizedSearch)
      );
    });
    searchCache.set(normalizedSearch, searched);

    return searched;
  })();

  return (
    <article>
      <Heading
        rightSideElement={<SearchInput onChange={handleSearchChange} />}
      >{`Shorts`}</Heading>
      <ShortsListSection shortsList={searchedShortsList} search={search} />
    </article>
  );
};
