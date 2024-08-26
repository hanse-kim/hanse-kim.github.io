import { useEffect, useLayoutEffect, useState } from 'react';
import { LocalStorageUtils } from 'src/_libs/utils/storage.utils';

export const isDarkModeStorageKey = 'is-dark-mode';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    document.body.dataset.transition = 'true';
    setIsDarkMode((prev) => !prev);
    LocalStorageUtils.set(isDarkModeStorageKey, !isDarkMode);
  };

  useLayoutEffect(() => {
    const storedIsDarkMode = LocalStorageUtils.get<boolean | null>(
      isDarkModeStorageKey
    );

    if (storedIsDarkMode !== null) {
      setIsDarkMode(storedIsDarkMode);
      return;
    }

    if (window.matchMedia) {
      const preferredIsDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDarkMode(preferredIsDarkMode);
      return;
    }
  }, []);

  useEffect(() => {
    updateDocumentTheme(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      document.body.dataset.transition = 'false';
    };
    document.body.addEventListener('transitionend', () =>
      handleTransitionEnd()
    );

    return () =>
      document.body.removeEventListener('transitionend', handleTransitionEnd);
  });

  return { isDarkMode, toggleDarkMode };
};

export const updateDocumentTheme = (isDarkMode: boolean) => {
  if (isDarkMode) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
};
