import React from 'react';
import { TitledSection } from '../../common/titled-section';
import { ProjectCard } from './project-card';
import { StaticImage } from 'gatsby-plugin-image';

type ProjectSectionProps = {};

export const ProjectSection = ({}: ProjectSectionProps) => {
  return (
    <TitledSection title="My works" subtitle="on FreeD Soft">
      <div className="my-48 flex flex-col items-stretch gap-72">
        <ProjectCard
          title="Orderhop"
          subtitle="Customizable mobile smart-order solution including DID"
          descriptions={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Quisque vel urna nec arcu interdum ullamcorper.',
            'Sed vitae magna consequat, volutpat erat id, pharetra magna.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          ]}
          image={
            <StaticImage
              src="../../assets/orderhop.webp"
              alt="Orderhop"
              layout="constrained"
              width={480}
              className="max-w-full"
            />
          }
        />
        <ProjectCard
          title="Harmony"
          subtitle="Customizable mobile smart-order solution including DID"
          descriptions={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Quisque vel urna nec arcu interdum ullamcorper.',
            'Sed vitae magna consequat, volutpat erat id, pharetra magna.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          ]}
          image={
            <StaticImage
              src="../../assets/harmony.webp"
              alt="Harmony"
              layout="constrained"
              width={480}
              className="max-w-full"
            />
          }
          isReverse
        />
        <ProjectCard
          title="Uzzim"
          subtitle="Customizable mobile smart-order solution including DID"
          descriptions={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Quisque vel urna nec arcu interdum ullamcorper.',
            'Sed vitae magna consequat, volutpat erat id, pharetra magna.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          ]}
          image={
            <StaticImage
              src="../../assets/uzzim.webp"
              alt="Uzzim"
              layout="constrained"
              width={480}
              className="max-w-full"
            />
          }
        />
      </div>
    </TitledSection>
  );
};
