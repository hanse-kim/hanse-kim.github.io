import React, { useState } from 'react';
import { NavButton } from 'src/components/layout/header/nav-button';
import { ProjectDetailDrawer } from './project-detail-drawer';

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: React.ReactNode;
  isReverse?: boolean;
};

export const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  isReverse,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex items-center justify-center gap-24 tablet:!flex-col tablet:gap-16 data-[reverse=true]:flex-row-reverse"
      data-reverse={isReverse}
    >
      <div className="shrink-0 max-w-[480px]">{image}</div>
      <div>
        <h3 className="text-24-500">{title}</h3>
        <p className="text-18-400">{description}</p>
        <p className="text-16-400 text-text-muted  mb-12">{subtitle}</p>
        <button onClick={() => setIsOpen(true)}>{'View Details ->'}</button>
      </div>
      <ProjectDetailDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {image}
      </ProjectDetailDrawer>
    </div>
  );
};
