import React from 'react';

type TitledSectionProps = {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
};

export const TitledSection = ({
  children,
  title,
  subtitle,
}: TitledSectionProps) => {
  return (
    <section>
      <h2 className="text-32-500 text-center border-solid border-b-1 border-border">
        {title}
      </h2>
      <p className="text-16-500 text-center ">{subtitle}</p>
      {children}
    </section>
  );
};
