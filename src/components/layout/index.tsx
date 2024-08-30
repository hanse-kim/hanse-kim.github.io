import React from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';

type LayoutProps = { children: React.ReactNode; hasScrollProgress?: boolean };

export const Layout = ({ children, hasScrollProgress }: LayoutProps) => {
  return (
    <>
      <Header hasScrollProgress={hasScrollProgress} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
