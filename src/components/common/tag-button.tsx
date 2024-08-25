import React from 'react';

type TagButtonProps = {
  tag: string;
};

export const TagButton = ({ tag }: TagButtonProps) => {
  return (
    <button className="px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 hover:text-bg hover:bg-main">
      {tag}
    </button>
  );
};
