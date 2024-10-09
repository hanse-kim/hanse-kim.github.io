import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { GoogleAdsense } from 'src/components/ssr/google-adsense';
import { GoogleAnalytics } from 'src/components/ssr/google-analytics';
import { Layout } from './src/components/layout';

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return (
    <>
      <Layout pageProps={props}>{element}</Layout>
      <GoogleAdsense />
      <GoogleAnalytics />
    </>
  );
};
