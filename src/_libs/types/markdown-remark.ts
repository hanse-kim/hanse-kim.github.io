import { Node } from 'gatsby';

export type MarkdownRemark = Node & {
  frontmatter: FrontMatter;
  html: string;
  body: string;
  timeToRead: number;
  tableOfContents: TocItem[];
  excerpt: string;
  fields: {
    slug: string;
  };
};

export type FrontMatter = {
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
