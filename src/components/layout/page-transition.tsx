import { AnimatePresence, m } from 'framer-motion';
import { PageProps } from 'gatsby';
import React, { useMemo } from 'react';

export const pageTransitionDuration = 0.2;

const variants = {
  fromLeft: {
    initial: { opacity: 0, x: 24 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 24 },
  },
  fromRight: {
    initial: { opacity: 0, x: -24 },
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
    <AnimatePresence mode="wait" presenceAffectsLayout>
      <m.div
        key={location.pathname}
        initial={'initial'}
        animate={'enter'}
        exit={'exit'}
        variants={isHigherPage ? variants.fromRight : variants.fromLeft}
        transition={{ duration: pageTransitionDuration }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};
