import { Node } from 'gatsby';

export type PostMarkdown = Node & {
  frontmatter: PostFrontmatter;
  html: string;
  body: string;
  timeToRead: number;
  tableOfContents: TocItem[];
  excerpt: string;
  fields: {
    slug: string;
  };
};

export type PostFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  hide?: boolean;
  thumbnail?: {
    publicURL: string;
  };
};

export type TocItem = {
  url: string;
  title: string;
  items?: TocItem[];
};
