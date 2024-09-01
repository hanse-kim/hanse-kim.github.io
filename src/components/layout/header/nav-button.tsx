import { Link } from 'gatsby';
import React from 'react';
import { Route } from 'src/_libs/constants/routes';
import { RouterUtils } from 'src/_libs/utils/router.utils';
import { usePage } from 'src/contexts/page-context';

type NavButtonProps = {
  children?: React.ReactNode;
} & (
  | {
      to: Route;
      toBack?: false;
    }
  | { to?: ''; toBack: true }
);

export const NavButton = ({ children, to, toBack }: NavButtonProps) => {
  const { path } = usePage();

  const styles =
    'cursor-pointer w-fit text-18-300-footer drop-shadow-transparent transition-shadow disabled:cursor-default desktop:hover:drop-shadow-text desktop:hover:text-text data-[active=true]:drop-shadow-text data-[active=true]:text-text after:block after:w-full after:h-[1px] after:bg-text after:scale-x-0 desktop:hover:after:scale-x-100 after:transition-transform after:data-[active=true]:scale-x-100';

  if (toBack) {
    return (
      <button className={styles} onClick={RouterUtils.back}>
        {children}
      </button>
    );
  }

  return (
    <Link className={styles} to={`${to}`} data-active={to === path}>
      {children}
    </Link>
  );
};
