import { Script } from 'gatsby';
import React from 'react';

type GoogleAnalyticsProps = {};

export const GoogleAnalytics = ({}: GoogleAnalyticsProps) => {
  return (
    <>
      <Script
        id="gtag-script"
        strategy="off-main-thread"
        src="https://www.googletagmanager.com/gtag/js?id=G-ELYB3E19X0"
        forward={['gtag']}
      ></Script>
      <Script
        id="gtag-initialize"
        strategy="off-main-thread"
        forward={[`dataLayer.push`]}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ELYB3E19X0', {send_page_view: false});
        `}
      </Script>
    </>
  );
};
