import React from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';

type PlainLayoutProps = { children: React.ReactNode };

export const PlainLayout = ({ children }: PlainLayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
