import { RenderBodyArgs } from 'gatsby';
import React from 'react';
import './src/styles/global.css';
import { FontPreload } from 'src/components/ssr/font-preload';

export { wrapPageElement } from './gatsby-shared';

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}: RenderBodyArgs) => {
  setHtmlAttributes({ lang: 'ko' });
  setHeadComponents([<FontPreload />]);
};
