import React from 'react';

type BottomAdSectionProps = {};

export const BottomAdSection = ({}: BottomAdSectionProps) => {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7803939437590519"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle mb-48"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7803939437590519"
        data-ad-slot="4608593416"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script
        dangerouslySetInnerHTML={{
          __html: '(adsbygoogle = window.adsbygoogle || []).push({});',
        }}
      />
    </>
  );
};
