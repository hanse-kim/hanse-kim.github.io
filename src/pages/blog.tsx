import { graphql, HeadFC, PageProps } from 'gatsby';
import React from 'react';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { PageProvider } from 'src/contexts/page-context';
import { Seo } from '../components/common/seo';
import { BlogScreen } from '../components/screen/blog-screen';

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          tags
          hide
        }
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

const BlogPage = ({ ...pageProps }: PageProps<DataType>) => {
  return (
    <PageProvider {...pageProps}>
      <BlogScreen posts={pageProps.data.allMarkdownRemark.nodes} />
    </PageProvider>
  );
};

export default BlogPage;
