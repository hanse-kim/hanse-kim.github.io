import React from 'react';
import { MarkdownRemark } from 'src/_libs/types/markdown-remark';
import { Layout } from 'src/components/layout';
import { PostScreenHeader } from './header';
import { Markdown } from './markdown';
import { CustomImage } from 'src/components/common/custom-image';

type PostScreenProps = {
  post: MarkdownRemark;
};

export const PostScreen = ({ post }: PostScreenProps) => {
  return (
    <Layout hasScrollProgress>
      <PostScreenHeader {...post.frontmatter} />
      {post.frontmatter.thumbnail && (
        <CustomImage
          className="border border-solid mb-36 - 1 border-border"
          src={post.frontmatter.thumbnail?.publicURL}
          alt={post.frontmatter.title}
          ratio={9 / 21}
        />
      )}
      <Markdown html={post.html} />
    </Layout>
  );
};
