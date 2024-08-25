import { HeadProps, PageProps } from 'gatsby';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import React from 'react';

type SeoProps = HeadProps & {
  title?: string;
};

export const Seo = ({ title, location }: SeoProps) => {
  const siteMetadata = useSiteMetadata();

  const pageTitle = `${title ? `${title} | ` : ''}${siteMetadata.title}`;
  const pageUrl = `${siteMetadata.blogUrl}${location.pathname || ''}`;

  return (
    <>
      {/* SEO */}
      <html lang="ko" />
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
