import React from 'react';
import 'src/styles/markdown-styles.css';
import 'src/styles/prism-theme.css';

type MarkdownProps = {
  html: string;
};

export const Markdown = ({ html }: MarkdownProps) => {
  return (
    <div
      className="flex flex-col gap-24 px-24 pb-48 md text-20-400"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
