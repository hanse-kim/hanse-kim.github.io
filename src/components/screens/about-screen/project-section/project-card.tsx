import React from 'react';
import { ProjectFrontmatter } from 'src/_libs/types/project-markdown';
import { NavButton } from 'src/components/layout/header/nav-button';

const popKey = 'pop';

type ProjectCardProps = ProjectFrontmatter & {
  id: string;
  image: React.ReactElement;
};

export const ProjectCard = ({
  id,
  title,
  subtitle,
  description,
  image,
  isReverse,
}: ProjectCardProps) => {
  return (
    <div
      className="flex items-center justify-center gap-24 tablet:!flex-col tablet:gap-16 data-[reverse=true]:flex-row-reverse"
      data-reverse={isReverse}
    >
      <div className="shrink-0 max-w-[480px]">{image}</div>
      <div>
        <h3 className="text-28-700">{title}</h3>
        <p className="mt-4 text-18-40">"{description}"</p>
        <p className="mb-12 text-16-400 text-text-muted">{subtitle}</p>
        <NavButton to={`?${popKey}=${id}`}>{'View Details ->'}</NavButton>
      </div>
    </div>
  );
};
