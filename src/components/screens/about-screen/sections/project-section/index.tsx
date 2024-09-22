import React from 'react';
import { RouterUtils } from 'src/_libs/utils/router-utils';
import { usePage } from 'src/contexts/page-context';
import { TitledSection } from '../../common/titled-section';
import { thumbnails } from './assets';
import { ProjectCard } from './project-card';
import { ProjectDetailDrawer } from './project-detail-drawer';

export const projectDetailPopKey = 'pop';

const projects = [
  {
    title: 'Orderhop',
    subtitle: 'Next.js • Svelte • Tanstack Query • TailwindCSS • AWS • k8s',
    description: 'DID와 함께 제공되는 고객 맞춤형 모바일 스마트오더 솔루션',
    image: thumbnails.orderhop,
  },
  {
    title: 'Harmony',
    subtitle: 'Next.js • SWR • Emotion • Serverless Framework',
    description: '물품 등록부터 판매까지 모두 가능한 기업용 커머스 B2B 솔루션',
    image: thumbnails.harmony,
    isReverse: true,
  },
  {
    title: 'Uzzim',
    subtitle: 'Next.js • Tanstack Query • Emotion • AWS Amplify',
    description: '현금과 포인트를 선물로 주고받을 수 있는 이커머스 서비스',
    image: thumbnails.uzzim,
  },
];

type ProjectSectionProps = {};

export const ProjectSection = ({}: ProjectSectionProps) => {
  const { pageProps } = usePage();
  const searchParams = new URLSearchParams(pageProps.location.search);
  const isDetailDrawerOpen =
    projects.findIndex(
      ({ title }) => title === searchParams.get(projectDetailPopKey)
    ) !== -1;

  return (
    <TitledSection title="Works" subtitle="on FreeD Soft (2022.07 - Present)">
      <div className="flex flex-col items-stretch gap-56">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <ProjectDetailDrawer
        isOpen={isDetailDrawerOpen}
        onClose={RouterUtils.back}
      />
    </TitledSection>
  );
};
