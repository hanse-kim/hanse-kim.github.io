import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';

type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  const { publishYear, githubName, githubUrl } = useSiteMetadata();

  return (
    <footer className="flex items-center justify-center gap-4 mt-48 h-footer-height bg-bg-footer-footer text-16-300">
      Copyright {publishYear}.
      <a href={githubUrl} className="underline text-16-400">
        {githubName}
      </a>
      All right reserved.
    </footer>
  );
};
