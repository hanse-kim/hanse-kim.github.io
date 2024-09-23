import { graphql, useStaticQuery } from 'gatsby';
import { ProjectMarkdown } from 'src/_libs/types/project-markdown';

type QueryData = {
  allMarkdownRemark: {
    nodes: ProjectMarkdown[];
  };
};

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
      sort: { frontmatter: { ordering: ASC } }
    ) {
      nodes {
        html
        frontmatter {
          title
          subtitle
          description
          isReverse
        }
        fields {
          name
        }
      }
    }
  }
`;

export const useProjects = () => {
  const { allMarkdownRemark } = useStaticQuery<QueryData>(query);
  const projects = allMarkdownRemark.nodes;

  return { projects };
};
