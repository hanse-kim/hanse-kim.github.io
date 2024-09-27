import React from 'react';
import { PostMarkdown } from 'src/_libs/types/post-markdown';
import { BottomAdSection } from './bottom-ad-section';
import { CommentSection } from './comment-section';
import { ContentMarkdownSection } from './content-markdown-section';
import { PostHeader } from './post-header';
import { ThumbnailImageSection } from './thumbnail-image-section';

type PostScreenProps = {
  post: PostMarkdown;
};

export const PostScreen = ({ post }: PostScreenProps) => {
  return (
    <article>
      <PostHeader {...post.frontmatter} timeToRead={post.timeToRead} />
      <ThumbnailImageSection
        imageSrc={post.frontmatter.thumbnail?.publicURL}
        imageAlt={post.frontmatter.title}
      />
      <ContentMarkdownSection html={post.html} />
      <BottomAdSection />
      <CommentSection />
    </article>
  );
};
