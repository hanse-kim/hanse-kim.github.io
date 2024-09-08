import React from 'react';

type CustomImageProps = {
  className?: string;
  src?: string;
  alt?: string;
  /** height / width */
  ratio?: number;
};

export const CustomImage = ({
  className = '',
  ratio,
  src,
  ...props
}: CustomImageProps) => {
  return (
    <div
      className={`relative w-full h-full flex overflow-hidden ${className}`}
      style={{ paddingBottom: !!ratio ? `${ratio * 100}%` : undefined }}
    >
      {!!src && (
        <img
          className={`peer ${
            !!ratio ? 'absolute inset-0 h-full w-full' : 'w-full'
          } object-cover opacity-100 transition-opacity data-[loaded=false]:absolute data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`}
          src={src}
          {...props}
          onLoad={(e) => {
            e.currentTarget.dataset.loaded = 'true';
          }}
          onError={(e) => {
            e.currentTarget.dataset.error = 'true';
          }}
        />
      )}
      <div
        className={`flex flex-shrink-0 absolute inset-0 bg-bg-alt animate-pulse peer-data-[loaded=true]:hidden`}
      />
    </div>
  );
};
