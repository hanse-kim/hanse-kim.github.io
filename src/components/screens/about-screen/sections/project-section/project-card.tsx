import React from 'react';

type ProjectCardProps = {
  title: string;
  subtitle: string;
  descriptions: string[];
  image: React.ReactNode;
  isReverse?: boolean;
};

export const ProjectCard = ({
  title,
  subtitle,
  descriptions,
  image,
  isReverse,
}: ProjectCardProps) => {
  return (
    <div
      className="flex items-start justify-center gap-24 tablet:!flex-col tablet:items-center data-[reverse=true]:flex-row-reverse"
      data-reverse={isReverse}
    >
      {image}
      <div>
        <h3 className="text-24-500">{title}</h3>
        <p className="text-18-500 text-text-muted">{subtitle}</p>
        <ul className="list-disc text-18-400 pl-20">
          {descriptions.map((description, index) => (
            <li key={index} className="mt-8">
              {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
