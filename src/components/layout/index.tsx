import { PageProps } from 'gatsby';
import React from 'react';
import { PageProvider } from 'src/contexts/page-context';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import { PageTransition } from './page-transition';

type LayoutProps = Omit<PageProps, 'children'> & {
  children: React.ReactElement;
};

export const Layout = ({ children, ...pageProps }: LayoutProps) => {
  return (
    <PageProvider {...pageProps}>
      <Header />
      <Main>
        <PageTransition location={pageProps.location}>
          {children}
        </PageTransition>
      </Main>
      <Footer />
    </PageProvider>
  );
};
