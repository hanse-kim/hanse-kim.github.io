import { RenderBodyArgs } from 'gatsby';
import React from 'react';
import { FontPreload } from 'src/components/ssr/font-preload';
import { GoogleAdsense } from 'src/components/ssr/google-adsense';
import './src/styles/global.css';

export { wrapPageElement } from './gatsby-shared';

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}: RenderBodyArgs) => {
  setHtmlAttributes({ lang: 'ko' });
  setHeadComponents([
    <FontPreload key="font-preload" />,
    <GoogleAdsense key="google-adsense" />,
  ]);
};
