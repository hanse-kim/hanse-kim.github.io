import React from 'react';
import { TitledSection } from '../../common/titled-section';
import { logos } from './assets';
import { CategorizedSkills } from './categorized-skills';

export type SkillInfo = {
  label: string;
  logo: React.ReactElement;
};

const skills: Record<string, SkillInfo[]> = {
  Language: [
    { label: 'JavaScript', logo: logos.javascript },
    { label: 'TypeScript', logo: logos.typescript },
  ],
  'Framework & Library': [
    { label: 'React', logo: logos.react },
    { label: 'Next.js', logo: logos.nextjs },
    { label: 'Gatsby', logo: logos.gatsby },
    { label: 'Svelte', logo: logos.svelte },
    { label: 'TanStack Query', logo: logos.tanstack },
    { label: 'Tailwind CSS', logo: logos.tailwindcss },
    { label: 'Emotion', logo: logos.emotion },
  ],
  Deployment: [
    { label: 'Azure DevOps', logo: logos.azure },
    { label: 'Github', logo: logos.github },
    { label: 'AWS', logo: logos.aws },
  ],
  Tools: [
    { label: 'Figma', logo: logos.figma },
    { label: 'VS Code', logo: logos.vscode },
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
