import kebabCase from 'kebab-case';

export const routes = {
  blog: '/blog/',
  blogPost: (slug: string) => `/blog${slug}`,
  about: '/about/',
  tags: '/tags/',
  tag: (tag: string) => `/tags/${kebabCase(tag, false)}/`,
} as const;

export type Route = (typeof routes)[keyof typeof routes];
