import { Link } from 'gatsby';
import React from 'react';
import { Route } from 'src/_libs/constants/routes';
import { usePage } from 'src/contexts/page-context';

type NavButtonProps = {
  children?: React.ReactNode;
  to: Route;
};

export const NavButton = ({ children, to }: NavButtonProps) => {
  const { path } = usePage();

  return (
    <Link
      className="cursor-pointer w-fit text-18-300-footer drop-shadow-transparent transition-shadow disabled:cursor-default desktop:hover:drop-shadow-text desktop:hover:text-text data-[active=true]:drop-shadow-text data-[active=true]:text-text after:block after:w-full after:h-[1px] after:bg-text after:scale-x-0 desktop:hover:after:scale-x-100 after:transition-transform after:data-[active=true]:scale-x-100"
      to={to}
      data-active={to === path}
    >
      {children}
    </Link>
  );
};
