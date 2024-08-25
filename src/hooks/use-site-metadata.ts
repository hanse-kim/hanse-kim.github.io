import { graphql, Node, useStaticQuery } from 'gatsby';

type SiteNode = Node & {
  siteMetadata: {
    title: string;
    description: string;
    email: string;
    githubUrl: string;
    githubName: string;
    publishYear: string;
    siteUrl: string;
  };
};

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        githubUrl
        githubName
        email
        publishYear
        siteUrl
      }
    }
  }
`;

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<{ site: SiteNode }>(query);

  return site.siteMetadata;
};
