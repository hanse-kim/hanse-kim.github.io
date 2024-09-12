import React from 'react';
import { ContactLink } from './contact-link';

type IntroduceProps = {};

export const Introduce = ({}: IntroduceProps) => {
  return (
    <section className="flex flex-col gap-24 tablet:items-center">
      <div className="flex flex-col items-start gap-8 tablet:items-center">
        <h2 className="text-28-700">Hi, I'm Hanse 🐻</h2>
        <div className="flex gap-18">
          <ContactLink
            url="mailto:hansekim.dev@gmail.com"
            label="Email"
            iconName="mail"
          />
          <ContactLink
            url="https://github.com/hanse-kim"
            label="Github"
            iconName="github"
          />
        </div>
      </div>
      <div className="text-18-400 hyphens-auto flex flex-col gap-8" lang="en">
        <p>I'm a Frontend Developer working at a startup.</p>
        <p>
          This blog shares the challenges faced during development and how they
          were solved 🙂
        </p>
      </div>
      {/* <button className="text-18-500 text-text-alt text-start">
        {'View More ->'}
      </button> */}
    </section>
  );
};
