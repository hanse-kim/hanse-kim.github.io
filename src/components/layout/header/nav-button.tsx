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
      className="cursor-pointer w-fit text-18-400 drop-shadow-transparent transition-shadow disabled:cursor-default hover:drop-shadow-text data-[active=true]:drop-shadow-text group"
      to={to}
      data-active={to === path}
    >
      <span>{children}</span>
      <div className="w-full h-1 mx-auto transition-transform scale-x-0 bg-slate-900 group-hover:scale-x-100 group-data-[active=true]:scale-x-100" />
    </Link>
  );
};
