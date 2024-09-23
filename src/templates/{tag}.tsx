import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { BackButton } from 'src/components/common/back-button';
import { Heading } from 'src/components/common/heading';
import { Seo } from 'src/components/common/seo';
import { PostListSection } from 'src/components/screens/blog-screen/sections/post-list-section';

type PageContextType = {
  tag: string;
};

type DataType = {
  allMarkdownRemark: {
    edges: Array<{ node: PostMarkdown }>;
    totalCount: number;
  };
};

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { sourceInstanceName: { eq: "posts" } }
      }
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
