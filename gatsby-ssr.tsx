import { RenderBodyArgs } from 'gatsby';
import { default as React } from 'react';
import { FontPreload } from 'src/components/ssr/font-preload';
import './src/styles/global.css';

export { wrapPageElement } from './gatsby-shared';

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}: RenderBodyArgs) => {
  setHtmlAttributes({ lang: 'ko' });
  setHeadComponents([
    ...[FontPreload].map((Component, index) => <Component key={index} />),
  ]);
};
