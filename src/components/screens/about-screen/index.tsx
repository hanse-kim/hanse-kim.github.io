import React from 'react';
import { ProfileSection } from './sections/profile-section';

type AboutScreenProps = {};

export const AboutScreen = ({}: AboutScreenProps) => {
  return (
    <article className="px-24 py-48 flex flex-col items-stretch gap-56">
      <ProfileSection />
      {/* <ProjectSection /> */}
    </article>
  );
};
