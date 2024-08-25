export type MdxNode = Node & {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    hide: boolean;
  };
  body: string;
  tableOfContents: TocItem[];
  excerpt: string;
  fields: {
    slug?: string;
  };
};

export type TocItem = {
  url: string;
  title: string;
  items?: TocItem[];
};
