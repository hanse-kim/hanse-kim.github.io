import { createFilePath } from 'gatsby-source-filesystem';
import { resolve } from 'path';

export function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
}

export async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const postsQuery = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            hide
          }
          internal {
            contentFilePath
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const posts = postsQuery.data.allMdx.nodes;
  const postTemplate = resolve(`./src/templates/{post}.tsx`);

  posts.forEach((post) => {
    if (process.env.NODE_ENV === 'production' && post.frontmatter.hide) {
      return;
    }

    createPage({
      path: `${post.fields.slug}`,
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { id: post.id },
    });
  });
}
