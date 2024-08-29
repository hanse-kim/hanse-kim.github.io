import React, { HTMLProps } from 'react';

type Props = {
  children?: React.ReactNode | string;
};

const Paragraph = ({ children }: Props) => {
  if (typeof children === 'string') {
    return (
      <div>
        {children.split('\n').map((line, index) => (
          <p key={index} className="text-text">
            {line}
          </p>
        ))}
      </div>
    );
  }

  return <p className="text-text">{children}</p>;
};

const Heading1 = ({ children }: Props) => {
  return (
    <h1 className="mt-[0.5em] text-36-700 text-text border-b-1 border-solid border-border">
      {children}
    </h1>
  );
};

const Heading2 = ({ children }: Props) => {
  return (
    <h2 className="mt-[0.5em] text-28-700 text-text border-b-1 border-solid border-border">
      {children}
    </h2>
  );
};

const Heading3 = ({ children }: Props) => {
  return <h3 className="mt-[0.5em] text-20-400 text-text">{children}</h3>;
};

const Heading4 = ({ children }: Props) => {
  return <h3 className="mt-[0.5em] text-18-400 text-text">{children}</h3>;
};

const UnorderedList = ({ children }: Props) => {
  return <ul className="pl-32 list-disc div>div>&:mt-14">{children}</ul>;
};

const OrderedList = ({ children }: Props) => {
  return <ol className="pl-32 list-decimal div>div>&:mt-14">{children}</ol>;
};

const ListItem = ({ children }: Props) => {
  if (
    typeof children === 'string' ||
    (Array.isArray(children) &&
      children.some((child) => typeof child === 'string'))
  ) {
    children = <div className="text-text">{children}</div>;
  }

  return (
    <li className="not(:first-of-type):mt-14 text-text">
      <div className="flex flex-col gap-14 text-text">{children}</div>
    </li>
  );
};

const Blockquote = ({ children }: Props) => {
  return (
    <blockquote className="flex flex-col p-16 border-l-4 border-dashed gap-14 border-1 border-border border-l-solid text-text-quote">
      {children}
    </blockquote>
  );
};

const Anchor = ({
  children,
  ...props
}: Props & HTMLProps<HTMLAnchorElement>) => {
  return (
    <a
      className="inline-block underline text-main visited:text-[mediumpurple] after:content-['🔗'] after:text-[0.9em]"
      {...props}
    >
      {children}
    </a>
  );
};

const Image = ({ ...props }: HTMLProps<HTMLImageElement>) => {
  return <img className="block mx-auto my-0" {...props} />;
};

const Strong = ({ children }: Props) => {
  return <strong className="text-text">{children}</strong>;
};

const Table = ({ children }: Props) => {
  return (
    <table className="overflow-hidden border-collapse rounded-2 [$_th]:px-8 [$_th]:py-4 [th]:border-1 [th]:border-solid th:border-border">
      {children}
    </table>
  );
};

const Code = ({ children, ...props }: Props) => {
  return (
    <code
      className="w-fit px-4 mx-2 border-1 border-solid border-border rounded-4 bg-bg-footer text-main font-[Consolas,Monaco,monospace]"
      {...props}
    >
      {children}
    </code>
  );
};

export const markdownComponents = {
  p: Paragraph,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  strong: Strong,
  a: Anchor,
  blockquote: Blockquote,
  img: Image,
  table: Table,
  code: Code,
};
