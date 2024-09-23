import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { CustomImage } from 'src/components/common/custom-image';
import { ContentMarkdownSection } from './sections/content-markdown-section';
import { PostHeader } from './sections/post-header';
import { CommentSection } from './sections/comment-section';
import { BottomAdSection } from './sections/bottom-ad-section';

type PostScreenProps = {
  post: PostMarkdown;
};

export const PostScreen = ({ post }: PostScreenProps) => {
  return (
    <article>
      <PostHeader {...post.frontmatter} timeToRead={post.timeToRead} />
      {post.frontmatter.thumbnail && (
        <CustomImage
          className="border border-solid mb-36 - 1 border-border"
          src={post.frontmatter.thumbnail?.publicURL}
          alt={post.frontmatter.title}
          ratio={9 / 21}
        />
      )}
      <ContentMarkdownSection html={post.html} />
      <BottomAdSection />
      <CommentSection />
    </article>
  );
};
