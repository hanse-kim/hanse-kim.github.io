import React from 'react';
import { Icon } from 'src/components/common/icon';
import { useDarkModeActions } from 'src/stores/dark-mode-store';

type DarkModeButtonProps = {};

export const DarkModeButton = ({}: DarkModeButtonProps) => {
  const { toggleDarkMode } = useDarkModeActions();

  return (
    <button
      className="flex items-center justify-center transition-colors rounded-full w-36 h-36 desktop:desktop:hover:bg-bg-alt desktop:active:bg-border group"
      onClick={(e) => {
        e.currentTarget.dataset.animating = 'true';
        toggleDarkMode();
      }}
    >
      <span className="relative w-[24px] h-[24px]">
        <Icon
          className="absolute top-0 left-0 opacity-0 dark:opacity-100 dark:group-data-[animating=true]:animate-dark-mode-icon-in light:group-data-[animating=true]:animate-dark-mode-icon-out"
          size={24}
          iconName={'dark_mode'}
        />
        <Icon
          className="absolute top-0 left-0 opacity-0 light:opacity-100 light:group-data-[animating=true]:animate-dark-mode-icon-in dark:group-data-[animating=true]:animate-dark-mode-icon-out"
          size={24}
          iconName={'light_mode'}
        />
      </span>
    </button>
  );
};
