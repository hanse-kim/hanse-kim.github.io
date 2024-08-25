import React from 'react';

type MainProps = {
  children?: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return <main>{children}</main>;
};
