import { configDotenv } from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

configDotenv();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hanse Kim's Dev Blog`,
    description:
      '개발 과정에서 겪은 문제와 그것을 어떻게 해결했는지를 기록하기 위한 블로그입니다.',
    email: 'hansekim.dev@gmail.com',
    githubUrl: 'https://github.com/hanse-kim',
    githubName: 'hanse-kim',
    siteUrl: 'https://hanse-kim.github.io',
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
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./.posts/`,
      },
      __key: 'posts',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `./.projects/`,
      },
      __key: 'projects',
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              withWebp: true,
              quality: 80,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
  ],
};

export default config;
