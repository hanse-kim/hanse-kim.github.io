import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const thumbnails: Record<string, React.ReactElement> = {
  harmony: (
    <StaticImage
      src="./harmony.webp"
      alt="harmony"
      layout="constrained"
      width={640}
    />
  ),
  orderhop: (
    <StaticImage
      src="./orderhop.webp"
      alt="orderhop"
      layout="constrained"
      width={640}
    />
  ),
  uzzim: (
    <StaticImage
      src="./uzzim.webp"
      alt="uzzim"
      layout="constrained"
      width={640}
    />
  ),
};
