import { LocalStorageUtils } from 'src/_libs/utils/storage.utils';
import { create } from 'zustand';

export const isDarkModeStorageKey = 'is-dark-mode';

type StoreValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const useDarkModeStore = create<StoreValue>((set) => {
  let isDarkMode = getInitialIsDarkMode();

  setIsDarkMode(isDarkMode);
  setupTransitionEndHandler();

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
    isDarkModeStorageKey
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
  LocalStorageUtils.set(isDarkModeStorageKey, value);
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

  console.log({ iframe }, '!!!!');

  if (!iframe) {
    return;
  }

  console.log(iframe.contentWindow, { setConfig: { isDarkMode } });

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
