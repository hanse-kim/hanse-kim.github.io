import { MDXProvider } from '@mdx-js/react';
import { graphql, HeadFC, type PageProps } from 'gatsby';
import React from 'react';
import { MdxNode } from 'src/_libs/types/mdx-node';
import { Seo } from 'src/components/common/seo';
import { PostScreen } from 'src/components/screen/post-screen';
import { PageProvider } from 'src/contexts/page-context';

interface DataType {
  mdx: MdxNode;
}

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
      }
    }
  }
`;

export const Head: HeadFC<DataType> = (pageProps) => (
  <Seo title={pageProps.data.mdx.frontmatter.title} {...pageProps} />
);

const PostTemplate = ({
  children,
  ...pageProps
}: PageProps<DataType, object, { referrer: string }>) => {
  return (
    <PageProvider {...pageProps}>
      <PostScreen post={pageProps.data.mdx}>{children}</PostScreen>
    </PageProvider>
  );
};

export default PostTemplate;
