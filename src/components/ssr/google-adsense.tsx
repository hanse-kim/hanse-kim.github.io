import { Script } from 'gatsby';
import React from 'react';

type GoogleAdsenseProps = {};

export const GoogleAdsense = ({}: GoogleAdsenseProps) => {
  return (
    <Script
      id="googleadsense"
      strategy="off-main-thread"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7803939437590519"
      crossOrigin="anonymous"
    />
  );
};
