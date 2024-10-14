import React from 'react';

type HeadingProps = {
  children?: React.ReactNode;
  rightSideElement?: React.ReactNode;
};

export const Heading = ({ children, rightSideElement }: HeadingProps) => {
  return (
    <hgroup className="flex items-center justify-between gap-24 px-24 mt-48 mb-24 mobile:flex-col mobile:items-stretch">
      <h1 className="text-36-700">{children}</h1>
      {rightSideElement}
    </hgroup>
  );
};
