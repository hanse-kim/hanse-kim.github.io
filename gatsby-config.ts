import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `hanse-kim.dev`,
    description:
      '개발 과정에서 겪은 문제와 그것을 어떻게 해결했는지를 기록하기 위한 블로그입니다.',
    email: 'hansekim.dev@gmail.com',
    githubUrl: 'https://github.com/hanse-kim',
    githubName: 'hanse-kim',
    blogUrl: 'https://hanse-kim.github.io',
    publishYear: `2022-${new Date().getFullYear()}`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     trackingId: process.env.GA_TRACKING_ID || '',
    //     head: true,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};

export default config;
