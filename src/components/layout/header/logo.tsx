import { routes } from 'src/_libs/constants/routes';
import { Link } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { motion } from 'framer-motion';

type LogoProps = {};

export const Logo = ({}: LogoProps) => {
  const { title } = useSiteMetadata();

  return (
    <motion.div
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
    </motion.div>
  );
};
