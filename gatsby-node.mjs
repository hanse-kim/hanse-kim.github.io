import { createFilePath } from 'gatsby-source-filesystem';
import kebabCase from 'kebab-case';
import { resolve } from 'path';

export function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    const parentNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'sourceInstanceName',
      value: parentNode.sourceInstanceName,
    });
    createNodeField({
      node,
      name: 'name',
      value: parentNode.name,
    });
  }
}

export function createResolvers({ createResolvers }) {
  createResolvers({
    MarkdownRemarkFrontmatter: {
      tags: {
        type: '[String]',
        resolve(source) {
          return source.tags || [];
        },
      },
      hide: {
        type: 'Boolean',
        resolve(source) {
          return source.hide !== undefined ? source.hide : false;
        },
      },
      thumbnail: {
        type: 'File',
        resolve(source, args, context, info) {
          if (source.thumbnail) {
            return context.nodeModel.getNodeById({ id: source.thumbnail });
          } else {
            return null;
          }
        },
      },
    },
  });
}

export async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const postsQuery = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { sourceInstanceName: { eq: "posts" } } }
      ) {
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

  const posts = postsQuery.data.allMarkdownRemark.nodes;
  const postTemplate = resolve(`./src/templates/{post}.tsx`);

  posts.forEach((post) => {
    createPage({
      path: `/blog${post.fields.slug}`,
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { id: post.id },
    });
  });

  const tagsQuery = await graphql(`
    query {
      tagsGroup: allMarkdownRemark(limit: 2000) {
        tags: group(field: { frontmatter: { tags: SELECT } }) {
          value: fieldValue
          totalCount
        }
      }
    }
  `);

  const tags = tagsQuery.data.tagsGroup.tags;

  tags.forEach((tag) => {
    const tagPath = kebabCase(tag.value, false) || tag.value.replaceAll(' ', '-');
    createPage({
      path: `/tags/${tagPath}/`,
      component: resolve('src/templates/{tag}.tsx'),
      context: {
        tag: tag.value,
      },
    });
  });
}
