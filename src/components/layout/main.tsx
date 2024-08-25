import React from 'react';

type MainProps = {
  children?: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return (
    <main className="min-h-[100vh] max-w-screen-width mx-auto">{children}</main>
  );
};
