import React from 'react';
import { SkillInfo } from '..';
import { SkillBadge } from './skill-badge';

type CategorizedSkillsProps = {
  title: string;
  skills: SkillInfo[];
};

export const CategorizedSkills = ({
  title,
  skills,
}: CategorizedSkillsProps) => {
  return (
    <div className="">
      <h3 className="text-20-700">{title}</h3>
      <div className="flex flex-wrap gap-y-8 gap-x-12 mt-8 relative">
        {skills.map((skillInfo, index) => (
          <SkillBadge key={index} {...skillInfo} />
        ))}
      </div>
    </div>
  );
};
