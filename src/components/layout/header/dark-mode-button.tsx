import React from 'react';
import { Icon } from 'src/components/common/icon';
import { useDarkMode } from 'src/hooks/use-dark-mode';

type DarkModeButtonProps = {};

export const DarkModeButton = ({}: DarkModeButtonProps) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="flex items-center justify-center transition-colors rounded-full w-36 h-36 desktop:desktop:hover:bg-blur desktop:active:bg-border group"
      onClick={(e) => {
        e.currentTarget.dataset.animating = 'true';
        toggleDarkMode();
      }}
    >
      <span className="relative w-[24px] h-[24px]">
        <Icon
          className="absolute top-0 left-0 opacity-0 data-[in=true]:opacity-100 group-data-[animating=true]:data-[in=true]:animate-dark-mode-icon-in group-data-[animating=true]:data-[in=false]:animate-dark-mode-icon-out"
          size={24}
          data-in={isDarkMode}
          iconName={'dark_mode'}
        />
        <Icon
          className="absolute top-0 left-0 opacity-0 data-[in=true]:opacity-100 group-data-[animating=true]:data-[in=true]:animate-dark-mode-icon-in group-data-[animating=true]:data-[in=false]:animate-dark-mode-icon-out"
          size={24}
          data-in={!isDarkMode}
          iconName={'light_mode'}
        />
      </span>
    </button>
  );
};
