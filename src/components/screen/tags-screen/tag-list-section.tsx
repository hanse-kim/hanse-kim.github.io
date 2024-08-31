import { Link } from 'gatsby';
import React, { useMemo } from 'react';
import { Tag } from 'src/_libs/types/tag';

type TagListSectionProps = {
  tags: Tag[];
};

export const TagListSection = ({ tags }: TagListSectionProps) => {
  const { minCount, maxCount } = useMemo(() => {
    let minCount = Number.MAX_SAFE_INTEGER;
    let maxCount = 0;
    tags.forEach((tag) => {
      minCount = Math.min(minCount, tag.totalCount);
      maxCount = Math.max(maxCount, tag.totalCount);
    });
    return { minCount, maxCount };
  }, []);

  const getRelativeFontSize = (count: number) => {
    const factor = (count - minCount) / (maxCount - minCount) + 1;
    return `${factor}em`;
  };

  return (
    <section
      className="px-24 flex flex-wrap justify-center items-center gap-18"
      style={{ fontSize: '18px' }}
    >
      {tags
        .toSorted((a, b) => b.totalCount - a.totalCount)
        .map((tag) => (
          <Link
            to={tag.value}
            className="text-18-400 underline underline-offset-4"
            style={{ fontSize: getRelativeFontSize(tag.totalCount) }}
          >
            {`${tag.value} (${tag.totalCount})`}
          </Link>
        ))}
    </section>
  );
};
