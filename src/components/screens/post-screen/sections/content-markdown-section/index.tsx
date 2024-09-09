import React from 'react';
import 'src/styles/markdown-styles.css';
import 'src/styles/prism-theme.css';

type ContentMarkdownSectionProps = {
  html: string;
};

export const ContentMarkdownSection = ({
  html,
}: ContentMarkdownSectionProps) => {
  return (
    <div
      className="flex flex-col gap-24 px-24 pb-48 md text-20-400"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
