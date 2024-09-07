import React from 'react';

type FontPreloadProps = {};

export const FontPreload = ({}: FontPreloadProps) => {
  return (
    <link
      rel="preload"
      href="/fonts/PretendardVariable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="Pretendard"
    />
  );
};
