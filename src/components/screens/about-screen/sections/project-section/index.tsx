import React from 'react';
import { RouterUtils } from 'src/_libs/utils/router-utils';
import { usePage } from 'src/contexts/page-context';
import { useProjects } from 'src/hooks/use-projects';
import { TitledSection } from '../../common/titled-section';
import { thumbnails } from './assets';
import { ProjectCard } from './project-card';
import { ProjectDetailDrawer } from './project-detail-drawer';

export const projectDetailPopKey = 'pop';

type ProjectSectionProps = {};

export const ProjectSection = ({}: ProjectSectionProps) => {
  const { projects } = useProjects();
  const { pageProps } = usePage();
  const searchParams = new URLSearchParams(pageProps.location.search);
  const pop = searchParams.get(projectDetailPopKey) || '';
  const poppedProject = projects.find((project) => project.fields.name === pop);

  const isDetailDrawerOpen = !!poppedProject;

  return (
    <TitledSection title="Works" subtitle="on FreeD Soft (2022.07 - Present)">
      <div className="flex flex-col items-stretch gap-56">
        {Object.entries(projects).map(([id, project], index) => (
          <ProjectCard
            key={index}
            {...project.frontmatter}
            image={thumbnails[project.fields.name]}
            id={id}
          />
        ))}
      </div>
      {poppedProject && (
        <ProjectDetailDrawer
          isOpen={isDetailDrawerOpen}
          onClose={RouterUtils.back}
          {...poppedProject.frontmatter}
        />
      )}
    </TitledSection>
  );
};
