import React from 'react';
import { TitledSection } from '../_common/titled-section';
import { logos } from './_assets';
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
        'DOM 조작, 비동기 처리, 이벤트 처리와 같은 자바스크립트 기본 기능에 대해 이해하고 이를 활용할 수 있습니다.',
        'destructuring, spread/rest 연산자, 화살표 함수 등 ES6 문법에 익숙하며 효율적인 코드 작성이 가능합니다.',
        'map, filter, reduce와 같은 고차 함수를 능숙하게 다룰 수 있습니다.',
      ],
    },
    {
      label: 'TypeScript',
      logo: logos.typescript,
      descriptions: [
        '견고한 타입 시스템을 바탕으로 백엔드 스키마에 따라 적절한 도메인 기반 타입을 작성할 수 있습니다.',
        'generic type을 활용하여 **유연하고 재사용 가능**한 타입 및 React component를 개발할 수 있습니다.',
        '타입 가드를 통해 런타임 에러를 방지하고 type-safety한 로직을 작성할 수 있습니다.',
      ],
    },
  ],
  'Framework & Library': [
    {
      label: 'React',
      logo: logos.react,
      descriptions: [
        'useMemo, useCallback, useRef 등의 hook과 memo, forwardRef 등의 API를 적절하게 사용하여 최적화된 React App을 개발할 수 있습니다.',
        'Context API, createPortal API, HOC, compound component 등 고급 기능이나 패턴을 필요하에 따라 적절하게 활용할 수 있습니다.',
        'react-hook-form과 zod를 활용하여 견고한 form validation을 구성한 경험이 있습니다.',
      ],
    },
    {
      label: 'Next.js',
      logo: logos.nextjs,
      descriptions: [
        'getServerSideProps를 활용해 상품 페이지별로 동적인 OG meta tag를 삽입하여 SEO를 최적화하고, 소셜 미디어 공유 시 미리보기 정보 제공 및 검색엔진에서 상위에 노출되도록 개선한 경험이 있습니다.',
        'server action, server component, app routing 등 Next.js 최신 버전의 server-side 기능을 활용해 웹 어플리케이션을 구현한 경험이 있습니다.',
        'on-demand SSR, SSG, ISR 등 다양한 방식의 SSR에 대해 이해하고 이를 필요에 따라 선택할 수 있습니다.',
      ],
    },
    {
      label: 'Gatsby',
      logo: logos.gatsby,
      descriptions: [
        'Markdown 파일을 기반으로 블로그 콘텐츠를 관리하고, gatsby-transformer-remark를 사용해 효율적인 페이지 생성을 구현했습니다.',
        'wrapPageElement을 통해 공통 레이아웃 컴포넌트를 적용하고, 중복 코드를 줄여 유지보수성을 향상시켰습니다.',
        'gatsby-plugin-image 플러그인을 사용해 이미지 최적화를 수행하여 사이트 속도를 향상시켰습니다.',
      ],
    },
    {
      label: 'Svelte',
      logo: logos.svelte,
      descriptions: [
        'React와 비교해 Svelte의 장점과 특징을 이해하고, 프로젝트 요구 사항에 따라 적절히 선택할 수 있습니다.',
        '실무에서 Vite 기반의 프로젝트를 세팅하여 **CSR 웹 애플리케이션**을 개발하고 성공적으로 런칭한 경험이 있습니다.',
        'local/session storage와 자동으로 연동, 초기에 데이터를 fetch하고 일정 주기로 refetch 등 **편리한 기능을 제공하는 custom store를 개발**해 생산성을 높인 경험이 있습니다.',
      ],
    },
    {
      label: 'TanStack Query',
      logo: logos.tanstack,
      descriptions: [
        '견고한 컨벤션을 통해 일관적이고 재사용성 높은 query/mutation custom hook을 작성해 팀의 생산성을 크게 향상시킨 경험이 있습니다.',
        '도메인별로 적절한 staleTime을 설정하여 효율적인 캐싱 전략을 구현하고, 높은 사용자 경험을 실현한 경험이 있습니다.',
        'select 옵션을 활용해 반복되는 파싱이나 변환 작업을 처리하여 코드 가독성과 유지보수성을 높인 경험이 있습니다.',
      ],
    },
    {
      label: 'Tailwind CSS',
      logo: logos.tailwindcss,
      descriptions: [
        'CSS 변수와 자체 개발한 플러그인을 활용해 동일한 키값으로 다양한 테마와 라이드모드/다크모드 색상을 사용할 수 있는 색상 설정 기능을 구현한 경험이 있습니다.',
        'Tailwind 설정을 효율적으로 관리하기 위해 tailwind.config 파일의 세부 설정을 별도의 파일로 분리하여 프로젝트 유지보수성을 향상시킨 경험이 있습니다.',
      ],
    },
    {
      label: 'Emotion',
      logo: logos.emotion,
      descriptions: [
        'Emotion의 styled와 css 함수를 사용하여 모듈화된 스타일링 시스템을 구축했습니다.',
        'layout, spacing, flex-box, grid 등 다양한 종류의 스타일을 유연하게 적용할 수 있는, 디자인 시스템을 기반으로 쉽게 커스터마이징 가능한 UI 컴포넌트를 개발해 팀의 생산성을 크게 향상시켰습니다.',
      ],
    },
  ],
  Deployment: [
    {
      label: 'Azure DevOps',
      logo: logos.azure,
      descriptions: [
        'Azure Repos를 사용해 프로젝트를 세팅하고, 브랜치 전략이나 코드 리뷰 정책 등 적절한 repository policy를 설정할 수 있습니다.',
        'Azure Pipelines를 사용해 CI/CD 과정을 자동화하는 파이프라인을 구성하고, 안정적인 배포 프로세스를 관리한 경험이 있습니다.',
        'Azure Boards를 사용해 Feature 단위의 티켓을 관리하여 성공적으로 업무를 완수한 경험이 있습니다.',
      ],
    },
    {
      label: 'Github',
      logo: logos.github,
      descriptions: [
        'Github Actions를 사용해 NPM 및 Github Packages에 라이브러리를 배포하는 과정을 자동화한 경험이 있습니다.',
        '실무에서 발견한 오픈소스 라이브러리의 버그를 수정해 기여하고, 해당 수정 사항이 최신 릴리즈에 반영된 경험이 있습니다.',
      ],
    },
    {
      label: 'AWS',
      logo: logos.aws,
      descriptions: [
        'S3와 CloudFront를 사용한 정적 웹 사이트 배포로 사이트 속도를 개선하여 사용자 경험을 증대시킨 경험이 있습니다.',
        'CloudFront에 Lambda@Edge를 적용함으로써 정적 리소스 요청에 대해 동적인 응답을 주도록 처리, 사용자 맞춤형 컨텐츠를 제공할 수 있습니다.',
        'SST와 같은 도구를 활용하여 서버리스 웹 애플리케이션을 배포하고 인프라 관리 및 배포 과정을 자동화한 경험이 있습니다.',
      ],
    },
  ],
  Tools: [
    {
      label: 'VS Code',
      logo: logos.vscode,
      descriptions: [
        '린터나 코드 하이라이터, 유틸리티 등의 확장 기능을 필요에 따라 적용하여 생산성을 높이고 있습니다.',
        'React component를 작성하는 code snippet을 만들고 공유하여 팀의 생산성을 향상시킨 경험이 있습니다.',
        'multi-cursor 기능을 활용해 반복 작업을 최소화하고 효율적으로 코드를 작성합니다.',
      ],
    },
    {
      label: 'Figma',
      logo: logos.figma,
      descriptions: [
        '간단한 개인 프로젝트에서 Figma로 UI/UX를 직접 설계하고, 이를 바탕으로 웹 애플리케이션을 완성한 경험이 있습니다.',
        '오토 레이아웃, 컴포넌트와 바리에이션, 스타일과 변수 등 피그마 기능에 대한 지식을 바탕으로 디자이너와 원활한 소통이 가능합니다.',
      ],
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
