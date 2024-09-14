import React from 'react';
import { useGithubProfile } from 'src/stores/github-profile-store';
import { Avatar } from './avatar';
import { Introduce } from './introduce';

type ProfileSectionProps = {};

export const ProfileSection = ({}: ProfileSectionProps) => {
  const githubProfile = useGithubProfile();

  return (
    <div className="flex items-center justify-center gap-24 mx-auto tablet:gap-12 tablet:flex-col tablet:items-center">
      <Avatar
        avatarUrl={githubProfile.data?.avatar_url}
        alt={githubProfile.data?.name}
      />
      <Introduce />
    </div>
  );
};
