import React from 'react';

type HeadingProps = {
  children?: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className="my-48 text-36-700">{children}</h1>;
};
