import { PageProps } from 'gatsby';
import React from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import { PageTransition } from './page-transition';

type LayoutProps = Omit<PageProps, 'children'> & {
  children: React.ReactElement;
};

export const Layout = ({ children, ...pageProps }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>
        <PageTransition location={pageProps.location}>
          {children}
        </PageTransition>
      </Main>
      <Footer />
    </>
  );
};
