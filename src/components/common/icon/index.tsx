import React from 'react';
import { IconName, icons } from './assets';

export type IconProps = {
  className?: string;
  color?: string;
  size?: number;
  iconName: IconName;
};

export const Icon = ({
  className = '',
  size = 24,
  iconName,
  ...props
}: IconProps) => {
  const SvgComponent: React.FC = icons[iconName];

  return (
    <span
      className={`flex transition-colors duration-75 ${className} [&>svg]:text-text`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      {...props}
    >
      <SvgComponent />
    </span>
  );
};
