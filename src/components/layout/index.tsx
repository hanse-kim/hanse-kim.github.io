import { PageProps } from 'gatsby';
import React from 'react';
import { PageProvider } from 'src/contexts/page-context';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';

type LayoutProps = Omit<PageProps, 'children'> & {
  children: React.ReactElement;
};

export const Layout = ({ children, ...pageProps }: LayoutProps) => {
  return (
    <PageProvider {...pageProps}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </PageProvider>
  );
};
