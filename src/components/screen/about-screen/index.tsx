import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { useGithubProfile } from 'src/stores/github-profile-store';
import { Avatar } from './avatar';
import { ContactLink } from './context-link';
import { Introduce } from './introduce';

type AboutScreenProps = {};

export const AboutScreen = ({}: AboutScreenProps) => {
  const githubProfile = useGithubProfile();
  const siteMetadata = useSiteMetadata();

  if (githubProfile.isLoading) {
    return null;
  }

  if (githubProfile.isError) {
    return null;
  }

  return (
    <article className="px-24 py-48 flex flex-col items-stretch gap-56">
      <div className="flex items-center justify-center gap-24 mx-auto tablet:gap-12 tablet:flex-col tablet:items-center">
        <Avatar
          avatarUrl={githubProfile.data.avatar_url}
          alt={githubProfile.data.name}
        />
        <Introduce />
      </div>
      {/* <section>
        <h2 className="text-28-700 text-center">What I've made</h2>
      </section> */}
    </article>
  );
};
