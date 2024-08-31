import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import { Tag } from 'src/_libs/types/tag';
import { Seo } from 'src/components/common/seo';
import { TagsScreen } from 'src/components/screen/tags-screen';

interface DataType {
  tagsGroup: {
    tags: Tag[];
  };
}

export const pageQuery = graphql`
  query {
    tagsGroup: allMarkdownRemark(limit: 2000) {
      tags: group(field: { frontmatter: { tags: SELECT } }) {
        value: fieldValue
        totalCount
      }
    }
  }
`;

export const Head = (props: PageProps) => <Seo title="Tags" {...props} />;

const TagsPage = ({ data }: PageProps<DataType>) => {
  return <TagsScreen tags={data.tagsGroup.tags} />;
};
export default TagsPage;
