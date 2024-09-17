import React from 'react';

type RichTextProps = {
  value: string;
};

export const RichText = ({ value }: RichTextProps) => {
  const parts = value.split(/(\*\*[^*]+\*\*|\*[^*]+\*|~~[^~]+~~)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <b key={index} className="font-bold text-currentColor">
              {part.slice(2, -2)}
            </b>
          );
        }

        if (part.startsWith('*') && part.endsWith('*')) {
          return (
            <i key={index} className="italic text-currentColor">
              {part.slice(1, -1)}
            </i>
          );
        }

        if (part.startsWith('~~') && part.endsWith('~~')) {
          return (
            <s key={index} className="line-through text-currentColor">
              {part.slice(2, -2)}
            </s>
          );
        }

        return part;
      })}
    </>
  );
};
