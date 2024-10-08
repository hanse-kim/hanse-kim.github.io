import { LazyMotion, domAnimation } from 'framer-motion';
import React from 'react';
import { usePage } from 'src/contexts/page-context';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import { PageTransition } from './page-transition';

type MotionLayoutProps = { children: React.ReactNode };

export const MotionLayout = ({ children }: MotionLayoutProps) => {
  const { pageProps } = usePage();

  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <Main>
        <PageTransition location={pageProps.location}>
          {children}
        </PageTransition>
      </Main>
      <Footer />
    </LazyMotion>
  );
};
