import React from 'react';
import { prismTheme } from 'src/styles/prism-theme';
import 'src/styles/markdown-styles.css';

type MarkdownProps = {
  html: string;
};

export const Markdown = ({ html }: MarkdownProps) => {
  return (
    <>
      <style>{prismTheme}</style>
      <div
        className="flex flex-col gap-16 px-24 md text-20-400"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
};
