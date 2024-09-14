import React from 'react';
import { ContactLink } from './contact-link';

const contents = {
  title: "Hi, I'm Hanse 🐻",
  links: [
    {
      url: 'mailto:hansekim.dev@gmail.com',
      label: 'Email',
      iconName: 'mail',
    },
    {
      url: 'https://github.com/hanse-kim',
      label: 'Github',
      iconName: 'github',
    },
  ],
  descriptions: [
    '3년차 프론트엔드 개발자 김한슬입니다.',
    '스타트업에 근무하며 다수의 프로젝트에서 핵심적인 역할을 맡고 있으며, 소통을 통해 팀의 생산성을 향상시키고 있습니다.',
  ],
} as const;

type IntroduceProps = {};

export const Introduce = ({}: IntroduceProps) => {
  return (
    <section className="flex flex-col gap-24 tablet:items-center">
      <div className="flex flex-col items-start gap-8 tablet:items-center">
        <h2 className="text-28-700">{contents.title}</h2>
        <div className="flex gap-18">
          {contents.links.map((link, index) => (
            <ContactLink key={index} {...link} />
          ))}
        </div>
      </div>
      <div className="text-18-400 hyphens-auto flex flex-col gap-4" lang="en">
        {contents.descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </section>
  );
};
