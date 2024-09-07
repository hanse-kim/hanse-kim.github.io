import React, { useEffect, useRef } from 'react';
import { useIsDarkMode } from 'src/stores/dark-mode-store';

type GiscusCommentProps = {};

export const GiscusComment = ({}: GiscusCommentProps) => {
  const giscusRef = useRef<HTMLDivElement>(null);
  const isDarkMode = useIsDarkMode();

  useEffect(() => {
    const giscusConfig = {
      repo: 'hanse-kim/hanse-kim.github.io',
      repoId: 'R_kgDOMrV8_w',
      category: 'Announcements',
      categoryId: 'DIC_kwDOMrV8_84CiQDw',
      mapping: 'url',
      strict: '0',
      reactionsEnabled: '0',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: isDarkMode ? 'dark' : 'light',
      lang: 'ko',
    };

    const giscusScript = document.createElement('script');
    giscusScript.src = 'https://giscus.app/client.js';
    giscusScript.crossOrigin = 'anonymous';
    giscusScript.async = true;
    Object.entries(giscusConfig).map(
      ([key, value]) => (giscusScript.dataset[key] = value)
    );

    document.head.appendChild(giscusScript);

    return () => {
      giscusScript.remove();
    };
  }, []);

  return (
    <div className="px-24">
      <div className="giscus" ref={giscusRef} />
    </div>
  );
};
