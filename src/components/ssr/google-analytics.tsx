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
      ></Script>
      <Script id="gtag-initialize" strategy="off-main-thread">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ELYB3E19X0');
        `}
      </Script>
    </>
  );
};
