import { graphql, HeadFC, PageProps } from 'gatsby';
import React from 'react';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { Seo } from '../components/common/seo';
import { BlogScreen } from '../components/screens/blog-screen';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
    nodes: MarkdownRemark[];
  };
};

export const Head: HeadFC = (pageProps) => <Seo {...pageProps} />;

const BlogPage = ({ data }: PageProps<DataType>) => {
  return <BlogScreen posts={data.allMarkdownRemark.nodes} />;
};

export default BlogPage;
