import React from 'react';
import { Icon } from 'src/components/common/icon';
import { IconName } from 'src/components/common/icon/_assets';

type ContactLinkProps = {
  label: string;
  url: string;
  iconName: IconName;
};

export const ContactLink = ({ label, url, iconName }: ContactLinkProps) => {
  return (
    <a className="flex items-center gap-4" href={url} target="_blank">
      <Icon size={20} iconName={iconName} color={'muted'} />
      <span className="text-text-muted text-16-500">{label}</span>
    </a>
  );
};
