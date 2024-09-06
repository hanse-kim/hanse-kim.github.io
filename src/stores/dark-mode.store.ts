import { storageKeys } from 'src/_libs/constants/storage-keys';
import { EnvUtils } from 'src/_libs/utils/env.utils';
import { LocalStorageUtils } from 'src/_libs/utils/storage.utils';
import { create } from 'zustand';

type StoreValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const useDarkModeStore = create<StoreValue>((set) => {
  let isDarkMode = false;

  if (EnvUtils.isClient) {
    isDarkMode = getInitialIsDarkMode();
    setIsDarkMode(isDarkMode);
    setupTransitionEndHandler();
  }

  return {
    isDarkMode,
    toggleDarkMode: () => {
      set((state) => {
        const newIsDarkMode = !state.isDarkMode;
        setIsDarkMode(newIsDarkMode);

        return {
          isDarkMode: newIsDarkMode,
        };
      });
    },
  };
});

function getInitialIsDarkMode() {
  const storedIsDarkMode = LocalStorageUtils.get<boolean | null>(
    storageKeys.isDarkMode
  );

  if (storedIsDarkMode !== null) {
    return storedIsDarkMode;
  }

  if (window.matchMedia) {
    const preferredIsDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return preferredIsDarkMode;
  }

  return false;
}

function setIsDarkMode(value: boolean) {
  document.documentElement.dataset.transition = 'true';
  LocalStorageUtils.set(storageKeys.isDarkMode, value);
  updateDocumentTheme(value);
  updateGiscusTheme(value);
}

function updateDocumentTheme(isDarkMode: boolean) {
  document.documentElement.classList.toggle('dark', isDarkMode);
  document.documentElement.classList.toggle('light', !isDarkMode);
}

export function updateGiscusTheme(isDarkMode: boolean) {
  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.giscus-frame'
  );

  if (!iframe) {
    return;
  }

  iframe.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: isDarkMode ? 'dark' : 'light' } } },
    'https://giscus.app'
  );
}

function setupTransitionEndHandler() {
  document.documentElement.addEventListener('transitionend', () => {
    document.documentElement.dataset.transition = 'false';
  });
}
