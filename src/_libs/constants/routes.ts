export const routes = {
  blog: '/blog/',
  tags: '/tags/',
} as const;

export type Route = (typeof routes)[keyof typeof routes];
