import { AnimatePresence, motion } from 'framer-motion';
import { PageProps } from 'gatsby';
import React, { useMemo } from 'react';

const variants = {
  fromLeft: {
    initial: { opacity: 0.5, x: 24 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 24 },
  },
  fromRight: {
    initial: { opacity: 0.5, x: -24 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
  },
};

type PageTransitionProps = {
  location: PageProps['location'];
  children?: React.ReactNode;
};

export const PageTransition = ({ location, children }: PageTransitionProps) => {
  const isHigherPage = useMemo(() => {
    if (location.state instanceof Object && 'toLower' in location.state) {
      return false;
    }

    return true;
  }, [location]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname}
        initial={'initial'}
        animate={'enter'}
        exit={'exit'}
        variants={isHigherPage ? variants.fromRight : variants.fromLeft}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
