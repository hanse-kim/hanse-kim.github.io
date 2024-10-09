import { conversionUtils } from '../utils/conversion-utils';

export const routes = {
  blog: '/blog/',
  blogPost: (slug: string) => `/blog${slug}`,
  about: '/about/',
  tags: '/tags/',
  tag: (tag: string) => `/tags/${conversionUtils.getDashedString(tag)}/`,
} as const;

export type Route = (typeof routes)[keyof typeof routes];
