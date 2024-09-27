import React from 'react';
import { CustomImage } from 'src/components/common/custom-image';

type ThumbnailImageSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export const ThumbnailImageSection = ({
  imageSrc,
  imageAlt,
}: ThumbnailImageSectionProps) => {
  if (!imageSrc) {
    return null;
  }

  return (
    <CustomImage
      className="border border-solid mb-36 - 1 border-border"
      src={imageSrc}
      alt={imageAlt}
      ratio={9 / 21}
    />
  );
};
