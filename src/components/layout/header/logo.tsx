import { m } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import { routes } from 'src/_libs/constants/routes';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';

type LogoProps = {};

export const Logo = ({}: LogoProps) => {
  const { title } = useSiteMetadata();

  return (
    <m.div
      whileHover={{ scale: 1.1 }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 1000,
      }}
    >
      <Link className="text-24-800" to={routes.blog}>
        {title}
      </Link>
    </m.div>
  );
};
