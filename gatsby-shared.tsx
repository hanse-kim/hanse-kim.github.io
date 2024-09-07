import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { Layout } from './src/components/layout';

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return <Layout pageProps={props}>{element}</Layout>;
};
