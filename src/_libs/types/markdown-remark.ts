export type MarkdownRemark = Node & {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    hide: boolean;
  };
  html: string;
  body: string;
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
