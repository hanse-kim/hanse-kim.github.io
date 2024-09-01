import { PageProps } from 'gatsby';
import React, { useEffect } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import { PageTransition } from './page-transition';
import { usePage } from 'src/contexts/page-context';

type LayoutProps = {
  pageProps: Omit<PageProps, 'children'>;
  children: React.ReactElement;
};

export const Layout = ({ children, pageProps }: LayoutProps) => {
  const { setPageProps } = usePage();

  useEffect(() => {
    setPageProps(pageProps);
  }, [pageProps]);

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
