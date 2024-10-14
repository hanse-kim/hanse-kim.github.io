import React, { useEffect, useRef, useState } from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { HighlightText } from 'src/components/common/highlight-text';

type ShortsCardProps = {
  shorts: PostMarkdown;
  search: string;
};

export const ShortsCard = ({ shorts, search }: ShortsCardProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const contentHeightRef = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const height = entry.borderBoxSize[0].blockSize;
      contentHeightRef.current = height;
    });

    observer.observe(contentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="p-24 flex flex-col items-stretch bg-bg outline outline-border outline-1 rounded-16 hover:not(:browser):outline-text-muted data-[open=true]:outline-text transition-outline group"
      data-open={isOpen}
    >
      <button className="flex items-start gap-12 text-left" onClick={toggle}>
        <div className="flex-1">
          <h3 className="text-text text-28-700">
            <HighlightText text={shorts.frontmatter.title} search={search} />
          </h3>
          <p className="text-text-muted">{shorts.frontmatter.date}</p>
        </div>
        <div className="relative w-28 h-28 shrink-0">
          <div className="absolute w-4 h-24 rotate-90 -translate-x-1/2 bg-text rounded-2 left-1/2" />
          <div className="w-4 h-24 bg-text absolute rounded-2 left-1/2 -translate-x-1/2 rotate-0 group-data-[open=true]:rotate-90 group-data-[open=true]:opacity-0 transition-all" />
        </div>
      </button>
      <div
        className="overflow-hidden transition-all"
        style={{ maxHeight: isOpen ? `${contentHeightRef.current}px` : '0px' }}
      >
        <div
          ref={contentRef}
          className="w-full pt-16 px-[inherit] text-18-400"
          onClick={(e) => e.stopPropagation()}
        >
          <hr className="mb-16 border-border" />
          <HighlightText
            className="flex flex-col gap-18 md"
            text={shorts.html}
            search={search}
          />
        </div>
      </div>
    </div>
  );
};
