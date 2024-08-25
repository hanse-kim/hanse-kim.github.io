import { routes } from 'src/_libs/constants/routes';
import { Link } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';

type LogoProps = {};

export const Logo = ({}: LogoProps) => {
  const { title } = useSiteMetadata();

  return (
    <Link className="text-24-800 text-text" to={routes.blog}>
      {title}
    </Link>
  );
};
