import { Link } from 'gatsby';
import React from 'react';
import { linkStates } from 'src/_libs/constants/link-states';
import { routes } from 'src/_libs/constants/routes';

type TagButtonProps = {
  tag: string;
};

export const TagButton = ({ tag }: TagButtonProps) => {
  return (
    <Link
      to={routes.tag(tag)}
      className="px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main"
      onClick={(e) => e.stopPropagation()}
      state={linkStates.toLower}
    >
      {tag}
    </Link>
  );
};
