import React from 'react';

type RatioProps = {
  className?: string;
  /** height / width */
  ratio?: number;
  children?: React.ReactNode;
};

export const Ratio = ({ className, ratio, children }: RatioProps) => {
  return (
    <div
      className={`relative`}
      style={{
        paddingBottom: !!ratio ? `${ratio * 100}%` : undefined,
      }}
    >
      <div className={`absolute inset-0 ${className}`}>{children}</div>
    </div>
  );
};
