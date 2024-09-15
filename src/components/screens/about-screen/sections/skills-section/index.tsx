import React from 'react';
import { TitledSection } from '../../common/titled-section';
import { logos } from './assets';
import { CategorizedSkills } from './categorized-skills';

export type SkillInfo = {
  label: string;
  logo: React.ReactElement;
  descriptions: string[];
};

const skills: Record<string, SkillInfo[]> = {
  Language: [
    {
      label: 'JavaScript',
      logo: logos.javascript,
      descriptions: [
        'asdafwqgewq wekfgpo sfkgop korek opgkero',
        'asdafwqgewq wekfgpo sfkgop korek opgkero',
        'asdafwqgewq wekfgpo sfkgop korek opgkero',
      ],
    },
    {
      label: 'TypeScript',
      logo: logos.typescript,
      descriptions: [],
    },
  ],
  'Framework & Library': [
    {
      label: 'React',
      logo: logos.react,
      descriptions: [],
    },
    {
      label: 'Next.js',
      logo: logos.nextjs,
      descriptions: [],
    },
    {
      label: 'Gatsby',
      logo: logos.gatsby,
      descriptions: [],
    },
    {
      label: 'Svelte',
      logo: logos.svelte,
      descriptions: [],
    },
    {
      label: 'TanStack Query',
      logo: logos.tanstack,
      descriptions: [],
    },
    {
      label: 'Tailwind CSS',
      logo: logos.tailwindcss,
      descriptions: [],
    },
    {
      label: 'Emotion',
      logo: logos.emotion,
      descriptions: [],
    },
  ],
  Deployment: [
    {
      label: 'Azure DevOps',
      logo: logos.azure,
      descriptions: [],
    },
    {
      label: 'Github',
      logo: logos.github,
      descriptions: [],
    },
    {
      label: 'AWS',
      logo: logos.aws,
      descriptions: [],
    },
  ],
  Tools: [
    {
      label: 'Figma',
      logo: logos.figma,
      descriptions: [],
    },
    {
      label: 'VS Code',
      logo: logos.vscode,
      descriptions: [],
    },
  ],
};

type SkillsSectionProps = {};

export const SkillsSection = ({}: SkillsSectionProps) => {
  return (
    <TitledSection title="Skills">
      <div className="flex flex-col items-stretch gap-24">
        {Object.entries(skills).map(([title, skills], index) => (
          <CategorizedSkills key={index} title={title} skills={skills} />
        ))}
      </div>
    </TitledSection>
  );
};
