import { RenderBodyArgs } from 'gatsby';
import { default as React } from 'react';
import { FontPreload } from 'src/components/ssr/font-preload';
import { GoogleAdsense } from 'src/components/ssr/google-adsense';
import { GoogleAnalytics } from 'src/components/ssr/google-analytics';
import './src/styles/global.css';

export { wrapPageElement } from './gatsby-shared';

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}: RenderBodyArgs) => {
  setHtmlAttributes({ lang: 'ko' });
  setHeadComponents([
    ...[FontPreload, GoogleAdsense, GoogleAnalytics].map((Component, index) => (
      <Component key={index} />
    )),
  ]);
};
