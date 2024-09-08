import { RenderBodyArgs } from 'gatsby';
import React from 'react';
import './src/styles/global.css';
import { FontPreload } from 'src/components/ssr/font-preload';
import { GoogleAdsense } from 'src/components/ssr/google-adsense';

export { wrapPageElement } from './gatsby-shared';

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}: RenderBodyArgs) => {
  setHtmlAttributes({ lang: 'ko' });
  setHeadComponents([<FontPreload />, <GoogleAdsense />]);
};
