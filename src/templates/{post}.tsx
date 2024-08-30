import { graphql, HeadFC, type PageProps } from 'gatsby';
import React from 'react';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { Seo } from 'src/components/common/seo';
import { PostScreen } from 'src/components/screen/post-screen';
import { PageProvider } from 'src/contexts/page-context';

interface DataType {
  markdownRemark: MarkdownRemark;
}

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        thumbnail {
          publicURL
        }
      }
    }
  }
`;

export const Head: HeadFC<DataType> = (pageProps) => (
  <Seo title={pageProps.data.markdownRemark.frontmatter.title} {...pageProps} />
);

const PostTemplate = ({
  children,
  ...pageProps
}: PageProps<DataType, object, { referrer: string }>) => {
  console.log({ children });
  return (
    <PageProvider {...pageProps}>
      <PostScreen post={pageProps.data.markdownRemark} />
    </PageProvider>
  );
};

export default PostTemplate;
