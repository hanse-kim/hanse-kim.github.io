import { WrapPageElementBrowserArgs } from 'gatsby';
import { Layout } from './src/components/layout';
import './src/styles/global.css';
import React from 'react';

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return <Layout {...props}>{element}</Layout>;
};
