import React from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';

type LayoutProps = { children: React.ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
