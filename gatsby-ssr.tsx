import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { Layout } from './src/components/layout';
import './src/styles/global.css';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PretendardVariable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="Pretendard"
    />,
  ]);
};

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return <Layout pageProps={props}>{element}</Layout>;
};
