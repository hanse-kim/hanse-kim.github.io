export type MarkdownRemark = Node & {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    hide?: boolean;
    thumbnail?: {
      publicURL: string;
    };
  };
  html: string;
  body: string;
  timeToRead: number;
  tableOfContents: TocItem[];
  excerpt: string;
  fields: {
    slug: string;
  };
};

export type TocItem = {
  url: string;
  title: string;
  items?: TocItem[];
};
