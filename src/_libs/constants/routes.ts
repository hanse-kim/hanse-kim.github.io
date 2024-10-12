import { conversionUtils } from '../utils/conversion-utils';

export const routes = {
  about: '/about/',
  blog: '/blog/',
  blogPost: (slug: string) => `/blog${slug}`,
  shorts: '/shorts/',
  tags: '/tags/',
  tag: (tag: string) => `/tags/${conversionUtils.getDashedString(tag)}/`,
} as const;

export type Route = (typeof routes)[keyof typeof routes];
