import { graphql, HeadFC, PageProps } from 'gatsby';
import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { Seo } from '../components/common/seo';
import { BlogScreen } from '../components/screens/blog-screen';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { sourceInstanceName: { eq: "posts" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          tags
          hide
          thumbnail {
            publicURL
          }
        }
        timeToRead
        excerpt(pruneLength: 200)
        fields {
          slug
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

export const Head: HeadFC = (pageProps) => <Seo title="Blog" {...pageProps} />;

const BlogPage = ({ data }: PageProps<DataType>) => {
  return <BlogScreen posts={data.allMarkdownRemark.nodes} />;
};

export default BlogPage;
