import { HeadProps } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';

type SeoProps = HeadProps & {
  title?: string;
};

export const Seo = ({ title, location }: SeoProps) => {
  const siteMetadata = useSiteMetadata();

  const pageTitle = `${title ? `${title} | ` : ''}${siteMetadata.title}`;
  const pageUrl = `${siteMetadata.siteUrl}${location.pathname || ''}`;

  return (
    <>
      {/* SEO */}
      <title>{pageTitle}</title>
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:url" content={pageUrl} />
    </>
  );
};
