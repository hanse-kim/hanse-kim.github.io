import { ConversionUtils } from '../utils/conversion-utils';

export const routes = {
  blog: '/blog/',
  blogPost: (slug: string) => `/blog${slug}`,
  about: '/about/',
  tags: '/tags/',
  tag: (tag: string) => `/tags/${ConversionUtils.getDashedString(tag)}/`,
} as const;

export type Route = (typeof routes)[keyof typeof routes];
