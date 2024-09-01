import { PageProps } from 'gatsby';
import React, { createContext, useContext, useState } from 'react';

type PageContextValue = {
  pageProps: Partial<PageProps> & { path: string };
  setPageProps: (pageProps: Omit<PageProps, 'children'>) => void;
};

const PageContext = createContext<PageContextValue | null>(null);

type PageProviderProps = { children: React.ReactNode };

export const PageProvider = ({ children }: PageProviderProps) => {
  const [pageProps, setPageProps] = useState<
    Partial<PageProps> & { path: string }
  >({ path: '' });

  return (
    <PageContext.Provider value={{ pageProps, setPageProps }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const value = useContext(PageContext);

  if (value === null) {
    return { pageProps: { path: '' }, setPageProps: () => {} };
  }

  return value;
};
