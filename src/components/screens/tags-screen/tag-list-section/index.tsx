import { m } from 'framer-motion';
import { Link } from 'gatsby';
import React, { useMemo } from 'react';
import { linkStates } from 'src/_libs/constants/link-states';
import { routes } from 'src/_libs/constants/routes';
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
    const relativeFontSize = (count - minCount) / (maxCount - minCount) + 1;
    return `${relativeFontSize}em`;
  };

  return (
    <section
      className="px-24 flex flex-wrap justify-center items-center gap-18"
      style={{ fontSize: '16px' }}
    >
      {tags
        .toSorted((a, b) => b.totalCount - a.totalCount)
        .map((tag) => (
          <m.div key={tag.value} whileHover={{ scale: 1.05 }}>
            <Link
              to={routes.tag(tag.value)}
              className="text-18-400 underline underline-offset-[0.2em] drop-shadow-transparent transition-shadow desktop:hover:drop-shadow-text"
              style={{ fontSize: getRelativeFontSize(tag.totalCount) }}
              state={linkStates.toLower}
            >
              {`${tag.value} (${tag.totalCount})`}
            </Link>
          </m.div>
        ))}
    </section>
  );
};
