import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { BackButton } from 'src/components/common/back-button';
import { Heading } from 'src/components/common/heading';
import { Seo } from 'src/components/common/seo';
import { PostListSection } from 'src/components/screen/blog-screen/post-list-section';

type PageContextType = {
  tag: string;
};

type DataType = {
  allMarkdownRemark: {
    edges: Array<{ node: MarkdownRemark }>;
    totalCount: number;
  };
};

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
            hide
          }
          fields {
            slug
          }
          timeToRead
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`;

export const Head = (props: PageProps<DataType, PageContextType>) => (
  <Seo title={`태그: ${props.pageContext.tag}`} {...props} />
);

const TagPage = ({
  pageContext,
  data,
}: PageProps<DataType, PageContextType, { referrer: string }>) => {
  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <BackButton />
      <Heading>Tag: {tag}</Heading>
      <PostListSection posts={edges.map(({ node }) => node)} />
    </>
  );
};

export default TagPage;
