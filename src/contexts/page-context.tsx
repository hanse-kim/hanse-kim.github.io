import React, { createContext, useContext } from 'react';

type PageContextValue = {
  path: string;
};

const PageContext = createContext<PageContextValue | null>(null);

type PageProviderProps = PageContextValue & { children: React.ReactNode };

export const PageProvider = ({ children, ...pageProps }: PageProviderProps) => {
  return (
    <PageContext.Provider value={pageProps}>{children}</PageContext.Provider>
  );
};

export const usePage = () => {
  const value = useContext(PageContext);

  if (value === null) {
    return { path: '' };
  }

  return value;
};
