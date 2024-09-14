import React from 'react';
import { TitledSection } from '../../common/titled-section';
import { ProjectCard } from './project-card';
import { StaticImage } from 'gatsby-plugin-image';

type ProjectSectionProps = {};

export const ProjectSection = ({}: ProjectSectionProps) => {
  return (
    <TitledSection
      title="My works"
      subtitle="on FreeD Soft (2022.07 - Present)"
    >
      <div className="my-48 flex flex-col items-stretch gap-56">
        <ProjectCard
          title="Orderhop"
          subtitle="Next.js • Svelte • Tanstack Query • TailwindCSS • AWS • k8s"
          description="Customizable mobile smart-order solution including DID"
          image={
            <StaticImage
              src="../../assets/orderhop.webp"
              alt="Orderhop"
              layout="constrained"
              width={640}
              className="max-w-full"
            />
          }
        />
        <ProjectCard
          title="Harmony"
          subtitle="Customizable mobile smart-order solution including DID"
          description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          image={
            <StaticImage
              src="../../assets/harmony.webp"
              alt="Harmony"
              layout="constrained"
              width={640}
              className="max-w-full"
            />
          }
          isReverse
        />
        <ProjectCard
          title="Uzzim"
          subtitle="Customizable mobile smart-order solution including DID"
          description="Sed vitae magna consequat, volutpat erat id, pharetra magna."
          image={
            <StaticImage
              src="../../assets/uzzim.webp"
              alt="Uzzim"
              layout="constrained"
              width={640}
              className="max-w-full"
            />
          }
        />
      </div>
    </TitledSection>
  );
};
