import React, { HTMLProps } from 'react';
import { IconName, icons } from './assets';

export type IconProps = HTMLProps<HTMLSpanElement> & {
  size?: number;
  iconName: IconName;
};

export const Icon = ({
  className = '',
  size = 24,
  iconName,
  ...props
}: IconProps) => {
  const svgElement: React.ReactElement = icons[iconName];

  return (
    <span
      className={`flex transition-colors duration-75 ${className} [&>svg]:text-text`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      {...props}
    >
      {svgElement}
    </span>
  );
};
