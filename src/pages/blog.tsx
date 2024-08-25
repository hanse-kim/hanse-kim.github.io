import { graphql, HeadFC, PageProps } from 'gatsby';
import React from 'react';
import { MdxNode } from 'src/_libs/types/mdx-node';
import { PageProvider } from 'src/contexts/page-context';
import { Seo } from '../components/common/seo';
import { BlogScreen } from '../components/screen/blog-screen';

export const pageQuery = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
  allMdx: {
    nodes: MdxNode[];
  };
};

export const Head: HeadFC = (pageProps) => <Seo {...pageProps} />;

const BlogPage = ({ ...pageProps }: PageProps<DataType>) => {
  return (
    <PageProvider {...pageProps}>
      <BlogScreen posts={pageProps.data.allMdx.nodes} />
    </PageProvider>
  );
};

export default BlogPage;
