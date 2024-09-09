import React from 'react';
import { Icon } from 'src/components/common/icon';
import { IconName } from 'src/components/common/icon/assets';

type ContactLinkProps = {
  label: string;
  url: string;
  iconName: IconName;
};

export const ContactLink = ({ label, url, iconName }: ContactLinkProps) => {
  return (
    <a className="flex items-center gap-4" href={url}>
      <Icon size={20} iconName={iconName} color={'alt'} />
      <span className="text-text-alt text-16-500">{label}</span>
    </a>
  );
};
