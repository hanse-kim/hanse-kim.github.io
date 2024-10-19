import { match } from 'assert';
import { join } from 'path';
import React from 'react';
import { CacheService } from 'src/_libs/services/cache-service';
import { searchUtils } from 'src/_libs/utils/search-utils';

const cache = new CacheService<React.ReactNode>({ maxCacheSize: 200 });
const cacheKeyDivider = '___DIVIDER___';

type HighlightTextProps = {
  className?: string;
  search?: string;
  text: string;
};

export const HighlightText = ({
  className,
  search = '',
  text,
}: HighlightTextProps) => {
  const normalizedSearch = searchUtils.normalize(search);

  if (!normalizedSearch) {
    return (
      <span className={className} dangerouslySetInnerHTML={{ __html: text }} />
    );
  }

  const cacheKey = `${text}${cacheKeyDivider}${search}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const regex = new RegExp(`(${normalizedSearch})`, 'gi');
  const splitHtml = text.split(/(<[^>]*>)/g);

  const highlightedText = splitHtml
    .map((part) => {
      if (part.match(/^<[^>]*>$/)) {
        return part;
      }
      return part.replace(regex, '<mark class="bg-search-highlight dark:text-bg">$1</mark>');
    })
    .join('');

  const element = (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: highlightedText }}
    />
  );

  cache.set(cacheKey, element);

  return element;
};
