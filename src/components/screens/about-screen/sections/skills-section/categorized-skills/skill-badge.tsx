import React from 'react';
import { SkillInfo } from '..';

type SkillBadgeProps = SkillInfo & {};

export const SkillBadge = ({ label, logo }: SkillBadgeProps) => {
  const isInvert = ['Next.js'].includes(label);

  return (
    <span className="px-16 py-8 flex items-center gap-12 bg-text rounded-8 group dark:bg-bg border-solid border-1 border-text dark:border-text-muted select-none">
      <div
        className="max-w-32 max-h-32 desktop:grayscale desktop:brightness-125 desktop:data-[invert=true]:invert desktop:group-hover:invert-0 desktop:group-hover:brightness-100 desktop:group-hover:grayscale-0 transition-all"
        data-invert={isInvert}
      >
        {logo}
      </div>
      <p className="text-18-400 text-bg dark:text-text">{label}</p>
    </span>
  );
};
