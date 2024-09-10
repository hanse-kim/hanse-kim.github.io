import React from 'react';
import { CustomImage } from 'src/components/common/custom-image';

type AvatarProps = {
  avatarUrl: string;
  alt: string;
};

export const Avatar = ({ avatarUrl, alt }: AvatarProps) => {
  return (
    <div className="w-180 h-180 border-solid rounded-full border-4 border-border overflow-hidden">
      <CustomImage className="object-cover" src={avatarUrl} alt={alt} />
    </div>
  );
};
