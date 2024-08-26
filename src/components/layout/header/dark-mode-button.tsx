import React from 'react';
import { useDarkMode } from 'src/hooks/use-dark-mode';

type DarkModeButtonProps = {};

export const DarkModeButton = ({}: DarkModeButtonProps) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return <button onClick={toggleDarkMode}>{isDarkMode ? 'X' : 'O'}</button>;
};
