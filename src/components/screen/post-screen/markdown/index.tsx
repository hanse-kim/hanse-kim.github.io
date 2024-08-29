import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { prismTheme } from 'src/styles/prism-theme';
import { markdownComponents } from './markdown-components';

type MarkdownProps = {
  children?: React.ReactNode;
};

export const Markdown = ({ children }: MarkdownProps) => {
  return (
    <>
      <style>{prismTheme}</style>
      <div className="flex flex-col gap-16 px-24 text-20-400">
        <MDXProvider components={markdownComponents}>{children}</MDXProvider>
      </div>
    </>
  );
};
