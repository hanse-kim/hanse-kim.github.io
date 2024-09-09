import React, { HTMLProps } from 'react';
import { IconName, icons } from './assets';

export type IconProps = HTMLProps<HTMLSpanElement> & {
  size?: number;
  iconName: IconName;
  color?: 'default' | 'alt';
};

export const Icon = ({
  className = '',
  size = 24,
  iconName,
  color = 'default',
  ...props
}: IconProps) => {
  const svgElement: React.ReactElement = icons[iconName];

  return (
    <span
      className={`flex transition-colors duration-75 ${className} text-text data-[color=alt]:text-text-alt`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      data-color={color}
      {...props}
    >
      {svgElement}
    </span>
  );
};
