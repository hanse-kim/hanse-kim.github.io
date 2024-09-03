import { PageProps } from 'gatsby';
import React, { createContext, useContext } from 'react';

type PageContextValue = {
  pageProps: Omit<PageProps, 'children'>;
};

const PageContext = createContext<PageContextValue | null>(null);

type PageProviderProps = {
  children: React.ReactNode;
  pageProps: Omit<PageProps, 'children'>;
};

export const PageProvider = ({ children, pageProps }: PageProviderProps) => {
  return (
    <PageContext.Provider value={{ pageProps }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const value = useContext(PageContext);

  if (value === null) {
    throw new Error('Cannot found PageProvider.');
  }

  return value;
};
