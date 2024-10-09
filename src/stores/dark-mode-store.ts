import { storageKeys } from 'src/_libs/constants/storage-keys';
import { envUtils } from 'src/_libs/utils/env-utils';
import { localStorageUtils } from 'src/_libs/utils/storage-utils';
import { create } from 'zustand';

type StoreValue = {
  isDarkMode: boolean;
  actions: {
    toggleDarkMode: () => void;
  };
};

const useDarkModeStore = create<StoreValue>((set) => {
  let isDarkMode = false;

  if (envUtils.isClient) {
    isDarkMode = getInitialIsDarkModeOnBrowser();
    updateIsDarkMode(isDarkMode);
    setupTransitionEndHandler();
  }

  const toggleDarkMode = () => {
    set((state) => {
      const newIsDarkMode = !state.isDarkMode;
      updateIsDarkMode(newIsDarkMode);

      return {
        isDarkMode: newIsDarkMode,
      };
    });
  };

  return {
    isDarkMode,
    actions: {
      toggleDarkMode,
    },
  };
});

export const useIsDarkMode = () =>
  useDarkModeStore((state) => state.isDarkMode);

export const useDarkModeActions = () =>
  useDarkModeStore((state) => state.actions);

function getInitialIsDarkModeOnBrowser() {
  const storedIsDarkMode = localStorageUtils.get<boolean | null>(
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

function updateIsDarkMode(value: boolean) {
  document.documentElement.dataset.transition = 'true';
  localStorageUtils.set(storageKeys.isDarkMode, value);
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
