import { motion } from 'framer-motion';
import React, { MouseEventHandler } from 'react';
import { linkStates } from 'src/_libs/constants/link-states';
import { routes } from 'src/_libs/constants/routes';
import { RouterUtils } from 'src/_libs/utils/router.utils';

type TagButtonProps = {
  tag: string;
};

export const TagButton = ({ tag }: TagButtonProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    RouterUtils.push(routes.tag(tag), { state: linkStates.toLower });
  };

  return (
    <motion.div whileHover={{ scale: 1.15 }}>
      <button
        className="px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main"
        onClick={handleClick}
      >
        {tag}
      </button>
    </motion.div>
  );
};
