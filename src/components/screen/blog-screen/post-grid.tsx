import React from 'react';

type PostGridProps = {
  children: React.ReactNode;
};

export const PostGrid = ({ children }: PostGridProps) => {
  return (
    <div className="grid grid-cols-3 p-24 gap-x-20 gap-y-32">{children}</div>
  );
};
