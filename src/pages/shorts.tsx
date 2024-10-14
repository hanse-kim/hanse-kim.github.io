import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { Seo } from 'src/components/common/seo';
import { ShortsScreen } from 'src/components/screens/shorts-screen';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { sourceInstanceName: { eq: "shorts" } } }
    ) {
      nodes {
        id
        html
        frontmatter {
          title,
          date
        }
      }
    }
  }
`;

type DataType = {
  allMarkdownRemark: {
    nodes: PostMarkdown[];
  };
};

export const Head = (props: PageProps) => <Seo title="Shorts" {...props} />;

const ShortsPage = ({ data }: PageProps<DataType>) => {
  return <ShortsScreen shortsList={data.allMarkdownRemark.nodes} />;
};

export default ShortsPage;
