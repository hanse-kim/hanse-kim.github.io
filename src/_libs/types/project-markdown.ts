import { Node } from 'gatsby';

export type ProjectMarkdown = Node & {
  frontmatter: ProjectFrontmatter;
  html: string;
  fields: {
    name: string;
  };
};

export type ProjectFrontmatter = {
  title: string;
  subtitle: string;
  description: string;
  isReverse: boolean;
};

export type TocItem = {
  url: string;
  title: string;
  items?: TocItem[];
};
